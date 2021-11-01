import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Navbar from "../../components/Header/Navbar"
import NavbarLogout from "../../components/Header/NavbarLogout"
import Profile from "./Profile/Profile"

const UserPage = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? <NavbarLogout isShow={false} /> : <Navbar />}
    <Profile />
  </>
)

UserPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

export default connect(mapStateToProps, null)(UserPage)
