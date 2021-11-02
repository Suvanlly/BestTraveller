const contactValidate = (name, data) => {
  const value = data[name]
  // console.log("Name", name, "Value", value)
  switch (name) {
    case "name": {
      if (!value.value) {
        return "Please tell us your name"
      }
      if (value.value.toString().length < 2) {
        return "Name should be at least 2 char"
      }
      return ""
    }
    case "email": {
      if (!value.value) {
        return "Please tell us your email"
      }
      const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
      if (!EMAIL_REGEXP.test(value.value)) {
        return "Please input a valid email"
      }
      return ""
    }
    case "phone": {
      if (!value.value) {
        return ""
      }
      const PHONE_REGEXP = /^([0-9]{8})/
      if (!PHONE_REGEXP.test(value.value)) {
        return "Please input a valid phone"
      }
      return ""
    }
    case "message": {
      if (!value.value) {
        return "Please leave your message"
      }
      return ""
    }
    default:
      return ""
  }
}
export default contactValidate
