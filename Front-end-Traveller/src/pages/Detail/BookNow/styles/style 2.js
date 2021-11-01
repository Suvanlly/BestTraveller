import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 130px;
  margin-top: 80px;
  margin-bottom: 100px;
  width: 90%;
  height: 280px;
  border-radius: 10px;
  box-shadow: 0 3rem 8rem 0.5rem rgb(0 0 0 / 15%);
  background-color: #f9f9f9;
  transition-property: transform;
  transition-duration: 0.4s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 20%);
  }
  @media screen and (max-width: 2560px) {
    width: 90%;
  }
  @media screen and (max-width: 1440px) {
    height: 280px;
    width: 90%;
    margin-left: 70px;
  }
  @media screen and (max-width: 1100px) {
    width: 90%;
    margin-left: 60px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: 40px;
  }
  @media screen and (max-width: 525px) {
    margin-left: 35px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 15px;
  }
`

export const Title = styled.p`
  padding: 20px;
  font-family: Poppins;
  line-height: normal;
  font-size: 3.25rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  color: rgb(58, 178, 179);
  @media screen and (max-width: 1440px) {
    font-size: 2.25rem;
  }
`

export const Content = styled.p`
  margin: 0 20px 35px 20px;
  font-family: Poppins;
  font-weight: 600;
  line-height: normal;
  font-size: 26px;
  @media screen and (max-width: 1440px) {
    font-size: 18px;
  }
`

export const Button = styled.button`
  margin: 0 auto;
  // margin-left: 20px;
  font-family: Poppins;
  color: #ffffff;
  cursor: pointer;
  padding: 20px;
  font-size: 28px;
  border-radius: 10rem;
  text-align: center;
  transition: all 0.2s;
  background-image: linear-gradient(to right, #4cb8c4, #3cd3ad);
  &:active {
    transform: translateY(3px);
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 1440px) {
    font-size: 17px;
    width: 200px;
    padding: 20px;
    text-align: center;
  }
`
