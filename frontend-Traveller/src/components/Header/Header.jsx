import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import NavbarLogout from "./NavbarLogout"
import {
  Video,
  Wrap,
  TextContainer,
  Text,
  SubText,
  Line,
} from "./styles/header"
import configuration from "../../config/config"

const Header = ({ isLoggedIn }) => (
  <>
    {isLoggedIn ? <NavbarLogout isShow /> : <Navbar />}
    <Wrap>
      <TextContainer>
        <Text>
          Welcome to <Line>BestTraveller</Line>
        </Text>
        <SubText>This is the place where your dream tour begins</SubText>
      </TextContainer>
    </Wrap>
    <Video
      src={`${configuration.api.backend_api}/img/video.mp4`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  </>
)

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

export default connect(mapStateToProps, null)(Header)
