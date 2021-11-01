import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { bookTour } from "../../../api/api"
import { Wrapper, Title, Content, Button } from "./styles/style"

const BookNow = ({ isLoggedIn, userEmail, tour }) => (
  <>
    <Wrapper>
      <Title>What are you waiting for?</Title>
      <Content>What a wonderful trip! Make it yours today!</Content>
      {isLoggedIn ? (
        // eslint-disable-next-line react/prop-types
        <Button onClick={() => bookTour(userEmail, tour._id)}>Book Now</Button>
      ) : (
        <Button>Log in to book tour</Button>
      )}
    </Wrapper>
  </>
)

BookNow.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userEmail: PropTypes.string.isRequired,
  tour: PropTypes.shape({}).isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
  userEmail: state.header.userEmail,
})

export default connect(mapStateToProps, null)(BookNow)
