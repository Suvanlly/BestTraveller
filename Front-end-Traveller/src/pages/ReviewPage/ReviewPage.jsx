import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Navbar from "../../components/Header/Navbar"
import NavbarLogout from "../../components/Header/NavbarLogout"
import Reviews from "./Reviews/Reviews"

const UserPage = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? <NavbarLogout isShow={false} /> : <Navbar />}
    <Reviews />
  </>
)

UserPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

export default connect(mapStateToProps, null)(UserPage)
