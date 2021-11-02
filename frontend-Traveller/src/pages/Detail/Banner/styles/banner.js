import styled from "styled-components"

export const Title = styled.p`
  margin: 55px 0 20px 130px;
  font-family: Poppins;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: normal;
  color: black;
  @media screen and (max-width: 1440px) {
    font-size: 36px;
    margin: 55px 0 20px 70px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 32px;
    margin: 55px 0 20px 100px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin: 30px 0 10px 70px;
  }
  @media screen and (max-width: 525px) {
    font-size: 30px;
    margin: 30px 0 10px 50px;
  }
  @media screen and (max-width: 375px) {
    font-size: 28px;
    margin: 30px 0 10px 35px;
  }
`

export const Location = styled.p`
  margin: 20px 0 30px 130px;
  font-family: Poppins;
  font-size: 20px;
  letter-spacing: normal;
  color: #5e6d77;
  @media screen and (max-width: 2560px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1440px) {
    margin: 30px 0 10px 70px;
  }
  @media screen and (max-width: 1024px) {
    margin: 30px 0 10px 100px;
  }
  @media screen and (max-width: 768px) {
    margin: 30px 0 10px 70px;
    font-size: 26px;
  }
  @media screen and (max-width: 525px) {
    margin: 30px 0 10px 50px;
    font-size: 20px;
  }
  @media screen and (max-width: 375px) {
    margin: 30px 0 10px 35px;
  }
`

export const Image = styled.img`
  height: 800px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 10px;
  box-shadow: 0.5rem 2rem 2rem 0.5rem rgb(0 0 0 / 15%);
  transition-property: transform;
  transition-duration: 0.4s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 30%);
  }
  @media screen and (max-width: 2560px) {
    margin: 50px 130px;
    width: 40%;
  }
  @media screen and (max-width: 1440px) {
    height: 680px;
    margin: 30px 70px;
  }
  @media screen and (max-width: 1024px) {
    height: 800px;
    display: block;
    margin: 30px auto;
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    height: 600px;
    width: 80%;
  }
  @media screen and (max-width: 525px) {
    height: 500px;
  }
  @media screen and (max-width: 375px) {
    height: 400px;
  }
  @media screen and (max-width: 320px) {
    height: 185px;
  }
`

export const Specification = styled.div`
  width: 90%;
  /* margin-left: 130px; */
  /* border-bottom: 1px solid #d7dce3; */
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1024px) {
    width: 95%;
    margin-left: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 525px) {
    width: 90%;
    flex-direction: column;
  }
  @media screen and (max-width: 375px) {
    margin-left: 25px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 20px;
  }
`

export const Item = styled.div`
  display: inline-block;
  position: relative;
  width: 180px;
  height: 60px;
  margin-top: 80px;
  margin-bottom: 50px;
  &:first-child {
    width: 140px;
  }
  @media screen and (max-width: 525px) {
    margin: 20px 0 0 10px;
  }
`

export const ItemTitle = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  font-family: Poppins;
  @media screen and (max-width: 2560px) {
    top: 0;
    left: 80px;
    width: 100%;
    font-size: 24px;
  }
  @media screen and (max-width: 1440px) {
    top: 7px;
    left: 80px;
    font-size: 20px;
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 60%;
    left: 70px;
  }
  @media screen and (max-width: 525px) {
    font-size: 20px;
    left: 80px;
  }
`
export const ItemSubTitle = styled.span`
  position: absolute;
  font-size: 20px;
  color: #5e6d77;
  font-family: Poppins;
  @media screen and (max-width: 2560px) {
    top: 35px;
    left: 80px;
    width: 100%;
    font-size: 24px;
  }
  @media screen and (max-width: 1440px) {
    top: 30px;
    left: 80px;
    font-size: 20px;
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 60%;
    left: 70px;
  }
  @media screen and (max-width: 525px) {
    font-size: 20px;
    left: 80px;
  }
`
