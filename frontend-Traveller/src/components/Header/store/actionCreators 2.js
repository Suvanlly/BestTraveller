import axios from "axios"
import swal from "sweetalert"
import configuration from "../../../config/config"
import * as actionTypes from "./actionTypes"

const userLogin = (
  userEmail,
  userFirstName,
  userLastName,
  userPassword,
  userImage
) => ({
  type: actionTypes.USER_LOGIN,
  userEmail,
  userFirstName,
  userLastName,
  userPassword,
  userImage,
})

const userLogout = () => ({
  type: actionTypes.USER_LOGOUT,
})

const updateUserInfo = (
  userFirstName,
  userLastName,
  userEmail,
  userImage,
  isLoggedIn
) => ({
  type: actionTypes.UPDATE_USER_INFO,
  userFirstName,
  userLastName,
  userEmail,
  userImage,
  isLoggedIn,
})

const updateUserPassword = (
  currentPassword,
  newPassword,
  confirmedPassword,
  userEmail
) => ({
  type: actionTypes.UPDATE_USER_PASS,
  currentPassword,
  newPassword,
  confirmedPassword,
  userEmail,
})

export const login = (values) => (dispatch) => {
  axios({
    method: "POST",
    url: `${configuration.api.backend_api}/api/v1/auth/login`,
    data: {
      email: values.email,
      password: values.password,
    },
    withCredentials: true,
  })
    .then((res) => {
      const userEmail = res.data.user.email
      const userPassword = res.data.user.password
      const userFirstName = res.data.user.firstName
      const userLastName = res.data.user.lastName
      const userImage = res.data.user.image
      const action = userLogin(
        userEmail,
        userFirstName,
        userLastName,
        userPassword,
        userImage
      )
      dispatch(action)
      swal("Welcome!", "You have successfully logged in!", "success")
    })
    .catch((err) => {
      swal("Oops!", "Wrong password", "error")
    })
}

export const logout = () => (dispatch) => {
  const action = userLogout()
  dispatch(action)
  swal("Goodbye!", "Successfully logged out", "success")
}

export const updateUser = (
  e,
  userFirstName,
  userLastName,
  userEmail,
  userImage,
  isLoggedIn
) => {
  e.preventDefault()
  return (dispatch) => {
    axios({
      method: "PATCH",
      url: `${configuration.api.backend_api}/api/v1/users/updateMe`,
      data: {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        image: userImage,
      },
      withCredentials: true,
    })
      .then((res) => {
        const action = updateUserInfo(
          userFirstName,
          userLastName,
          userEmail,
          userImage,
          isLoggedIn
        )
        dispatch(action)
        swal("Updated!", "You have successfully updated profile!", "success")
      })
      .catch((err) => {
        swal("Oops!", "Something went wrong!", "error")
      })
  }
}

export const updatePassword = (
  e,
  currentPassword,
  newPassword,
  confirmedPassword,
  userEmail
) => {
  e.preventDefault()
  return (dispatch) => {
    if (currentPassword === "") {
      swal("Oops", "You have to enter the current password", "error")
      return
    }
    if (newPassword === "") {
      swal("Oops", "New password cannot be empty", "error")
      return
    }
    if (newPassword === currentPassword) {
      swal(
        "Oops!",
        "Your new password cannot be the same as current password",
        "error"
      )
      return
    }
    if (newPassword !== confirmedPassword) {
      swal(
        "Oops!",
        "Confirm new password must be the same of new password",
        "error"
      )
      return
    }
    axios({
      method: "PATCH",
      url: `${configuration.api.backend_api}/api/v1/auth/updatePassword`,
      data: {
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmedPassword: confirmedPassword,
        email: userEmail,
      },
      withCredentials: true,
    })
      .then((res) => {
        swal("Updated!", "You have successfully updated password!", "success")
        const action = updateUserPassword(
          currentPassword,
          newPassword,
          confirmedPassword,
          userEmail
        )
        dispatch(action)
      })
      .catch((err) => {
        swal("Oops!", "Current password is not correct", "error")
      })
  }
}
