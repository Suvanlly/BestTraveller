import styled from "styled-components"
import { Column, Row } from "./utils"

export const Image = styled.img`
  width: 260px;
  height: 270px;
  border-radius: 5px;
  @media screen and (max-width: 1440px) {
    margin-right: 10px;
    width: 40%;
  }
  @media screen and (max-width: 1024px) {
    margin-right: 10px;
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    margin-left: 10px;
    width: 40%;
  }
  @media screen and (max-width: 525px) {
    margin-left: 10px;
    width: 130px;
    height: 135px;
  }
  @media screen and (max-width: 375px) {
    width: 40%;
    margin-left: 0;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`
export const Card = styled(Row)`
  width: 515px;
  height: 270px;
  margin: 10px auto 40px;
  justify-content: space-evenly;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
  &:last-child {
    margin-bottom: 125px;
    margin-left: 0px;
  }
  @media screen and (max-width: 2560px) {
    width: 50%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 10px auto 40px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
  @media screen and (max-width: 525px) {
    width: 100%;
    margin-left: 0;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-left: 0;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 0;
  }
`

export const Cards = styled(Row)`
  flex-wrap: wrap;
  width: 80%;
`

export const Articles = styled(Column)`
  align-content: center;
  justify-content: center;
`

export const Text = styled(Column)`
  align-items: flex-start;
  margin: 0 20px;
  @media screen and (max-width: 1024px) {
    margin: 0 0 0 30px;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    margin: 0 0 0 30px;
    width: 50%;
  }
  @media screen and (max-width: 525px) {
    margin-left: 10px;
    width: 60%;
  }
  @media screen and (max-width: 375px) {
    margin-left: 10px;
    width: 60%;
  }
  @media screen and (max-width: 320px) {
    margin: 0;
    width: 100%;
  }
`

export const LightText = styled.p`
  font-size: 17px;
  margin-top: 40px;
  margin-bottom: 10px;
  color: #767474;
  font-family: Poppins;
  line-height: normal;
`

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`
