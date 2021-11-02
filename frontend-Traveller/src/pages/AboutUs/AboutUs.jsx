import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import NavbarLogout from "../../components/Header/NavbarLogout"
import Navbar from "../../components/Header/Navbar"
import Banner from "./Banner/Banner"
import BestChoice from "./BestChoice/BestChoice"
import NoDistance from "./NoDistance/NoDistance"
import WhyNotUs from "./WhyChooseUs/WhyChooseUs"
import Footer from "../../components/Footer/Footer"

const AboutUs = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? <NavbarLogout isShow /> : <Navbar />}
    <Banner />
    <BestChoice />
    <NoDistance />
    <WhyNotUs />
    <Footer />
  </>
)

AboutUs.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

export default connect(mapStateToProps, null)(AboutUs)
