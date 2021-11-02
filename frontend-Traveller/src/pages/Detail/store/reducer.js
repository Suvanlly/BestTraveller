import * as actionTypes from "./actionTypes"

const defaultState = {
  tour: {},
}

export default (state = defaultState, action) => {
  if (action.type === actionTypes.GET_TOUR_INFO) {
    return {
      tour: action.tour,
    }
  }
  return state
}
