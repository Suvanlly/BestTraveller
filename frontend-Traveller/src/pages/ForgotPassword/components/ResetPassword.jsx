import React, { Component } from "react"
import { resetPassword } from "../../../api/api"
import {
  Background,
  Wrapper,
  Text,
  Title,
  InputBox,
  Button,
} from "../styles/forgotPassword"

class ResetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: "",
      password: "",
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  render() {
    const { token, password } = this.state
    return (
      <Background>
        <Wrapper>
          <Text style={{ padding: "80px 0 50px" }}>
            Please enter the secret key that sent to your email
          </Text>
          <Title>Secret key</Title>
          <InputBox
            id="token"
            type="password"
            onChange={(e) => this.handleChange(e)}
          />
          <Title>New Password</Title>
          <InputBox
            id="password"
            type="password"
            onChange={(e) => this.handleChange(e)}
          />
          <Button onClick={() => resetPassword(token, password)}>
            Confirm
          </Button>
        </Wrapper>
      </Background>
    )
  }
}

export default ResetPassword
