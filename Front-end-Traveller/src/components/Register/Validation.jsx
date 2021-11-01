const validation = (name, data) => {
  const value = data[name]
  switch (name) {
    case "firstName": {
      if (!value.value) {
        return "Please input your first name"
      }
      if (value.value.toString().length < 2) {
        return "First name should be at least 2 letters"
      }
      return ""
    }
    case "lastName": {
      if (!value.value) {
        return "Please input your lastname"
      }
      if (value.value.toString().length < 2) {
        return "Last name should be at least 2 letters"
      }
      return ""
    }
    case "email": {
      if (!value.value) {
        return "Please input your email"
      }
      const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
      if (!EMAIL_REGEXP.test(value.value)) {
        return "Please input a valid email"
      }
      return ""
    }
    case "password": {
      if (!value.value) {
        return "Please input your password"
      }
      if (value.value.toString().length < 6) {
        return "Password should not less than 6 characters"
      }
      return ""
    }
    case "confirmPassword": {
      if (!value.value) {
        return "Please input your confirm password"
      }
      if (value.value !== data.password.value) {
        return "Confirm password does not match to password"
      }
      return ""
    }
    default:
      return ""
  }
}
export default validation
