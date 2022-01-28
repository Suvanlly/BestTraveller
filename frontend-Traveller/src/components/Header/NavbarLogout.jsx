import React from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import * as actionCreators from "./store/actionCreators"
import logo from "./img/logo.png"
import {
  Wrap,
  NavbarLeft,
  NavbarRight,
  Item,
  Avatar,
  UserName,
  Logout,
  Logo,
} from "./styles/navbar"
import configuration from "../../config/config"

const NavbarLogout = ({ isShow, logout, userImage, userFirstName }) => (
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
      {isShow && <Logout onClick={logout}>Log out</Logout>}
      <Link to="/user">
        <Avatar
          src={`${configuration.api.backend_api}/img/users/${userImage}`}
          alt="User"
        />
      </Link>
      <UserName>{userFirstName}</UserName>
    </NavbarRight>
  </Wrap>
)

NavbarLogout.propTypes = {
  isShow: PropTypes.bool,
  logout: PropTypes.func.isRequired,
  userImage: PropTypes.string.isRequired,
  userFirstName: PropTypes.string.isRequired,
}

NavbarLogout.defaultProps = {
  isShow: undefined,
}

const mapStateToProps = (state) => ({
  userFirstName: state.header.userFirstName,
  userImage: state.header.userImage,
})

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch(actionCreators.logout())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavbarLogout))
