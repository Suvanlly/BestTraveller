import React from "react"
import StoneWhaleBeach from "./components/StoneWhaleBeach"
import {
  Wrap,
  Mask,
  Container,
  Left,
  Right,
  Text,
  Paragrah,
  NumberText,
  Number,
  Title,
} from "./styles/noDistance"

const NoDistance = () => (
  <>
    <Wrap>
      <Mask>
        <Container>
          <Left />
          <Right>
            <Text>No Distance is Too Far</Text>
            <Paragrah>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum.
            </Paragrah>
          </Right>
        </Container>
        <NumberText>
          <div>
            <Number>102</Number>
            <Title>Destinations</Title>
          </div>
          <div>
            <Number>500</Number>
            <Title>Packages</Title>
          </div>
          <div>
            <Number>75</Number>
            <Title>Staff members</Title>
          </div>
          <div>
            <Number>20</Number>
            <Title>Years of Experiences</Title>
          </div>
        </NumberText>
      </Mask>
    </Wrap>
    <StoneWhaleBeach />
  </>
)

export default NoDistance
