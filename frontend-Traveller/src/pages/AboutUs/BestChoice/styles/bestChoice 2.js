import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    width: 95%;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`
export const Title = styled.h2`
  margin: 160px 85px 25px 145px;
  font-family: Poppins, sans-serif;
  font-size: 36px;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  color: #000000;
  @media screen and (max-width: 1024px) {
    margin-left: 60px;
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 60px;
    font-size: 30px;
  }
  @media screen and (max-width: 525px) {
    margin-left: 40px;
    font-size: 28px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 25px;
    font-size: 26px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 20px;
    font-size: 24px;
  }
`
export const Subtitle = styled.h3`
  width: 477px;
  margin: 25px 102px 25px 147px;
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
  color: #000000;
  @media screen and (max-width: 1024px) {
    margin-left: 60px;
    font-size: 20px;
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    margin-left: 60px;
    font-size: 20px;
    width: 90%;
  }
  @media screen and (max-width: 525px) {
    margin-left: 40px;
    font-size: 20px;
    width: 90%;
  }
  @media screen and (max-width: 375px) {
    margin-left: 25px;
    font-size: 20px;
    width: 90%;
  }
  @media screen and (max-width: 320px) {
    margin-left: 20px;
    font-size: 20px;
    width: 90%;
  }
`
export const Paragraph = styled.p`
  width: 477px;
  margin: 25px 105px 210px 145px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 2.57;
  text-align: left;
  color: #000000;
  @media screen and (max-width: 1024px) {
    margin-left: 60px;
    width: 85%;
  }
  @media screen and (max-width: 768px) {
    margin-left: 60px;
    width: 85%;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 525px) {
    margin-left: 40px;
    width: 85%;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 25px;
    width: 95%;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 20px;
    width: 290px;
    margin-bottom: 5px;
  }
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  @media screen and (max-width: 1024px) {
    width: 50%;
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 525px) {
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`
export const Photo = styled.img`
  margin: 126px 100px 140px 30px;
  background-color: #c4c4c4;
  background-size: cover;
  @media screen and (max-width: 1440px) {
    width: 40%;
  }
  @media screen and (max-width: 1024px) {
    width: 40%;
    margin: 126px 30px 140px 30px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
  @media screen and (max-width: 525px) {
    width: 100%;
    margin: 0;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    margin: 0;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
    margin: 0;
  }
`

export const Underline = styled.span`
  width: 180px;
  height: 4px;
  text-decoration: underline #3ab2b3;
`
