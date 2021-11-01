/* eslint-disable node/no-unpublished-import */
import styled from "styled-components"
import backgroundPic from "../img/background.png"
import device from "../../../responsive/Device"

export const Video = styled.video`
  position: absolute;
  top: 85px;
  left: 0;
  width: 100%;
  height: 700px;
  object-fit: fill;
  z-index: 9997;
  opacity: 0.8;
  @media ${device.mobileS} {
    top: 65px;
  }
  @media ${device.mobileM} {
    top: 85px;
  }
`
export const Wrap = styled.div`
  width: 0%;
  height: 800px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media ${device.mobileS} {
    width: 0%;
    background: url(${backgroundPic});
    background-repeat: no-repeat;
    background-position: 65% center;
  }
  @media ${device.mobileM} {
    width: 0%;
    background: url(${backgroundPic});
    background-repeat: no-repeat;
    background-position: 68% center;
  }
  @media ${device.mobileL} {
    width: 0%;
    background: url(${backgroundPic});
    background-repeat: no-repeat;
    background-position: 75% center;
  }
  @media ${device.tablet} {
    width: 0%;
    background: url(${backgroundPic});
    background-repeat: no-repeat;
    background-position: 70% center;
  }
  @media ${device.laptop} {
    width: 0%;
    background: url(${backgroundPic});
    background-repeat: no-repeat;
    background-position: 70% center;
  }
  @media ${device.laptopL} {
    width: 0%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`
export const TextContainer = styled.div`
  font-family: Poppins;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  z-index: 9998;

  @media ${device.mobileS} {
    width: 100%;
    padding: 80px 30px;
  }
  @media ${device.mobileM} {
    width: 100%;
    /* position: absolute;
    top: 50%;
    left: 50%; */
    text-align: center;
    /* transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%); */
    /* padding: 90px 30px; */
  }
  @media ${device.mobileL} {
    width: 100%;
    text-align: center;
  }
  @media ${device.tablet} {
    width: 100%;
    text-align: center;
  }
  @media ${device.laptop} {
    width: 100%;
    text-align: center;
  }
`
export const Text = styled.p`
  font-family: Poppins;
  margin-bottom: 45px;
  font-size: 60px;
  font-weight: bold;
  color: white;
  @media ${device.mobileS} {
    font-size: 30px;
  }
  @media ${device.mobileM} {
    font-size: 30px;
  }
  @media ${device.mobileL} {
    font-size: 36px;
    white-space: nowrap;
  }
  @media ${device.tablet} {
    font-size: 50px;
  }
  @media ${device.laptop} {
    font-size: 60px;
  }
`
export const SubText = styled(Text)`
  font-size: 28px;
  font-weight: 600;
  border-bottom: none;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
    white-space: nowrap;
  }
  @media ${device.tablet} {
    font-size: 24px;
  }
  @media ${device.laptop} {
    font-size: 28px;
  }
`
export const Line = styled.span`
  background-image: linear-gradient(
    109.6deg,
    rgba(61, 245, 167, 1) 11.2%,
    rgba(9, 111, 224, 1) 91.1%
  );
  -webkit-background-clip: text;
  color: transparent;
`
