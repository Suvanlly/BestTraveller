/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getTour } from "../../api/api"
import * as actionCreators from "./store/actionCreators"
import NavbarLogout from "../../components/Header/NavbarLogout"
import Navbar from "../../components/Header/Navbar"
import Banner from "./Banner/Banner"
import Overview from "./Overview/Overview"
import Highlight from "./HighLight/Highlight"
import Itinerary from "./Itinerary/Itinerary"
import Mapbox from "./Mapbox/Mapbox"
import Review from "./Review/Review"
import BookNow from "./BookNow/BookNow"
import Comment from "./Comment/CommentApp"
import Footer from "../../components/Footer/Footer"
import { Loading } from "../../components/Loading/Loading"
import "./styles/style.css"

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tour: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    const { slug } = this.props.match.params
    getTour(slug).then((response) => {
      this.setState({
        tour: response.data,
        isLoading: false,
      })
    })
  }

  render() {
    const { tour, isLoading } = this.state
    const { isLoggedIn } = this.props
    // eslint-disable-next-line react/destructuring-assignment
    const { slug } = this.props.match.params
    if (isLoading) {
      return <Loading>Loading...👩🏻‍💻</Loading>
    }
    return (
      <>
        {isLoggedIn ? <NavbarLogout isShow /> : <Navbar />}
        <Banner
          title={tour.title}
          city={tour.city}
          state={tour.state}
          image={tour.image}
          price={tour.price}
          startDate={tour.startDate}
          endDate={tour.endDate}
        />
        <Overview overview={tour.introduction} />
        <Highlight highlight={tour.subtitle} />
        <Itinerary itinerary={tour.itinerary} />
        <Mapbox
          lng={tour.map.coordinates[0]}
          lat={tour.map.coordinates[1]}
          map={[tour.map]}
          title={tour.title}
        />
        <Review reviews={tour.reviews} />
        {isLoggedIn && <Comment slug={slug} tour={tour} />}
        <BookNow tour={tour} />
        <Footer />
      </>
    )
  }
}

Detail.propTypes = {
  slug: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
}

Detail.defaultProps = {
  slug: undefined,
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.header.isLoggedIn,
})

const mapDispatchToProps = (dispatch) => ({
  getTour(slug) {
    dispatch(actionCreators.getTour(slug))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
