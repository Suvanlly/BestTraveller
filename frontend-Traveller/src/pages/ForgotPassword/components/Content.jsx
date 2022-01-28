import React, { Component } from "react"
import { Link } from "react-router-dom"
import { sendEmail } from "../../../api/api"
import {
  Background,
  Wrapper,
  Text,
  Title,
  InputBox,
  Button,
} from "../styles/forgotPassword"

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
    }
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    })
  }

  render() {
    const { email } = this.state
    return (
      <Background>
        <Wrapper>
          <Text>
            Enter the email address associated with your account and we will
            send you a link to reset your password
          </Text>
          <Title>Email</Title>
          <InputBox type="email" onChange={(e) => this.handleEmailChange(e)} />
          <Link to="/forgot-password/reset">
            <Button onClick={() => sendEmail(email)}>Send</Button>
          </Link>
        </Wrapper>
      </Background>
    )
  }
}

export default Content
