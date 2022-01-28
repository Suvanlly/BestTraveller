import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "../../../../style"
import loading from "./img/loading.gif"
import {
  Img,
  PropCard,
  Location,
  Days,
  Line,
  CardTitle,
  CardPrice,
} from "../styles/PrompCard"
import configuration from "../../../../config/config"

class PromCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
    this.handleLoading = this.handleLoading.bind(this)
  }

  handleLoading() {
    this.setState({
      loaded: true,
    })
  }

  render() {
    const { loaded } = this.state
    const { source, title, slug, days, price, city } = this.props
    return (
      <>
        {loaded ? (
          <Link to={`/tours/${slug}`}>
            <PropCard>
              <Img
                src={`${configuration.api.backend_api}/img/tours/${source}.jpg`}
                alt="promotion image"
                onLoad={this.handleLoading}
              />
              <CardTitle>{title}</CardTitle>
              <Line />
              {days > 1 ? <Days>{days} Days</Days> : <Days>{days} Day</Days>}
              <CardPrice>AUD {price}</CardPrice>
              <Location>{city}</Location>
            </PropCard>
          </Link>
        ) : (
          <Link to={`/tours/${slug}`}>
            <PropCard>
              <Img
                style={{ height: "100px" }}
                src={loading}
                alt="promotion image"
                onLoad={this.handleLoading}
              />
            </PropCard>
          </Link>
        )}
      </>
    )
  }
}

PromCard.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
}

export default PromCard
