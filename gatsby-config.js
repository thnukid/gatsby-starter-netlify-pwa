const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.info(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: "Gatsby Starter",
    titleTemplate: "%s · Material-Ui + Netlify",
    description: "The start of a new journey",
    siteUrl: "http://localhost:8000", // No trailing slash allowed!
    image: "src/assets/gatsby-icon.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@thnukid",
    facebookPagename: "thnukid",
    ogLocale: "en_US",
    siteLocale: "en", // Language Tag on <html> element
  },
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/assets/app-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-offline", // list after gatsby-plugin-manifest
      options: {
        precachePages: ["/about/"], // ["/about/", "/projects/*"]
        appendScript: require.resolve("./src/custom-sw-code.js"),
      },
    },
    {
      resolve: require.resolve("./plugins/gatsby-discogs-source-graqhql"),
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
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-netlify",
    "gatsby-plugin-catch-links",
  ],
}
