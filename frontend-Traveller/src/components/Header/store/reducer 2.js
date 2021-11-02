import * as actionTypes from "./actionTypes"

const defaultState = {
  userEmail: "",
  userFirstName: "",
  userLastName: "",
  userPassword: "",
  userImage: "",
  isLoggedIn: false,
}

export default (state = defaultState, action) => {
  if (action.type === actionTypes.USER_LOGIN) {
    return {
      userEmail: action.userEmail,
      userFirstName: action.userFirstName,
      userLastName: action.userLastName,
      userPassword: action.userPassword,
      userImage: action.userImage,
      isLoggedIn: true,
    }
  }

  if (action.type === actionTypes.USER_LOGOUT) {
    return {
      userEmail: "",
      userFirstName: "",
      userLastName: "",
      userPassword: "",
      userImage: "",
      isLoggedIn: false,
    }
  }

  if (action.type === actionTypes.UPDATE_USER_INFO) {
    return {
      userFirstName: action.userFirstName,
      userLastName: action.userLastName,
      userEmail: action.userEmail,
      userImage: action.userImage,
      isLoggedIn: true,
    }
  }

  return state
}
