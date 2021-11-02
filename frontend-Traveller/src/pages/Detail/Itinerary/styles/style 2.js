import styled from "styled-components"

export const CardWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-left: 130px;
  margin-bottom: 80px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0.5rem 2rem 2rem 0.5rem rgb(0 0 0 / 15%);
  transition-property: transform;
  transition-duration: 0.4s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 20%);
  }
  @media screen and (max-width: 1440px) {
    margin-left: 70px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: 40px;
  }
  @media screen and (max-width: 525px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: 35px;
    height: 450px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 25px;
  }
`

export const CardImage = styled.img`
  margin-right: 30px;
  float: left;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: cover;
  border-radius: 10px;
  @media screen and (max-width: 2560px) {
    width: 30%;
    min-height: 120px;
    height: 20%;
  }
  @media screen and (max-width: 1440px) {
    // height: 200px;
    width: 30%;
    min-height: 110px;
    height: 30%;
  }
  @media screen and (max-width: 768px) {
    margin: auto 0;
    margin-right: 30px;
  }
  @media screen and (max-width: 525px) {
    width: 100%;
    height: 60%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    height: 50%;
    margin: 0 auto;
  }
`

export const CardText = styled.p`
  font-family: Poppins;
  line-height: normal;
  font-size: 26px;
  padding-right: 5px;
  @media screen and (max-width: 2560px) {
    font-size: 26px;
    width: 400%;
  }
  @media screen and (max-width: 1440px) {
    font-size: 18px;
    width: 550%;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    width: 500%;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 500%;
  }
  @media screen and (max-width: 525px) {
    padding-right: 0;
  }
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
`

// export const UnderLine = styled.div`
//   margin-left: 100px;
//   width: 760px;
//   height: 1px;
//   background-color: #d7dce3;
//   @media screen and (max-width: 2560px) {
//     width: 90%;
//     margin-left: 130px;
//   }
//   @media screen and (max-width: 1440px) {
//     margin-left: 70px;
//   }
//   @media screen and (max-width: 768px) {
//     width: 90%;
//     margin-left: 40px;
//   }
//   @media screen and (max-width: 525px) {
//     margin-left: 35px;
//   }
//   @media screen and (max-width: 375px) {
//     margin-left: 25px;
//   }
//   @media screen and (max-width: 320px) {
//     margin-left: 20px;
//   }
// `
