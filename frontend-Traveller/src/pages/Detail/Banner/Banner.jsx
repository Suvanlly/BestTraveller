import React, { Component } from "react"
import PropTypes from "prop-types"
import MaterialIcon from "material-icons-react"
import {
  Title,
  Location,
  Image,
  Specification,
  Item,
  ItemTitle,
  ItemSubTitle,
} from "./styles/banner"
import { ReactComponent as LocationSVG } from "./img/location.svg"
import "./styles/banner.css"
import configuration from "../../../config/config"

class Banner extends Component {
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    const { title, state, image, price, startDate, endDate } = this.props
    let { city } = this.props
    const startDateConvert = startDate.split("/").join(".")
    const endDateConvert = endDate.split("/").join(".")
    city = this.capitalize(city)
    return (
      <>
        <Title>{title}</Title>
        <Location>
          <LocationSVG
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          {city}, {state}
        </Location>
        <Image
          src={`${configuration.api.backend_api}/img/detail/${image}.jpg`}
          alt="tourImage"
        />
        <Specification>
          <Item>
            <MaterialIcon icon="local_offer" />
            <ItemTitle>Price</ItemTitle>
            <ItemSubTitle>${price}</ItemSubTitle>
          </Item>
          <Item>
            <MaterialIcon icon="today" />
            <ItemTitle>Start Date</ItemTitle>
            <ItemSubTitle>{startDateConvert}</ItemSubTitle>
          </Item>
          <Item>
            <MaterialIcon icon="today" />
            <ItemTitle>End Date</ItemTitle>
            <ItemSubTitle>{endDateConvert}</ItemSubTitle>
          </Item>
        </Specification>
      </>
    )
  }
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
}

export default Banner
