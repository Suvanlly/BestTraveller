import React, { useState } from "react"
import PropTypes from "prop-types"
import { Tab, Tabs } from "react-bootstrap"
import { Title, CardWrapper, CardText, CardImage } from "./styles/style"
import "./styles/style.css"
import configuration from "../../../config/config"

function Itinerary({ itinerary }) {
  const [key, setKey] = useState("day1")
  return (
    <>
      <Title>Itinerary</Title>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        {itinerary.map((data, i) => (
          <Tab
            key={Math.random()}
            eventKey={`day${i + 1}`}
            title={`Day ${i + 1}`}
          >
            <CardWrapper>
              <CardImage
                src={`${configuration.api.backend_api}/img/tours/itinerary/${data.image}`}
              />
              <CardText>{data.route}</CardText>
            </CardWrapper>
          </Tab>
        ))}
      </Tabs>
    </>
  )
}

Itinerary.propTypes = {
  itinerary: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Itinerary
