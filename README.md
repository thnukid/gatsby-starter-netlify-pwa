<p align="center">
  <a href="https://next.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's starter with Material-Ui and Netlify
</h1>

## :fire: Features 2.0.0

- Removed [Bulma CSS Framework](https://bulma.io/)
- Removed [Bloomer](https://bloomer.js.org)

- Added [Material-Ui](https://material-ui.com/)
- Added [SEO with OpenGraph + Twitter ](https://github.com/LekoArts/gatsby-starter-prismic)
  * Generated based on the `siteMetadata` tag in the [gatsby-config.js](gatsby-config.js)
- Added [Cypress Integration Test with Cypress Axe-A11y checker](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-cypress)
- Added [Redux For Statemanagement](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux)
- Added [Storybook For Visual Component Testing and Design System](https://www.gatsbyjs.org/docs/visual-testing-with-storybook/)
  * Looks for stories in `src` folder with filename `/\.stories\.js$/`, eg [src/components/example.stories.js](src/components/example.stories.js)
- Added [gatsby-plugin-offline 3.x](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-offline)
  * [custom-sw-code.js For Workbox](./src/custom-sw-code.js)
  * Pre-cache files [gatsby-config.js](./gatsby-config.js)
- Added [DOTENV](#)
  * `cp .env.development.example .env.development`
  * `cp .env.production.example .env.production`
  * `cp .env.staging.example .env.staging`
  * `ActiveEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"`

## :fire: Features 1.0.0

- Based on [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default)
- Sass preprocessor (with [gatsby-plugin-sass](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sass))
- Supports Gatsby-image
- Shows an alert box, when a service worker is outdated and refreshes the app
- [Bulma CSS Framework](https://bulma.io/)
- [Bloomer](https://bloomer.js.org)
- [gatsby-plugin-netlify-cache](https://github.com/axe312ger/gatsby-plugin-netlify-cache)
- [gatsby-plugin-netlify](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-netlify)
- [gatsby-plugin-catch-links](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-catch-links)

## :rocket: Dev environment

Run it by:

```sh
yarn develop
```

Using as a starter template:

```sh
gatsby new my-new-project https://github.com/thnukid/gatsby-starter-netlify-pwa
```

## :dizzy: Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/thnukid/gatsby-starter-netlify-pwa)
