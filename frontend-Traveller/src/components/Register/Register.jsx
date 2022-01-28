/* eslint-disable node/no-unsupported-features/es-syntax */
import React from "react"
import swal from "sweetalert"
import { register } from "../../api/api"
import validation from "./Validation"
import closeIcon from "./img/cancel.png"
import {
  Card,
  Title,
  InputContainer,
  Label,
  Input,
  Button,
  Close,
  CloseIcon,
  Error,
} from "./styles/register"
import RegisterSuccessful from "./RegisterSuccessful"

const initialData = {
  value: "",
  blurred: false,
  touched: false,
}

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: true,
      isRegister: false,
      data: {
        firstName: initialData,
        lastName: initialData,
        email: initialData,
        password: initialData,
        confirmPassword: initialData,
      },
      isFormSubmit: false,
    }
    this.handleShowModalChange = this.handleShowModalChange.bind(this)
    this.handleDataChange = this.handleDataChange.bind(this)
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this)
    this.handleBlurredChange = this.handleBlurredChange.bind(this)
  }

  handleShowModalChange(newShowModal) {
    this.setState({
      showModal: newShowModal,
    })
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    this.setState({
      isFormSubmit: newIsFormSubmit,
    })
  }

  handleDataChange(e) {
    const { name, value } = e.target
    this.setData(name, {
      value,
      touched: true,
    })
  }

  handleBlurredChange(e) {
    const { name } = e.target
    this.setData(name, {
      blurred: true,
    })
  }

  setData(name, newData) {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          ...newData,
        },
      },
    }))
  }

  getErrorMessage(error, name) {
    const { data, isFormSubmit } = this.state
    return (data[name].blurred || isFormSubmit) && error[name]
  }
  // Derived state

  validation() {
    const { data } = this.state
    const error = {}
    Object.keys(data).forEach((name) => {
      const errorOfName = validation(name, data)
      if (!errorOfName) {
        return
      }
      error[name] = errorOfName
    })
    return error
  }

  signUp(inputData) {
    register(inputData)
      .then((res) => {
        this.setState({
          isRegister: true,
        })
      })
      .catch((err) => {
        swal("Oops", "This email address is already exist", "error")
      })
  }

  render() {
    const { showModal, data, isRegister } = this.state
    const error = this.validation(data)
    let component

    if (showModal === true && isRegister === false) {
      component = (
        <Card
          onSubmit={(e) => {
            e.preventDefault()
            this.handleIsFormSubmitChange(true)
            this.signUp(data)
          }}
        >
          <Close onClick={() => this.handleShowModalChange(undefined)}>
            <CloseIcon src={closeIcon} alt="close" />
          </Close>
          <InputContainer>
            <Title>Register</Title>
            <Label>First Name</Label>
            <Input
              value={data.firstName.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, "firstName")}
              type="text"
              name="firstName"
              placeholder="Jack"
            />
            <Error>{this.getErrorMessage(error, "firstName")}</Error>
            <Label>Last Name</Label>
            <Input
              value={data.lastName.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, "lastName")}
              type="text"
              name="lastName"
              placeholder="Anderson"
            />
            <Error>{this.getErrorMessage(error, "lastName")}</Error>
            <Label>Email</Label>
            <Input
              value={data.email.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, "email")}
              type="email"
              name="email"
              placeholder="Jack.anderson@gmail.com"
            />
            <Error>{this.getErrorMessage(error, "email")}</Error>
            <Label>Password</Label>
            <Input
              value={data.password.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, "password")}
              type="password"
              placeholder="********"
              id="login-password"
              name="password"
            />
            <Error>{this.getErrorMessage(error, "password")}</Error>
            <Label>Confirm Password</Label>
            <Input
              value={data.confirmPassword.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
              error={this.getErrorMessage(error, "confirmPassword")}
              type="password"
              placeholder="********"
              id="login-confirm-password"
              name="confirmPassword"
            />
            <Error>{this.getErrorMessage(error, "confirmPassword")}</Error>
            <Button type="submit">Register</Button>
          </InputContainer>
        </Card>
      )
    } else if (showModal === undefined) {
      component = null
    } else {
      component = <RegisterSuccessful firstName={data.firstName.value} />
    }

    return <>{component}</>
  }
}

export default Register
