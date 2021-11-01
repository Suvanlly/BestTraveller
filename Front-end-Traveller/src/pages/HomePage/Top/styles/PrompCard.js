import styled from "styled-components"
import device from "../../../../responsive/Device"
import { Column } from "./utils"

export const Img = styled.img`
  height: 100%;
  border-radius: 5px;
`

export const PropCard = styled(Column)`
  perspective: 150rem;
  position: relative;
  width: 350px;
  height: 530px;
  margin: 20px;
  border: 1px solid #ccc;
  transition-property: transform;
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 10%);
  border-radius: 10px;
  &:hover {
    transform: translateY(-10px);
  }
  @media ${device.mobileS} {
    width: 280px;
    border: none;
  }
  @media ${device.mobileM} {
    width: 300px;
  }
  @media ${device.mobileL} {
    width: 350px;
  }
`
export const PrompInfo = styled(Column)`
  justify-content: flex-start;
  padding: 0 20px 10px;
`

export const Location = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  top: 480px;
  left: 120px;
  color: White;
`

export const PropText = styled.p`
  line-height: 20px;
  text-align: start;
  margin: 10px 0;
`

export const Line = styled.div`
  width: 40px;
  position: absolute;
  top: 450px;
  left: 15px;
  background-color: #fff;
  height: 2px;
  display: none;
`

export const CardTitle = styled.h3`
  font-family: Poppins;
  font-size: 30px;
  font-weight: 800;
  position: absolute;
  top: 405px;
  left: 15px;
  color: White;
`

export const CardPrice = styled.span`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  top: 480px;
  left: 250px;
  color: White;
`

export const Days = styled.span`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  top: 480px;
  left: 15px;
  color: White;
`
