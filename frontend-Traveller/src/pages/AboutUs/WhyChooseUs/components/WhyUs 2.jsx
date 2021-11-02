import React from "react"
import { Row, Column, Title, Underline } from "../styles/utils"
import Card from "./Card"
import video from "../img/video.svg"
import price from "../img/price.svg"
import security from "../img/security.svg"

const reasons = [
  {
    id: 1,
    source: price,
    title: "Competitive Pricing",
    article:
      "Competitive pricing is the process of selecting strategic price points to best take advantage of a product or service based market relative to competition.",
  },
  {
    id: 2,
    source: video,
    title: "Award-Wining Service",
    article:
      "This core philosophy is why we treat each and every customer as if they were our only customer.  We encourage you to contact us via e-mail, live chat anytime if we can assist you in any way.",
  },
  {
    id: 3,
    source: security,
    title: "Security Booking",
    article:
      "Simple Booking is as safe as a strongbox. In order to make sure you never incur in a data leak we have implemented all the top worldwide security certifications. So your guests can book fast and safely",
  },
]

const WhyUs = () => (
  <Column>
    <Title>
      Why Choose <Underline>Us</Underline>?
    </Title>
    <Row>
      {reasons.map((data) => (
        <Card
          key={data.id}
          source={data.source}
          title={data.title}
          article={data.article}
        />
      ))}
    </Row>
  </Column>
)

export default WhyUs
