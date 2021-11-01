import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import * as actionCreators from "../store/actionCreators"
import {
  CommentWrap,
  CommentField,
  FieldName,
  FieldInput,
  InputArea,
  Button,
} from "./styles/styles"

class CommentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "",
    }

    this.handleContentChange = this.handleContentChange.bind(this)
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
    })
  }

  render() {
    const { content } = this.state
    const { userEmail, userImage, userFirstName, tour, slug, sendComment } =
      this.props
    return (
      <CommentWrap>
        <CommentField>
          <FieldName>Leave your comment</FieldName>
          <FieldInput>
            <InputArea
              value={content}
              onChange={this.handleContentChange}
              placeholder="Your comment is valuable for us to improve our service!"
            />
          </FieldInput>
        </CommentField>
        <Button
          onClick={() =>
            sendComment(
              userEmail,
              userImage,
              userFirstName,
              content,
              tour,
              slug
            )
          }
        >
          Post
        </Button>
      </CommentWrap>
    )
  }
}

CommentInput.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userFirstName: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  tour: PropTypes.shape({}).isRequired,
  slug: PropTypes.string.isRequired,
  sendComment: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
  userEmail: state.header.userEmail,
  userFirstName: state.header.userFirstName,
  userImage: state.header.userImage,
})

const mapDispatchToProps = (dispatch) => ({
  sendComment(userEmail, userImage, userFirstName, content, tour, slug) {
    dispatch(
      actionCreators.sendComment(
        userEmail,
        userImage,
        userFirstName,
        content,
        tour,
        slug
      )
    )
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput)
