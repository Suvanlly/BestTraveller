import React from "react"
import PropTypes from "prop-types"
import {
  HighLightWrapper,
  HighLightParagraph,
  HighLightTitle,
} from "./styles/style"

const HighLight = ({ highlight }) => (
  <HighLightWrapper>
    <HighLightTitle>Highlights</HighLightTitle>
    <HighLightParagraph>{highlight}</HighLightParagraph>
  </HighLightWrapper>
)

HighLight.propTypes = {
  highlight: PropTypes.string.isRequired,
}

export default HighLight
