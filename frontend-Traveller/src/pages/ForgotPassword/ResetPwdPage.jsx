import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Navbar from "../../components/Header/Navbar"
import NavbarLogout from "../../components/Header/NavbarLogout"
import ResetPassword from "./components/ResetPassword"

const ResetPwdPage = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? <NavbarLogout isShow /> : <Navbar />}
    <ResetPassword />
  </>
)

ResetPwdPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

export default connect(mapStateToProps, null)(ResetPwdPage)
