import styled from "styled-components"

export const Comment = styled.p`
  margin-left: 130px;
  font-size: 20px;
  font-family: Poppins;
`

export const Title = styled.p`
  margin-top: 30px;
  margin-bottom: 25px;
  margin-left: 130px;
  font-size: 36px;
  font-weight: bold;
  font-family: Poppins;
  @media screen and (max-width: 1440px) {
    font-size: 28px;
    margin-left: 70px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: 40px;
  }
  @media screen and (max-width: 525px) {
    margin-left: 35px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 25px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 20px;
  }
`

export const NameWrap = styled.div`
  position: absolute;
  display: inline-block;
  top: 15px;
  left: 100px;
  @media screen and (max-width: 525px) {
    left: 80px;
  }
`

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
`

export const Name = styled.span`
  font-family: Poppins;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-right: 20px;
  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }
  @media screen and (max-width: 525px) {
    font-size: 16px;
    padding-right: 0;
  }
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`

export const Date = styled.span`
  font-family: Poppins;
  font-size: 26px;
  color: #5e6d77;
  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }
  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
  @media screen and (max-width: 525px) {
    font-size: 16px;
    display: block;
    padding-top: 10px;
  }
`
export const ReviewWrapper = styled.div`
  position: relative;
  margin-top: 35px;
  margin-left: 130px;
  width: 90%;
  border-bottom: 1px solid #d7dce3;
  @media screen and (max-width: 1440px) {
    margin-left: 70px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 40px;
  }
  @media screen and (max-width: 525px) {
    margin-left: 35px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 25px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 20px;
  }
`
export const Content = styled.p`
  font-size: 26px;
  margin: 20px 0;
  font-family: Poppins;
  line-height: normal;
  color: #5e6d77;
  @media screen and (max-width: 1440px) {
    font-size: 18px;
  }
`
