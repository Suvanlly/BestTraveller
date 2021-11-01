import styled from "styled-components"
import device from "../../../../responsive/Device"
import { Column } from "./utils"

export const Promp = styled(Column)`
  text-align: center;
`

export const TopButton = styled.div`
  font-family: Poppins;
  width: 240px;
  padding: 15px 0;
  margin: 30px auto 15px;
  border-bottom: 2px solid #3ab2b3;
  font-weight: 600;
  font-size: 20px;
  color: #3ab2b3;
  background-color: transparent;
`

export const Underline = styled.span`
  text-decoration: underline;
  text-decoration-color: #3ab2b3;
`

export const Sub = styled.h2`
  font-family: Poppins;
  color: gray;
  font-weight: 400;
  margin: 10px 0 40px;
  font-size: 24px;
  @media ${device.mobileS} {
    font-size: 17px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
`

export const Title = styled.h1`
  font-family: Poppins;
  font-size: 36px;
  font-weight: bold;
  margin: 20px 0;
  @media ${device.mobileS} {
    font-size: 30px;
  }
  @media ${device.mobileM} {
    font-size: 36px;
  }
`
