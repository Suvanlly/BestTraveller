import React from "react"
import PropTypes from "prop-types"
import { Image, Title, Article, Body } from "../styles/card"

const Card = ({ source, title, article }) => (
  <Body>
    <Image src={source} alt="icon" />
    <Title>{title}</Title>
    <Article>{article}</Article>
  </Body>
)

Card.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
}

export default Card
