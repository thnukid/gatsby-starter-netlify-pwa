import { Footer, Column, Columns, Container, Content } from 'bloomer';
import PropTypes from "prop-types"
import React from "react"

const FooterNav = ({ siteTitle }) => (
  <Footer id="footer">
    <Container hasTextAlign='center'>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
          </Column>
        </Columns>
        <Content isSize="small">
          <p>
            The source code is licensed under MIT.
          </p>
        </Content>
      </Content>
    </Container>
  </Footer>
)

FooterNav.propTypes = {
  siteTitle: PropTypes.string,
}

FooterNav.defaultProps = {
  siteTitle: ``,
}

export default FooterNav
