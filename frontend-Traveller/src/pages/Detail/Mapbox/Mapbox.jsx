/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from "react"
import { MapboxTitle, MapboxWrapper, UnderLine } from "./styles/style"
import mapboxgl from "!mapbox-gl"
import "./styles/style.css"

mapboxgl.accessToken =
  "pk.eyJ1Ijoia3lyaWVlIiwiYSI6ImNrcWxyeWVzbDA2bXIybm9hOWZhenJzdngifQ.b64245OiRK11lY8o64cjYQ"

class Mapbox extends Component {
  constructor(props) {
    super(props)
    this.mapContainer = React.createRef()
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/kyriee/ckr5wt01q06rx19pd9w0jk73p",
      center: [this.props.lng, this.props.lat],
      zoom: 10,
      scrollZoom: true,
      maxZoom: 10,
    })

    const bounds = new mapboxgl.LngLatBounds()

    this.props.map.forEach((loc) => {
      // Add marker
      // eslint-disable-next-line no-undef
      const el = document.createElement("div")
      el.className = "marker"

      new mapboxgl.Marker({
        element: el,
        anchor: "bottom",
      })
        .setLngLat(loc.coordinates)
        .addTo(map)

      // Add popup
      new mapboxgl.Popup({
        offset: 30,
        closeButton: false,
        closeOnClick: false,
      })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>${this.props.title}</p>`)
        .addTo(map)

      // Extend map bounds to include current location
      bounds.extend(loc.coordinates)
    })

    map.fitBounds(bounds)

    map.on("move", () => {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        lng: map.getCenter().lng.toFixed(4),
        // eslint-disable-next-line react/no-unused-state
        lat: map.getCenter().lat.toFixed(4),
      })
    })
  }

  render() {
    return (
      <>
        <MapboxTitle>Location</MapboxTitle>
        <MapboxWrapper ref={this.mapContainer} />
        <UnderLine />
      </>
    )
  }
}

export default Mapbox
