/* eslint-disable node/no-unsupported-features/es-syntax */
import React, { Component } from "react"
import { ReactComponent as AddressSVG } from "./img/Address.svg"
import { ReactComponent as PhoneSVG } from "./img/Phone.svg"
import { ReactComponent as EmailSVG } from "./img/Email.svg"
import { ReactComponent as FacebookSVG } from "./img/Facebook.svg"
import { ReactComponent as TwitterSVG } from "./img/Twitter.svg"
import { ReactComponent as SkypeSVG } from "./img/Skype.svg"
import contactValidate from "./ContactValidate"
import {
  ContactBox,
  LeftText,
  Title,
  Underline,
  Text,
  Address,
  AddressText,
  Phone,
  PhoneText,
  Email,
  EmailText,
  Icon,
  RightBox,
  Form,
  Input,
  Message,
  Button,
  Error,
} from "./styles/contactForm"

const initialData = {
  value: "",
  blurred: false,
  touched: false,
}

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        name: initialData,
        email: initialData,
        phone: initialData,
        message: initialData,
      },
      isFormSubmit: false,
    }
    this.handleDataChange = this.handleDataChange.bind(this)
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this)
    this.handleBlurredChange = this.handleBlurredChange.bind(this)
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

  validate() {
    const { data } = this.state
    const error = {}
    Object.keys(data).forEach((name) => {
      const errorOfName = contactValidate(name, data)
      if (!errorOfName) {
        return
      }
      error[name] = errorOfName
    })
    return error
  }

  render() {
    const { data } = this.state
    const error = this.validate(data)
    const hasError = Object.keys(error).length > 0
    return (
      <ContactBox>
        <LeftText>
          <Title>
            Get in <Underline>touch</Underline>
          </Title>
          <Text>
            Give us a call, connect on social, shoot us an email or simply just
            book online and let us make your Aussie Adventure a reality.
          </Text>
          <Address>
            <AddressSVG />
            <AddressText>32 Ann st, Brisbane, Australia</AddressText>
          </Address>
          <Phone>
            <PhoneSVG />
            <PhoneText>+61 042427670</PhoneText>
          </Phone>
          <Email>
            <EmailSVG />
            <EmailText>besttraveller@gmail.com</EmailText>
          </Email>
          <Icon>
            <FacebookSVG />
            <TwitterSVG />
            <SkypeSVG />
          </Icon>
        </LeftText>
        <RightBox>
          <Form action="https://formspree.io/f/mwkarnbg" method="POST">
            <Input
              name="name"
              type="text"
              placeholder="Name"
              value={data.name.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
            />
            <Error>{this.getErrorMessage(error, "name")}</Error>

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={data.email.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
            />
            <Error>{this.getErrorMessage(error, "email")}</Error>

            <Input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={data.phone.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
            />
            <Error>{this.getErrorMessage(error, "phone")}</Error>
            <Message
              name="message"
              type="text"
              placeholder="Message"
              value={data.message.value}
              onChange={this.handleDataChange}
              onBlur={this.handleBlurredChange}
            />
            <Error>{this.getErrorMessage(error, "message")}</Error>
            <Button disable={hasError} type="submit">
              Send
            </Button>
          </Form>
        </RightBox>
      </ContactBox>
    )
  }
}

export default ContactForm
