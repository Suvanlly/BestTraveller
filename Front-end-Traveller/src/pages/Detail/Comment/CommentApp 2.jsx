import React from "react"
import PropTypes from "prop-types"
import CommentInput from "./CommentInput"

const CommentApp = ({ slug, tour }) => <CommentInput slug={slug} tour={tour} />

CommentApp.propTypes = {
  slug: PropTypes.string.isRequired,
  tour: PropTypes.shape({}).isRequired,
}

export default CommentApp
