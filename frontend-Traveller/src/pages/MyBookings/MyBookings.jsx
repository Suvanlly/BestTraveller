import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Navbar from "../../components/Header/Navbar"
import NavbarLogout from "../../components/Header/NavbarLogout"
import Bookings from "./components/Bookings"

const MyBookings = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? <NavbarLogout isShow={false} /> : <Navbar />}
    <Bookings />
  </>
)

MyBookings.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

export default connect(mapStateToProps, null)(MyBookings)
