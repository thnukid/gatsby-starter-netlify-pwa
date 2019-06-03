import { Link } from "gatsby"
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarItem,
  NavbarMenu,
  NavbarStart,
} from "bloomer"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <Navbar>
    <NavbarBrand>
      <NavbarItem>{siteTitle}</NavbarItem>
      <NavbarItem isHidden="desktop">
        <Link to="/page-2/">Page 2</Link>
      </NavbarItem>
      <NavbarItem isHidden="desktop">
        <Link to="/page-2/">Page 2</Link>
      </NavbarItem>
      <NavbarBurger />
    </NavbarBrand>
    <NavbarMenu>
      <NavbarStart>
        <NavbarItem href="/">Index</NavbarItem>
        <NavbarItem href="/page-2/">Page 2</NavbarItem>
      </NavbarStart>
      <NavbarEnd>
        <NavbarItem
          href="https://github.com/thnukid/gatsby-starter-netlify-pwa"
          isHidden="touch"
        >
          On Github
        </NavbarItem>
      </NavbarEnd>
    </NavbarMenu>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
