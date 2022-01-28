import React, { Component } from "react"
import Select from "react-select"
import DatePicker from "react-datepicker"
import Slider from "@material-ui/core/Slider"
import { Loading } from "../../../components/Loading/Loading"
import { getSearchedTours, getTours } from "../../../api/api"
import PromCard from "../../HomePage/Top/components/PromCard"
import { Wrap } from "./styles/cardContainer"
import "react-datepicker/dist/react-datepicker.css"
import {
  SearchWrapper,
  DestinationWrapper,
  StateWrapper,
  DateWrapper,
  SliderWrapper,
  Title,
  Input,
  Icon,
} from "./styles/search"
import "./styles/search.css"
import SearchIcon from "./img/search.png"
import configuration from "../../../config/config"

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tours: [],
      city: "",
      state: "",
      startDate: new Date(),
      price: 0,
      isLoading: true,
    }
  }

  componentDidMount() {
    getTours().then((result) => {
      this.setState({
        tours: result.data,
        isLoading: false,
      })
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleStateChange(state) {
    const { value } = state
    this.setState({
      state: value,
    })
  }

  handleDateChange(date) {
    this.setState({
      startDate: date,
    })
  }

  handlePriceChange(e, price) {
    this.setState({
      price: price,
    })
  }

  getSearchedTour(city, state, startDate, price) {
    const dateConvert = startDate.toLocaleDateString()
    getSearchedTours(city, state, dateConvert, price).then((response) => {
      const searchedTour = response.data
      this.setState({
        tours: searchedTour,
      })
    })
  }

  valueLabelFormat(value) {
    return `$${value}`
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    const states = [
      { value: "VIC", label: "Victoria" },
      { value: "TAS", label: "Tasmania" },
      { value: "QLD", label: "Queensland" },
      { value: "WA", label: "West Australia" },
      { value: "SA", label: "South Australia" },
      { value: "NSW", label: "New South Wales" },
      { value: "NT", label: "Northern Territory" },
      { value: "ACT", label: "Australian Capital Territory" },
    ]
    const { isLoading, tours, city, state, startDate, price } = this.state
    if (isLoading) return <Loading>Loading...👩🏻‍💻</Loading>
    return (
      <Wrap>
        <SearchWrapper>
          <DestinationWrapper>
            <Title>Select your destination city</Title>
            <Input
              id="city"
              placeholder="Sydney"
              onChange={(e) => this.handleChange(e)}
            />
          </DestinationWrapper>
          <StateWrapper>
            <Title>Select your state</Title>
            <Select
              className="select"
              placeholder="Victoria"
              options={states}
              // eslint-disable-next-line no-shadow
              onChange={(state) => this.handleStateChange(state)}
            />
          </StateWrapper>
          <DateWrapper>
            <Title>Select start date</Title>
            <DatePicker
              selected={startDate}
              dateFormat="dd/MM/yyyy"
              onChange={(day) => this.handleDateChange(day)}
            />
          </DateWrapper>
          <SliderWrapper>
            <Title>Select price range</Title>
            <div className="slider">
              <Slider
                getAriaValueText={this.valueLabelFormat}
                valueLabelFormat={this.valueLabelFormat}
                // eslint-disable-next-line no-shadow
                onChange={(e, price) => this.handlePriceChange(e, price)}
                max={1000}
                min={0}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </div>
            <Icon
              src={SearchIcon}
              onClick={() =>
                this.getSearchedTour(city, state, startDate, price)
              }
            />
          </SliderWrapper>
        </SearchWrapper>
        {tours.length > 0 ? (
          tours.map((data, i) => (
            <PromCard
              id={i}
              key={data._id}
              source={data.image}
              title={data.title}
              price={data.price}
              city={this.capitalize(data.city)}
              days={data.itinerary.length}
              introduction={data.introduction}
              slug={data.slug}
            />
          ))
        ) : (
          <img
            src={`${configuration.api.backend_api}/img/tours/notFound.jpg`}
            alt="Not Found"
          />
        )}
      </Wrap>
    )
  }
}

export default CardContainer
