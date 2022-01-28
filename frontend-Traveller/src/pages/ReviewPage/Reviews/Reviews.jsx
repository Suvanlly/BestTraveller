import React, { Component } from "react"
import moment from "moment"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getReviews } from "../../../api/api"
import accountIcon from "../../UserPage/Profile/img/account.png"
import bookingIcon from "../../UserPage/Profile/img/booking.png"
import paymentIcon from "../../UserPage/Profile/img/payment.png"
import reviewIcon from "../../UserPage/Profile/img/review.png"
import { Loading } from "../../../components/Loading/Loading"

import {
  Background,
  ProfileWrap,
  Left,
  ListWrap,
  List,
  Icon,
  Link,
  Right,
  ReviewCard,
  Title,
  Date,
  Comment,
  Img,
} from "./styles/reviews"
import configuration from "../../../config/config"

class Reviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myReviews: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    const { userEmail } = this.props
    getReviews(userEmail).then((response) => {
      this.setState({
        myReviews: response.data.data.reviews,
        isLoading: false,
      })
    })
  }

  render() {
    const { myReviews, isLoading } = this.state
    if (isLoading) return <Loading>Loading...👩🏻‍💻</Loading>
    return (
      <>
        <Background>
          <ProfileWrap>
            <Left>
              <ListWrap>
                <List>
                  <Icon src={accountIcon} alt="account" />
                  <Link href="/user">Profile</Link>
                </List>
                <List>
                  <Icon src={bookingIcon} alt="booking" />
                  <Link href="/user/bookings">Bookings</Link>
                </List>
                <List>
                  <Icon src={paymentIcon} alt="payment" />
                  <Link href="https://dashboard.stripe.com/test/payments">
                    Payment
                  </Link>
                </List>
                <List>
                  <Icon src={reviewIcon} alt="review" />
                  <Link href="/user/reviews" style={{ color: "#3ab2b3" }}>
                    Reviews
                  </Link>
                </List>
              </ListWrap>
            </Left>
            <Right>
              {myReviews.map((review) => (
                <ReviewCard key={Math.random()}>
                  <Img
                    src={`${configuration.api.backend_api}/img/tours/${review.tourImage}.jpg`}
                    alt="promotion image"
                  />
                  <Title>{review.tourTitle}</Title>
                  <Date>{moment(review.createdAt).format("DD.MM.YYYY")}</Date>
                  <Comment>{`"${review.comment}"`}</Comment>
                </ReviewCard>
              ))}
            </Right>
          </ProfileWrap>
        </Background>
      </>
    )
  }
}

Reviews.propTypes = {
  userEmail: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  userEmail: state.header.userEmail,
})

export default connect(mapStateToProps, null)(Reviews)
