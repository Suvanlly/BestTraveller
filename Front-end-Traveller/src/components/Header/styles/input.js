import styled from "styled-components"
import device from "../../../responsive/Device"

export const Wrap = styled.form`
  color: #767474;
  margin-top: 30px;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  padding-left: 10px;
  opacity: 0.75;
  align-items: center;
  @media ${device.mobileS} {
    margin-top: 5px;
    height: 40px;
  }
  @media ${device.mobileL} {
    margin-top: 20px;
  }
  @media ${device.tablet} {
    margin-top: 30px;
    height: 60px;
  }
`

export const InputStyle = styled.input`
  width: 80%;
  height: 60%;
  margin: 1px 0 0 5px;
  border: none;
  outline: none;
  &::placeholder {
    font-size: 18px;
    color: #767474;
  }
  @media ${device.mobileS} {
    &::placeholder {
      font-size: 12px;
    }
  }
  @media ${device.tablet} {
    &::placeholder {
      font-size: 18px;
    }
  }
`

export const Button = styled.button`
  width: 140px;
  height: 60px;
  color: white;
  border: none;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  background-color: black;
  opacity: 0.8;
  :hover {
    opacity: 0.8;
  }
  @media ${device.mobileS} {
    height: 40px;
    width: 100px;
  }
  @media ${device.tablet} {
    height: 60px;
    width: 140px;
  }
  @media ${device.laptop} {
    height: 60px;
    width: 140px;
  }
  @media ${device.laptopL} {
    height: 60px;
    width: 240px;
  }
  @media ${device.desktop} {
    height: 60px;
    width: 300px;
  }
`
