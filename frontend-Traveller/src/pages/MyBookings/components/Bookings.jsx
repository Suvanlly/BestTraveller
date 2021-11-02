import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getBookings } from "../../../api/api"
import accountIcon from "../../UserPage/Profile/img/account.png"
import bookingIcon from "../../UserPage/Profile/img/booking.png"
import paymentIcon from "../../UserPage/Profile/img/payment.png"
import reviewIcon from "../../UserPage/Profile/img/review.png"
import PromCard from "../../HomePage/Top/components/PromCard"
import {
  Background,
  ProfileWrap,
  Menu,
  ListWrap,
  List,
  Icon,
  Link,
  PersonalInfo,
} from "./styles/myBookings"
import { Loading } from "../../../components/Loading/Loading"

class Bookings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myTours: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    const { userEmail } = this.props
    getBookings(userEmail).then((response) => {
      this.setState({
        myTours: response.data.data.tours,
        isLoading: false,
      })
    })
  }

  render() {
    const { myTours, isLoading } = this.state
    if (isLoading) return <Loading>Loading...👩🏻‍💻</Loading>
    return (
      <Background>
        <ProfileWrap>
          <Menu>
            <ListWrap>
              <List>
                <Icon src={accountIcon} alt="account" />
                <Link href="/user">Profile</Link>
              </List>
              <List>
                <Icon src={bookingIcon} alt="booking" />
                <Link href="/user/bookings" style={{ color: "#3ab2b3" }}>
                  Bookings
                </Link>
              </List>
              <List>
                <Icon src={paymentIcon} alt="payment" />
                <Link href="https://dashboard.stripe.com/test/payments">
                  Payment
                </Link>
              </List>
              <List>
                <Icon src={reviewIcon} alt="review" />
                <Link href="/user/reviews">Reviews</Link>
              </List>
            </ListWrap>
          </Menu>
          <PersonalInfo>
            {myTours.map((tour, i) => (
              <PromCard
                id={i}
                key={Math.random()}
                source={tour.image}
                title={tour.title}
                price={tour.price}
                city={tour.city}
                slug={tour.slug}
                days={tour.itinerary.length}
              />
            ))}
          </PersonalInfo>
        </ProfileWrap>
      </Background>
    )
  }
}

Bookings.propTypes = {
  userEmail: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  userEmail: state.header.userEmail,
})

export default connect(mapStateToProps, null)(Bookings)
