import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Navbar from "../../components/Header/Navbar"
import NavbarLogout from "../../components/Header/NavbarLogout"
import Content from "./components/Content"

const ForgotPwdPage = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? <NavbarLogout isShow /> : <Navbar />}
    <Content />
  </>
)

ForgotPwdPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

export default connect(mapStateToProps, null)(ForgotPwdPage)
