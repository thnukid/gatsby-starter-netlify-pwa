/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// Shows an alert box if the service worker found a new update of the site.
exports.onServiceWorkerUpdateFound = () => {
  if (
    window.confirm(
      'This site has been updated with new data. Do you wish to reload the site to get the new data?'
    )
  ) {
    window.location.reload(true)
  }
}
