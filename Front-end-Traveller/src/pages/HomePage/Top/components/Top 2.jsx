import React from "react"
import { Link } from "react-router-dom"
import StateTab from "./StateTab"
import { Promp, TopButton, Underline, Sub, Title } from "../styles/Top"
import "../styles/top.css"

const Top = () => (
  <Promp>
    <Title>
      TOP <Underline>PROMOTIONS</Underline>
    </Title>
    <Sub>Best Travel Packages Available</Sub>
    <StateTab />
    <Link to="/packages">
      <TopButton>All Packages</TopButton>
    </Link>
  </Promp>
)

export default Top
