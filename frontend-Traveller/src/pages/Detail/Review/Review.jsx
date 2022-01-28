import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  ReviewWrapper,
  Avatar,
  NameWrap,
  Name,
  Date,
  Content,
  Title,
  Comment,
} from "./styles/style"
import configuration from "../../../config/config"

const Review = ({ reviews }) => (
  <>
    <Title>Review</Title>
    {Object.keys(reviews).length !== 0 ? (
      // eslint-disable-next-line react/prop-types
      reviews.map((data) => (
        <ReviewWrapper key={Math.random()}>
          <Avatar
            src={`${configuration.api.backend_api}/img/users/${data.userImage}`}
          />
          <NameWrap>
            <Name>{data.userFirstName}</Name>
            <Date>
              {data.createdAt.slice(0, 10).split("-").reverse().join(".")}
            </Date>
          </NameWrap>
          <Content>{data.comment}</Content>
        </ReviewWrapper>
      ))
    ) : (
      <Comment>
        Hurry up, to be the first one to write a comment for this tour!✍️
      </Comment>
    )}
  </>
)

Review.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

export default connect(mapStateToProps, null)(Review)
