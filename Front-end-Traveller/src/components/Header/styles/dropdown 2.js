import styled, { css, keyframes } from "styled-components"
import device from "../../../responsive/Device"

const rotateMenu = keyframes`
  0% {
    transform: rotateX(-90deg)
  }
  70% {
    transform: rotateX(20deg)
  }
  100% {
    transform: rotateX(0deg)
  }
`
const rotateReverse = keyframes`
  from {
    height: 100%;
  }
  to {
    height: 0;
  }
`

export const DropdownBox = styled.div`
  width: 100%;
  position: absolute;
  top: 85px;
  right: 0;
  background-color: black;
  z-index: 9999;
  @media ${device.mobileS} {
    top: 40px;
    height: 100vh;
    animation: ${(props) =>
      props.off
        ? css`
            ${rotateReverse} .5s ease-in-out forwards
          `
        : css`
            ${rotateMenu} .5s ease-in-out forwards
          `};
    transform-origin: top center;
  }
  @media ${device.mobileL} {
    display: none;
  }
`

export const DropdownButton = styled.a`
  font-size: 14px;
  font-family: Poppins;
  display: block;
  margin-left: 20px;
  width: 87%;
  height: 45px;
  line-height: 45px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`
