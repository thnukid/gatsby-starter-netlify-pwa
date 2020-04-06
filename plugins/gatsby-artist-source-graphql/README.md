# gatsby-artist-source-graqhql

Source artist information from these services

* soundcloud.com account tracks and search query
* discogs.com artist's releases
* mixcloud.com discover endpoint

`artwork_url_local` is available for all services and provides gatsby-image
with a local file, you can use in your queries:

```
nodes {
  artwork_url_local {
    childImageSharp {
      fixed(width: 100) {
        src
      }
    }
  }
}
```


## Install

`npm install --save gatsby-artist-source-graqhql`

## How to use

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    //This plugin exists only once but can consume an array of endpoints
    {
      resolve: require.resolve("./plugins/gatsby-artist-source-graphql"),
      options: {
        apis: [
          {
            prefix: "SoundCloud",
            baseUrl: "https://api.soundcloud.com/",
            endpoints: ["tracks", "users/2346803/tracks"],
            params: {
              client_id: process.env.GATSBY_SC_CLIENT_ID,
              limit: 100,
              q: "Albert%20Van%20Abbe",
            },
            method: "GET",
          },
          {
            prefix: "Discogs",
            baseUrl: "https://api.discogs.com/artists/1533956/",
            endpoints: ["releases"],
            params: {
              key: process.env.GATSBY_DISCOGS_CONSUMER_KEY,
              secret: process.env.GATSBY_DISCOGS_CONSUMER_SECRET,
            },
            pagination: {
              contentField: 'releases'
            },
            method: "GET",
          },
          {
            prefix: "Mixcloud",
            baseUrl: "https://api.mixcloud.com/discover/albert-van-abbe/latest/",
            pagination: {
              contentField: 'data'
            },
            method: "GET",
          },
        ],
      },
    }
  ],
}
```

Define .env

* GATSBY_DISCOGS_CONSUMER_KEY
* GATSBY_DISCOGS_CONSUMER_SECRET
* GATSBY_SC_CLIENT_ID

## Query

```
query MyQuery {
  allSoundCloudTracks(limit: 10) {
    totalCount
    nodes {
      artwork_url_local {
        childImageSharp {
          fixed(width: 100) {
            src
          }
        }
      }
    }
  }
  allSoundCloudUsers2346803Tracks(limit: 10) {
    totalCount
    nodes {
      title
      original_format
      artwork_url_local {
        childImageSharp {
          fixed(width: 100) {
            src
          }
        }
      }
    }
  }
  allDiscogsReleases {
    totalCount
    nodes {
      title
      artwork_url_local {
        childImageSharp {
          fixed(width: 100) {
            src
          }
        }
      }
    }
  }
  allMixcloudDiscoverAlbertVanAbbeLatest {
        totalCount
    nodes {
      name
      artwork_url_local {
        childImageSharp {
          fixed(width: 100) {
            src
          }
        }
      }
    }
  }
}
```
