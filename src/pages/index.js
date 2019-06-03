import { Container, Hero, HeroBody, Title } from 'bloomer';
import { Link } from "gatsby"
import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero isColor="dark" isBold isSize="medium">
      <HeroBody>
        <Container hasTextAlign="centered">
          <Title>
            <Link to="/page-2/">Go to page 2</Link>
          </Title>
          <Image />
        </Container>
      </HeroBody>
    </Hero>
  </Layout>
)

export default IndexPage
