import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import NavbarLogout from "../../components/Header/NavbarLogout"
import Navbar from "../../components/Header/Navbar"
import Banner from "./Banner/Banner"
import CardContainer from "./CardContainer/CardContainer"
import Footer from "../../components/Footer/Footer"

const Packages = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? <NavbarLogout isShow /> : <Navbar />}
    <Banner />
    <CardContainer />
    <Footer />
  </>
)

Packages.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

export default connect(mapStateToProps, null)(Packages)
