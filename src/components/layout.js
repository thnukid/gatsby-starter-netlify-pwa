/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import "./layout.scss"

import { Container } from "bloomer"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container>
          <Header siteTitle={'Bloomer'} />
        </Container>
        <Container>{children}</Container>
        <Container>
          <Footer siteTitle={data.site.siteMetadata.title} />
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
