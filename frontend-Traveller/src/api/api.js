import swal from "sweetalert"
import axios from "axios"
import { loadStripe } from "@stripe/stripe-js"
import configuration from "../config/config"

const stripePromise = loadStripe(
  "pk_test_51JH5JMKu7kyZrQEG6Lo8u0p4bMPRIYLR2nwyj3JmeUFMKUjZU0Hax085w4Z4VfX0uFfKI4UQthFV2NPDr842JTrL00XBO0dRBQ"
)

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const register = (inputData) =>
  axios({
    method: "POST",
    url: `${configuration.api.backend_api}/api/v1/users`,
    data: {
      firstName: inputData.firstName.value,
      lastName: inputData.lastName.value,
      email: inputData.email.value,
      password: inputData.password.value,
      role: "user",
      dateOfBirth: "29/09/1999",
    },
  })

export const subscribe = (e, email) => {
  e.preventDefault()
  if (!validateEmail(email)) {
    swal("Oops", "Please enter valid email address", "error")
    return
  }
  axios({
    method: "POST",
    url: `${configuration.api.backend_api}/api/v1/auth/subscribe`,
    data: {
      email,
    },
    withCredentials: true,
  })
    .then((res) => {
      swal("Thanks!", "You have subscribed our newsletter!", "success")
    })
    .catch((err) => {
      swal("Oops!", "Please type correct email address!", "error")
    })
}

export const getTours = () =>
  axios.get(`${configuration.api.backend_api}/api/v1/tours`)

export const getTour = (slug) =>
  axios.get(`${configuration.api.backend_api}/api/v1/tours/${slug}`)

export const getSearchedTours = (city, state, dateConvert, price) =>
  axios.get(
    `${configuration.api.backend_api}/api/v1/tours?$city=${city}&state=${state}&startDate=${dateConvert}&price=${price}`
  )

export const bookTour = async (userId, tourId) => {
  // get checkout session from API
  const session = await axios({
    method: "GET",
    url: `${configuration.api.backend_api}/api/v1/bookings/checkout-session/${userId}/${tourId}`,
    withCredentials: true,
  })
  // create checkout from charge credit card
  const stripe = await stripePromise
  setTimeout(async () => {
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    })
  }, 1000)
}

export const sendEmail = (email) => {
  axios({
    method: "POST",
    url: `${configuration.api.backend_api}/api/v1/auth/forgotPassword`,
    data: {
      email: email,
    },
    withCredentials: true,
  }).catch((err) => {
    swal("Invalid Email", "Please enter a valid email address", "error")
  })
}

export const resetPassword = (token, password) => {
  axios({
    method: "PATCH",
    url: `${configuration.api.backend_api}/api/v1/auth/resetPassword/${token}`,
    data: {
      password: password,
    },
    withCredentials: true,
  })
    .then((res) => {
      swal("Updated", "Successfully reset your password", "success")
    })
    .catch((res) => {
      swal("Oops", "You entered invalid token", "error")
    })
}

export const getBookings = (userEmail) =>
  axios.get(
    `${configuration.api.backend_api}/api/v1/bookings/getMyBookings/${userEmail}`
  )

export const getReviews = (userEmail) =>
  axios.get(
    `${configuration.api.backend_api}/api/v1/reviews/getMyReviews/${userEmail}`
  )
