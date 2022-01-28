import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionCreators from "../../../components/Header/store/actionCreators"
import accountIcon from "./img/account.png"
import bookingIcon from "./img/booking.png"
import paymentIcon from "./img/payment.png"
import reviewIcon from "./img/review.png"
import eyeIcon from "./img/eye.png"
import eyecloseIcon from "./img/eyeclose.png"
import {
  Background,
  ProfileWrap,
  Left,
  ListWrap,
  List,
  Link,
  Icon,
  Right,
  Header,
  Photo,
  Title,
  Input,
  Button,
  UploadImage,
  IconCurrent,
  IconNew,
  IconConfirm,
} from "./styles/profile"
import configuration from "../../../config/config"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userFirstName: props.userFirstName,
      userLastName: props.userLastName,
      userEmail: props.userEmail,
      userImage: props.userImage,
      isLoggedIn: props.isLoggedIn,
      currentPassword: "",
      newPassword: "",
      confirmedPassword: "",
      shownCurrent: false,
      shownNew: false,
      shownConfirm: false,
    }
    this.currentVisible = this.currentVisible.bind(this)
    this.newVisible = this.newVisible.bind(this)
    this.confirmVisible = this.confirmVisible.bind(this)
  }

  handleInputChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      this.setState({
        userImage: e.target.files[0].name,
      })
    }
  }

  currentVisible() {
    this.setState((prevState) => ({
      shownCurrent: !prevState.shownCurrent,
    }))
  }

  newVisible() {
    this.setState((prevState) => ({
      shownNew: !prevState.shownNew,
    }))
  }

  confirmVisible() {
    this.setState((prevState) => ({
      shownConfirm: !prevState.shownConfirm,
    }))
  }

  render() {
    const {
      userFirstName,
      userLastName,
      userEmail,
      userImage,
      isLoggedIn,
      shownCurrent,
      shownNew,
      shownConfirm,
      currentPassword,
      newPassword,
      confirmedPassword,
    } = this.state
    const { updateUser, updatePassword } = this.props
    return (
      <Background>
        <ProfileWrap>
          <Left>
            <ListWrap>
              <List>
                <Icon src={accountIcon} alt="account" />
                <Link href="/user" style={{ color: "#3ab2b3" }}>
                  Profile
                </Link>
              </List>
              <List>
                <Icon src={bookingIcon} alt="booking" />
                <Link href="/user/bookings">Bookings</Link>
              </List>
              <List>
                <Icon src={paymentIcon} alt="payment" />
                <Link href="https://dashboard.stripe.com/test/payments">
                  Payment
                </Link>
              </List>
              <List>
                <Icon src={reviewIcon} alt="review" />
                <Link href="/user/reviews">Reviews</Link>
              </List>
            </ListWrap>
          </Left>
          <Right>
            <Header>Personal Information</Header>
            <Photo
              src={`${configuration.api.backend_api}/img/users/${userImage}`}
              id="userImage"
              alt="profile"
            />
            <UploadImage
              type="file"
              name="userImage"
              accept="image/*"
              onChange={(e) => this.handleImageChange(e)}
            />
            <Title>First Name</Title>
            <Input
              type="text"
              id="userFirstName"
              value={userFirstName}
              onChange={(e) => this.handleInputChange(e)}
            />
            <Title>Last Name</Title>
            <Input
              type="text"
              id="userLastName"
              value={userLastName}
              onChange={(e) => this.handleInputChange(e)}
            />
            <Button
              onClick={(e) =>
                updateUser(
                  e,
                  userFirstName,
                  userLastName,
                  userEmail,
                  userImage,
                  isLoggedIn
                )
              }
            >
              Update Profile
            </Button>
            <Title>Current Password</Title>
            <Input
              type={shownCurrent ? "text" : "password"}
              id="currentPassword"
              onChange={(e) => this.handleInputChange(e)}
            />
            <IconCurrent
              src={shownCurrent ? eyeIcon : eyecloseIcon}
              onClick={this.currentVisible}
            />
            <Title>New Password</Title>
            <Input
              type={shownNew ? "text" : "password"}
              id="newPassword"
              onChange={(e) => this.handleInputChange(e)}
            />
            <IconNew
              src={shownNew ? eyeIcon : eyecloseIcon}
              onClick={this.newVisible}
            />
            <Title>Confirm new password</Title>
            <Input
              type={shownConfirm ? "text" : "password"}
              id="confirmedPassword"
              onChange={(e) => this.handleInputChange(e)}
            />
            <IconConfirm
              src={shownConfirm ? eyeIcon : eyecloseIcon}
              onClick={this.confirmVisible}
            />
            <Button
              onClick={(e) =>
                updatePassword(
                  e,
                  currentPassword,
                  newPassword,
                  confirmedPassword,
                  userEmail
                )
              }
            >
              Update Password
            </Button>
          </Right>
        </ProfileWrap>
      </Background>
    )
  }
}

Profile.propTypes = {
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  updateUser: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
  userFirstName: state.header.userFirstName,
  userLastName: state.header.userLastName,
  userEmail: state.header.userEmail,
  userImage: state.header.userImage,
})

const mapDispatchToProps = (dispatch) => ({
  updateUser(e, userFirstName, userLastName, userEmail, userImage, isLoggedIn) {
    dispatch(
      actionCreators.updateUser(
        e,
        userFirstName,
        userLastName,
        userEmail,
        userImage,
        isLoggedIn
      )
    )
  },
  updatePassword(
    e,
    currentPassword,
    newPassword,
    confirmedPassword,
    userEmail
  ) {
    dispatch(
      actionCreators.updatePassword(
        e,
        currentPassword,
        newPassword,
        confirmedPassword,
        userEmail
      )
    )
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
