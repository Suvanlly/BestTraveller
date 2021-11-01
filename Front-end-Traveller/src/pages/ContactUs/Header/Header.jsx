import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import NavbarLogout from "../../../components/Header/NavbarLogout"
import Navbar from "../../../components/Header/Navbar"
import { Container, Title } from "./styles"
import background from "./img/background.jpg"

const Header = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? <NavbarLogout isShow /> : <Navbar />}
    <Container img={background}>
      <Title>Contact Us</Title>
    </Container>
  </>
)

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

export default connect(mapStateToProps, null)(Header)
