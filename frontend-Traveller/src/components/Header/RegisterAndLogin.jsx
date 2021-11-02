import React from "react"
import { Wrap, StyledButton, Icon } from "./styles/button"
import Register from "../Register"
import Dropdown from "./Dropdown"
import { DropdownBox } from "./styles/dropdown"
import Signin from "../Signin/Signin"

class RegisterAndLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showDrop: false,
      showSign: false,
    }
    this.handleShowModalChange = this.handleShowModalChange.bind(this)
    this.handleShowDropdown = this.handleShowDropdown.bind(this)
    this.handleShowSignIn = this.handleShowSignIn.bind(this)
  }

  handleShowModalChange() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }))
  }

  handleShowDropdown() {
    this.setState((prevState) => ({
      showDrop: !prevState.showDrop,
    }))
  }

  handleShowSignIn() {
    this.setState((prevState) => ({
      showSign: !prevState.showSign,
    }))
  }

  render() {
    const { showModal, showDrop, showSign } = this.state
    return (
      <>
        <Wrap>
          <StyledButton onClick={this.handleShowModalChange}>
            Register
          </StyledButton>
          <StyledButton onClick={this.handleShowSignIn}>Sign In</StyledButton>
          <Icon onClick={this.handleShowDropdown}>
            <i className="fa fa-bars" />
          </Icon>
        </Wrap>
        {showModal && <Register />}
        {showSign && <Signin />}
        {showDrop ? <Dropdown /> : <DropdownBox off />}
      </>
    )
  }
}

export default RegisterAndLogin
