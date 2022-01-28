import axios from "axios"
import swal from "sweetalert"
import configuration from "../../../config/config"
import * as actionTypes from "./actionTypes"

const getTourInfo = (tour) => ({
  type: actionTypes.GET_TOUR_INFO,
  tour,
})

export const getTour = (slug) => (dispatch) => {
  axios
    .get(`${configuration.api.backend_api}/api/v1/tours/${slug}`)
    .then((response) => {
      const tour = response.data
      const action = getTourInfo(tour)
      dispatch(action)
    })
}

export const sendComment =
  (userEmail, userImage, userFirstName, content, tour) => () => {
    if (content === "") {
      swal("Oops", "Comment cannot be empty", "error")
      return
    }
    axios({
      method: "POST",
      url: `${configuration.api.backend_api}/api/v1/reviews/`,
      data: {
        comment: content,
        user: userEmail,
        userImage: userImage,
        userFirstName: userFirstName,
        tour: tour._id,
        tourTitle: tour.title,
        tourImage: tour.image,
      },
      withCredentials: true,
    })
      .then((res) => {
        const reviewId = res.data._id
        axios({
          method: "POST",
          url: `${configuration.api.backend_api}/api/v1/tours/${tour._id}/reviews/${reviewId}`,
          withCredentials: true,
        }).then(() => {
          swal("Thanks!", "You have successfully commented!", "success")
        })
      })
      .catch((err) => {
        swal("Oops", "Something went wrong", "error")
      })
  }
