import React from "react"
import { Link, withRouter } from "react-router-dom"
import { Wrap, NavbarLeft, NavbarRight, Item, Logo } from "./styles/navbar"
import RegisterAndLogin from "./RegisterAndLogin"
import logo from "./img/logo.png"

const Navbar = () => (
  <Wrap>
    <NavbarLeft>
      <Link to="/">
        <Item href="/">
          <Logo src={logo} alt="Logo" />
        </Item>
      </Link>
      <Link to="/">
        <Item>Home</Item>
      </Link>
      <Link to="/packages">
        <Item>Packages</Item>
      </Link>
      <Link to="/about-us">
        <Item>About us</Item>
      </Link>
      <Link to="/contact-us">
        <Item>Contact us</Item>
      </Link>
    </NavbarLeft>
    <NavbarRight>
      <RegisterAndLogin />
    </NavbarRight>
  </Wrap>
)

export default withRouter(Navbar)
