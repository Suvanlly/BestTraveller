import React from "react"
import PropTypes from "prop-types"
import { Image, Card, Text, LightText, Title } from "../styles/articlesCard"

const ArticlesCard = ({ source, date, title, article }) => (
  <Card>
    <Image src={source} alt="article image" />
    <Text>
      <LightText>{date}</LightText>
      <Title>{title}</Title>
      <LightText>{article}</LightText>
    </Text>
  </Card>
)

ArticlesCard.propTypes = {
  source: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
}

export default ArticlesCard
