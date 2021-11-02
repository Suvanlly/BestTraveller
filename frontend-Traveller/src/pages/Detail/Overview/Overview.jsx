import React from "react"
import PropTypes from "prop-types"
import {
  OverviewWrapper,
  OverviewTitle,
  OverviewParagraph,
} from "./styles/style"

const Overview = ({ overview }) => (
  <OverviewWrapper>
    <OverviewTitle>Overview</OverviewTitle>
    <OverviewParagraph>{overview}</OverviewParagraph>
  </OverviewWrapper>
)

Overview.propTypes = {
  overview: PropTypes.string.isRequired,
}

export default Overview
