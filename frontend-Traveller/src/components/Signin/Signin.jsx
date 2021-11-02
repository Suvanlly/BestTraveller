import React, { Component } from "react"
import Validation from "./Validation"
import SignWrapper from "./SignWrapper"
import { SigninBox, CloseIcon, Header } from "./styles/signin"
import closeIcon from "./img/cancel.png"

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignIn: true,
    }
    this.handleShowSignIn = this.handleShowSignIn.bind(this)
  }

  handleShowSignIn() {
    this.setState({
      showSignIn: undefined,
    })
  }

  render() {
    const { showSignIn } = this.state
    return (
      <>
        {showSignIn === true && (
          <SigninBox>
            <CloseIcon
              src={closeIcon}
              alt="close"
              onClick={this.handleShowSignIn}
            />
            <Header>Sign in</Header>
            <Validation />
            <SignWrapper />
          </SigninBox>
        )}
      </>
    )
  }
}

export default Signin
