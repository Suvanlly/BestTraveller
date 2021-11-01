import styled from "styled-components"
import device from "../../../../responsive/Device"

export const SaleTitle = styled.h4`
  padding: 0 20px;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #767474;
  margin-bottom: 15px;
`
export const PackageTitle = styled.h3`
  padding: 0 20px;
  height: 45px;
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media ${device.mobileS} {
    font-size: 21px;
  }
  @media ${device.mobileM} {
    font-size: 22px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
`
export const Underline = styled.span`
  text-decoration: underline #3ab2b3;
`
export const Location = styled.div`
  padding-left: 20px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #767474;
`
export const Price = styled.div`
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  margin-left: 10px;
  padding: 15px 0 20px 0;
`
export const OldPrice = styled.span`
  color: #9c9c9c;
  font-weight: 500;
  margin-right: 16px;
  text-decoration: line-through;
  margin-left: 15px;
  padding: 15px 0 20px;
  @media ${device.mobileS} {
    font-size: 21px;
  }
  @media ${device.mobileM} {
    font-size: 22px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
`
export const NewPrice = styled.span`
  color: black;
  font-weight: 600;
  @media ${device.mobileS} {
    font-size: 21px;
  }
  @media ${device.mobileM} {
    font-size: 22px;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
`
export const Text = styled.p`
  padding: 0 20px;
  text-align: left;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: normal;
  color: #767474;
  @media ${device.mobileS} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
`
export const Button = styled.button`
  font-family: Poppins;
  width: 240px;
  padding: 15px 0;
  margin: 20px auto 15px;
  border-bottom: 2px solid #3ab2b3;
  font-weight: 600;
  font-size: 25px;
  color: #3ab2b3;
  background-color: transparent;
  transition-property: transform;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
  @media ${device.mobileS} {
    margin: 30px 0px 15px;
    width: 225px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media (min-width: 1260px) {
    float: left;
    margin-left: 20px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 25px;
    margin-top: 15px;
  }
`
export const Image = styled.img`
  object-fit: contain;
  float: right;
  margin-bottom: 20px;
  border-radius: 5px;
  @media ${device.mobileS} {
    width: 100%;
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
  }
  @media ${device.mobileM} {
    margin-bottom: 20px;
  }
  @media ${device.tablet} {
    height: 400px;
    margin-bottom: 20px;
  }
  @media (min-width: 1260px) {
    object-fit: fill;
    width: 45%;
    height: 350px;
    margin-right: 60px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
`
