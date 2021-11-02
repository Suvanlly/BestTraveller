import React from "react"
import {
  Container,
  Text,
  Paragraph,
  Photo,
  Subtitle,
  Title,
  Underline,
} from "./styles/bestChoice"
import choice from "./img/choice.png"

const BestChoice = () => (
  <Container>
    <Text>
      <Title>
        Best Choice for <Underline>Travellers</Underline>
      </Title>
      <Subtitle>
        BestTraveller will hold your hand every step along the way from booking
        your ideal vacation, to connect you with your dedicated qualified
        nursing care in the city of choice.
      </Subtitle>
      <Paragraph>
        let us do the organizing and be prepared to make your vacation even more
        enjoyable and stress-free. Our priority is to take the stress away from
        what should be one of the more pleasurable experiences in life.We will
        help you have a home away from home, to relax and indulge in everything
        you can whilst on your break.
      </Paragraph>
    </Text>
    <Photo src={choice} />
  </Container>
)

export default BestChoice
