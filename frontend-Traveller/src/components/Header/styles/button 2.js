import styled from "styled-components"
import device from "../../../responsive/Device"

export const Wrap = styled.div`
  margin-right: 20px;
  @media ${device.mobileS} {
    margin-right: 10px;
  }
  @media ${device.mobileM} {
    margin-right: 20px;
  }
`
export const Icon = styled.a`
  @media ${device.mobileS} {
    display: block;
    font-size: 18px;
    color: #ffffff;
    &:hover {
      color: #ffffff;
    }
  }
  @media ${device.mobileL} {
    display: none;
  }
`
export const StyledButton = styled.button`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  margin-right: 40px;
  color: white;
  background-color: #7d589f;
  background-color: black;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  &:hover {
    color: #ccc;
  }
  @media ${device.mobileS} {
    display: none;
    width: 50px;
    height: 30px;
    font-size: 9px;
    margin-right: 0;
    margin-bottom: 0;
  }
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.mobileL} {
    display: inline-block;
    width: 65px;
    height: 35px;
    font-size: 12px;
  }
  @media ${device.tablet} {
    width: 80px;
    height: 40px;
    margin-right: 10px;
    font-size: 16px;
  }
  @media ${device.laptop} {
    margin-right: 20px;
    font-size: 18px;
  }
  @media ${device.laptopL} {
    width: 100px;
    margin-right: 40px;
  }
`
