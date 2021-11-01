import styled from "styled-components"

export const OverviewWrapper = styled.div`
  margin-top: 30px;
  padding: 20px 20px 0;
  border-bottom: 1px solid #d7dce3;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0.5rem 2rem 2rem 0.5rem rgb(0 0 0 / 15%);
  transition-property: transform;
  transition-duration: 0.4s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 20%);
  }
  @media screen and (max-width: 2560px) {
    width: 35%;
    position: absolute;
    top: 280px;
    left: 50%;
    margin-left: 130px;
  }
  @media screen and (max-width: 1440px) {
    margin-left: 70px;
    top: 250px;
  }
  @media screen and (max-width: 1024px) {
    position: unset;
    width: 90%;
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

export const OverviewTitle = styled.p`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: bold;
  font-family: Poppins;
  @media screen and (max-width: 1440px) {
    font-size: 28px;
  }
`

export const OverviewParagraph = styled.p`
  font-size: 22px;
  color: #5e6d77;
  font-family: Poppins;
  line-height: normal;
  margin-bottom: 20px;
  @media screen and (max-width: 1440px) {
    font-size: 17px;
  }
`
