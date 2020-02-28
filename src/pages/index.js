import { Container, Hero, HeroBody, Title } from 'bloomer';
import { Link } from "gatsby"
import React from "react"
import Button from '@material-ui/core/Button';


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
            <Button variant="contained" color="primary">
              <Link to="/page-2/">Go to page 2</Link>
            </Button>
          </Title>
          <Image />
        </Container>
      </HeroBody>
    </Hero>
  </Layout>
)

export default IndexPage
