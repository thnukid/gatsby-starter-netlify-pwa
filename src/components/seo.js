import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Facebook from "./Facebook"
import Twitter from "./Twitter"

const SEO = ({ title, description, image, pathname }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          facebookPagename,
          ogLocale,
          siteLocale,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }
      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <html lang={siteLocale} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
          </Helmet>
          <Facebook
            desc={seo.description}
            image={seo.image}
            title={seo.title}
            type={"website"}
            url={seo.url}
            locale={ogLocale}
            name={facebookPagename}
          />
          <Twitter
            title={seo.title}
            image={seo.image}
            desc={seo.description}
            username={twitterUsername}
          />
        </>
      )
    }}
  />
)
export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        twitterUsername
        facebookPagename
        ogLocale
        siteLocale
      }
    }
  }
`
