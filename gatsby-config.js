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
    siteLocale: 'en', // Language Tag on <html> element
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify-cache",
    "gatsby-plugin-netlify",
    "gatsby-plugin-catch-links",
  ],
}
