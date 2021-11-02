import styled from "styled-components"
import device from "../../../../responsive/Device"

export const Container = styled.section`
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;
  background-position: 100% 92%;
  height: 370px;
  display: flex;
  position: relative;
`
export const Title = styled.h1`
  font-family: Poppins, sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  @media ${device.mobileS} {
    font-size: 30px;
  }
  @media ${device.mobileM} {
  }
  @media ${device.mobileL} {
    font-size: 36px;
    position: absolute;
    top: 280px;
    left: 90px;
  }
  @media ${device.tablet} {
  }
`
