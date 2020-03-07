const fetch = require('node-fetch')
exports.onPreInit = () => {
  console.log('Testing...')
}
exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  const { apis } = configOptions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  const sources = []

  // Helper function that processes a result to match Gatsby's node structure
  const processResult = ({ result, endpoint, prefix }) => {
    const nodeId = createNodeId(`${endpoint}-${result.id}`)
    const nodeContent = JSON.stringify(result)
    const nodeData = Object.assign({}, result, {
      id: nodeId,
      endpointId: result.id,
      parent: null,
      children: [],
      internal: {
        type: `${prefix}${customFormat(endpoint)}`,
        content: nodeContent,
        contentDigest: createContentDigest(result),
      },
    })

    return nodeData
  }

  const appendSources = ({ url, endpoint, prefix, method, pagination }) => {
    sources.push(
      fetchData(url, { method })
        .then(data => {
          // uses contentField?
          data = pagination ? data[pagination.contentField] : data

          if (Array.isArray(data)) {
            /* if fetchData returns multiple results */
            data.forEach(result => {
              const nodeData = processResult({
                result,
                endpoint,
                prefix,
              })
              createNode(nodeData)
            })
          } else {
            // Otherwise a single result has been returned
            const nodeData = processResult({
              result: data,
              endpoint,
              prefix,
            })
            createNode(nodeData)
          }
        })
        .catch(error => console.log('error:', error))
    )
  }

  apis.forEach(api => {
    /* check if the api request is an object with parameters */
    if (typeof api === 'object') {
      const { prefix, baseUrl, endpoints, params, method = 'GET', pagination } = api

      /* Add some error logging if required config options are mising */
      if (!baseUrl) {
        console.log('\x1b[31m')
        console.error(
          'error gatsby-source-rest-api option requires the baseUrl parameter'
        )
        console.log('')
        return
      }

      var completeUrl = null

      if (params) {
        var esc = encodeURIComponent
        var query = Object.keys(params)
          .map(k => esc(k) + '=' + esc(params[k]))
          .join('&')

        completeUrl = [baseUrl, query].join('?')
      }

      /* object is used and endpoints are set */
      if (endpoints && endpoints.length) {
        endpoints.forEach(endpoint => {
          appendSources({
            url:
              baseUrl[baseUrl.length - 1] === '/'
                ? `${baseUrl}${[endpoint, query].join('?')}`
                : `${baseUrl}/${[endpoint, query].join('?')}`,
            endpoint,
            prefix,
            method,
            pagination
          })
        })
        return
      }

      /* object is used but no endpoints are set */
      appendSources({
        url: completeUrl || baseUrl,
        endpoint: baseUrl,
        prefix,
        method,
        pagination
      })
      return
    }

    /* The default simply expects a api url as a string and no other options */
    if (typeof api === 'string') {
      if (api.length) {
        appendSources({
          url: api,
          endpoint: api,
          prefix: 'MultiApiSource',
          method: 'GET',
          pagination
        })
      }
    }
  })

  return Promise.all(sources)
}

// Helper function to fetch data
const fetchData = async (url, options = {}) => {
  const response = await fetch(`${url}`, options)
  console.info('[Request]', url)
  return await response.json()
}

//strips special characters and makes string camelcase
const customFormat = str => {
  return str
    .replace(/^.*\/\/[^\/]+/, '') //Removes domain
    .replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase()) //Capitalizes strings
    .replace(/\//g, '') //Removes slashes
    .replace(/\-+/g, '') //Removes hyphens
    .replace(/\s+/g, '') //Removes spaces
}

// https://viastudio.com/recursive-asynchronous-calls-with-javascript-and-es6/
