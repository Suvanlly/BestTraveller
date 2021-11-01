import styled from "styled-components"
import device from "../../../../responsive/Device"

export const Container = styled.section`
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;
  height: 370px;
  display: flex;
`
export const Title = styled.h1`
  margin: 280px 156px;
  font-family: Poppins, sans-serif;
  font-size: 36px;
  font-weight: bold;
  text-align: left;
  color: #ffffff;
  @media ${device.mobileS} {
    margin: 280px 30px;
    font-size: 30px;
  }
  @media ${device.mobileM} {
    margin: 280px 50px;
  }
  @media ${device.mobileL} {
    margin: 280px 100px;
    font-size: 36px;
  }
  @media ${device.tablet} {
    margin: 280px 156px;
  }
`
