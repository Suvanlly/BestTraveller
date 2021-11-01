import styled from "styled-components"
import { Column } from "./utils"

export const Image = styled.img`
  width: 88px;
  height: 88px;
`

export const Title = styled.h2`
  margin-top: 15px;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
`

export const Article = styled.p`
  height: 110px;
  width: 300px;
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  line-height: normal;
  font-family: "Poppins", sans-serif;
`

export const Body = styled(Column)`
  margin: 20px 80px;
  @media screen and (max-width: 1440px) {
    width: 30%;
    margin: 20px 20px;
  }
  @media screen and (max-width: 1024px) {
    width: 30%;
    margin: 20px 10px;
  }
  @media screen and (max-width: 960px) {
    margin-left: 0px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
  }
  @media screen and (max-width: 525px) {
    margin-left: 0px;
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    margin-left: 0px;
    width: 100%;
  }
`
