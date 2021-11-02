import styled from "styled-components"
import backgroundPic from "../img/bg.png"
import beachPic from "../img/image-1.jpg"
import stonePic from "../img/image-2.jpg"
import whale from "../img/image-3.jpg"

export const Wrap = styled.div`
  width: 100%;
  height: 774px;
  background: url(${backgroundPic});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

export const Mask = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 515px;
`
export const Left = styled.div`
  width: 50%;
  height: 100%;
  background: url(${backgroundPic});
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 525px) {
    display: none;
  }
  @media screen and (max-width: 375px) {
    display: none;
  }
  @media screen and (max-width: 320px) {
    display: none;
  }
`

export const Right = styled.div`
  padding-top: 0px;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 60px 0px;
    padding: 20px;
  }
  @media screen and (max-width: 525px) {
    width: 100%;
    margin: 50px 0px;
    padding: 20px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    margin: 30px 0 0 0;
    padding: 10px 10px 0 10px;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    margin: 30px 0px;
    padding: 10px;
  }
`
export const Text = styled.h2`
  font-family: Poppins;
  font-weight: bold;
  font-size: 36px;
  font-weight: bold;
  text-align: left;
  color: #000000;
  padding-top: 144px;
  padding-left: 84px;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 80px;
    margin-left: 0;
    padding: 0;
  }
  @media screen and (max-width: 525px) {
    width: 90%;
    margin-top: 80px;
    margin-left: 0;
    padding: 0;
  }
  @media screen and (max-width: 375px) {
    width: 90%;
    margin-top: 80px;
    margin-left: 0;
    padding: 0;
  }
  @media screen and (max-width: 320px) {
    width: 90%;
    margin-top: 80px;
    margin-left: 0;
    padding: 0;
  }
`
export const Paragrah = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 20px;
`
export const NumberText = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0 188px;
  height: 300px;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    padding: 0;
    margin-left: 30px;
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    margin-left: 20px;
    width: 90%;
  }
  @media screen and (max-width: 525px) {
    padding: 0;
    width: 90%;
  }
  @media screen and (max-width: 375px) {
    padding: 0;
    width: 90%;
    margin-top: -80px;
  }
  @media screen and (max-width: 320px) {
    padding: 0;
    width: 90%;
    margin-left: -20px;
  }
`
export const Column = styled.div`
  @media screen and (max-width: 768px) {
    width: 40%;
  }
  @media screen and (max-width: 525px && min-width: 376px) {
    width: 40%;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`

export const Number = styled.p`
  margin-top: 79px;
  margin-bottom: 10px;
  color: #3ab2b3;
  line-height: 0.75;
  font-family: Poppins;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 36px;
    margin-top: 0px;
  }
  @media screen and (max-width: 525px) {
    font-size: 30px;
    margin-top: 0px;
  }
  @media screen and (max-width: 375px) {
    font-size: 24px;
    margin-top: 0px;
  }
  @media screen and (max-width: 320px) {
    font-size: 22px;
    margin-top: 40px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #000000;
  font-family: Poppins;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 525px) {
    font-size: 16px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    font-size: 14px;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
    width: 100%;
  }
`

export const StoneWrap = styled.div`
  width: 100%;
  height: 495px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    height: 1600px;
  }
  @media screen and (max-width: 525px) {
    height: 1200px;
  }
  @media screen and (max-width: 375px) {
    height: 750px;
  }
  @media screen and (max-width: 320px) {
    height: 650px;
  }
`
export const Stone = styled.div`
  background: url(${stonePic});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 33%;
  border: none;
  @media screen and (max-width: 768px) {
    width: 768px;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 525px) {
    width: 525px;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 375px) {
    width: 375px;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
    background-size: 100% 100%;
  }
`
export const Beach = styled.div`
  background: url(${beachPic});
  background-repeat: no-repeat;
  background-size: 101% 100%;
  width: 33%;
  border: none;
  @media screen and (max-width: 768px) {
    width: 768px;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 525px) {
    width: 525px;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 375px) {
    width: 375px;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
    background-size: 100% 100%;
  }
`
export const Whale = styled.div`
  background: url(${whale});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 34%;
  border: none;
  @media screen and (max-width: 768px) {
    width: 768px;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 525px) {
    width: 525px;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 375px) {
    width: 375px;
    background-size: 100% 100%;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
    background-size: 100% 100%;
  }
`
