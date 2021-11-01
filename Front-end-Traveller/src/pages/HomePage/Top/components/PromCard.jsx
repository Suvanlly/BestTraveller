import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "../../../../style"
import {
  Img,
  PropCard,
  Location,
  Days,
  Line,
  CardTitle,
  CardPrice,
} from "../styles/PrompCard"

const PromCard = ({ source, title, price, city, slug, days, noLink }) => (
  <>
    {noLink ? (
      <Link to="/">
        <PropCard>
          <Img src={`/img/tours/${source}.jpg`} alt="promotion image" />
        </PropCard>
      </Link>
    ) : (
      <Link to={`/tours/${slug}`}>
        <PropCard>
          <Img src={`/img/tours/${source}.jpg`} alt="promotion image" />
          <CardTitle>{title}</CardTitle>
          <Line />
          {days > 1 ? <Days>{days} Days</Days> : <Days>{days} Day</Days>}
          <CardPrice>AUD {price}</CardPrice>
          <Location>{city}</Location>
        </PropCard>
      </Link>
    )}
  </>
)

PromCard.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  days: PropTypes.number.isRequired,
  noLink: PropTypes.bool,
}

PromCard.defaultProps = {
  noLink: false,
}

export default PromCard
