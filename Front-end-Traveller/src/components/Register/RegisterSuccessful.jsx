import React, { Component } from "react"
import PropTypes from "prop-types"
import tickIcon from "./img/checked.gif"
import {
  Body,
  Icon,
  Title,
  Text,
  Info,
  DoneButton,
} from "./styles/registerSuccessful"

class RegisterSuccessful extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      isShow: false,
    })
  }

  render() {
    const { isShow } = this.state
    const { firstName } = this.props
    return (
      <>
        {isShow && (
          <Body>
            <Icon src={tickIcon} alt="success" />
            <Title>Registration Successful</Title>
            <Info>
              <Text>
                Hi {firstName}, Welcome to BestTraveller! This is a big family
                to help you find your ideal tour. Let us start the journey! ✈️
              </Text>
            </Info>
            <DoneButton onClick={this.handleClick}>Done</DoneButton>
          </Body>
        )}
      </>
    )
  }
}

RegisterSuccessful.propTypes = {
  firstName: PropTypes.string.isRequired,
}

export default RegisterSuccessful
