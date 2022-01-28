import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react"
import "./styles/carousel_style.css"
import {
  SaleTitle,
  PackageTitle,
  Underline,
  Price,
  OldPrice,
  NewPrice,
  Button,
  Text,
  Image,
} from "./styles/carousel"
import configuration from "../../../config/config"

class ControlledCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      index: 0,
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(selectedIndex) {
    // eslint-disable-next-line
    this.setState({ index: selectedIndex })
  }

  render() {
    return (
      <Carousel activeIndex={this.index} onSelect={this.handleSelect}>
        <Carousel.Item>
          <Carousel.Caption className="leftText">
            <SaleTitle>ON SALE</SaleTitle>
            <PackageTitle>
              BYRON BAY <Underline>EXPERIENCES</Underline>
            </PackageTitle>
            <Price>
              <OldPrice>$1299</OldPrice>
              <NewPrice>$599 per person</NewPrice>
            </Price>
            <Text>
              Byron Bay is a coastal town located on the far-north coast of NSW,
              Australia. Home to the most easterly point and the iconic Cape
              Byron lighthouse, the region is known for its spectacular beaches,
              unique shopping and dining experiences, world-class festivals.
            </Text>
            <Button>Book now</Button>
          </Carousel.Caption>
          <Image
            className="d-block"
            src={`${configuration.api.backend_api}/img/carousel/carousel-1.jpg`}
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="leftText">
            <SaleTitle>ON SALE</SaleTitle>
            <PackageTitle>
              Ocean Road <Underline>EXPERIENCES</Underline>
            </PackageTitle>
            <Price>
              <OldPrice>$587</OldPrice>
              <NewPrice>$329 per person</NewPrice>
            </Price>
            <Text>
              Our Great Ocean Road day trips from Melbourne depart the city in
              the morning, joining the road at its starting point in Torquay.
              The tours then follow the road as it snakes along the coast.
            </Text>
            <Button>Book now</Button>
          </Carousel.Caption>
          <Image
            className="d-block"
            src={`${configuration.api.backend_api}/img/carousel/carousel-2.jpg`}
            alt="slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="leftText">
            <SaleTitle>ON SALE</SaleTitle>
            <PackageTitle>
              Tasmania Tour <Underline>EXPERIENCES</Underline>
            </PackageTitle>
            <Price>
              <OldPrice>$700</OldPrice>
              <NewPrice>$500 per person</NewPrice>
            </Price>
            <Text>
              Discover the breath-taking beauty of wild west coast on this
              three-day adventure. We’ve packed the itinerary full of incredible
              sights and natural wonders, so you can explore the likes of Cradle
              Mountain, Montezuma Falls.
            </Text>
            <Button>Book now</Button>
          </Carousel.Caption>
          <Image
            className="d-block"
            src={`${configuration.api.backend_api}/img/carousel/carousel-3.jpg`}
            alt="slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default ControlledCarousel
