import styled from "styled-components"

export const ContactBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const LeftText = styled.div`
  width: calc(50% - 30px);
  min-height: 608px;
  @media screen and (max-width: 1230px) {
    width: 1230px;
  }
  @media screen and (max-width: 768px) {
    width: 768px;
  }
  @media screen and (max-width: 525px) {
    width: 525px;
  }
  @media screen and (max-width: 375px) {
    width: 375px;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
  }
`
export const Title = styled.h2`
  width: 223px;
  height: 59px;
  margin: 132px 321px 37px 190px;
  padding: 0 3px 14px 0;
  font-family: Poppins;
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media screen and (max-width: 768px) {
    margin-left: 120px;
  }
  @media screen and (max-width: 525px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 30px;
  }
`
export const Underline = styled.span`
  text-decoration: underline rgb(58, 178, 179);
  height: 59px;
  float: right;
`
export const Text = styled.p`
  width: 450px;
  height: 76px;
  margin: 10px 94px 80px 190px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  @media screen and (max-width: 768px) {
    margin-left: 120px;
  }
  @media screen and (max-width: 525px) {
    margin: 0 50px 50px;
    width: 425px;
    font-size: 15px;
  }
  @media screen and (max-width: 375px) {
    margin: 0 20px 50px;
    width: 335px;
    font-size: 15px;
  }
  @media screen and (max-width: 320px) {
    margin: 0 15px 80px;
    width: 290px;
    font-size: 15px;
  }
`
export const Address = styled.div`
  width: 318px;
  height: 29px;
  margin-left: 194px;
  margin-bottom: 26px;
  @media screen and (max-width: 768px) {
    margin-left: 120px;
  }
  @media screen and (max-width: 525px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 15px;
  }
`
export const AddressText = styled.p`
  width: 268px;
  height: 29px;
  float: right;
  margin-left: 50px;
  margin-top: -29px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6d6c6c;
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`
export const Phone = styled.div`
  margin-left: 193px;
  margin-bottom: 26px;
  width: 191px;
  height: 27px;
  @media screen and (max-width: 768px) {
    margin-left: 120px;
  }
  @media screen and (max-width: 525px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 15px;
  }
`
export const PhoneText = styled.p`
  width: 140px;
  height: 27px;
  margin-left: 51px;
  margin-top: -27px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6d6c6c;
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`
export const Email = styled.div`
  width: 191px;
  height: 27px;
  margin-left: 190px;
  margin-bottom: 45px;
  @media screen and (max-width: 768px) {
    margin-left: 120px;
  }
  @media screen and (max-width: 525px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 15px;
  }
`
export const EmailText = styled.p`
  width: 259px;
  height: 27px;
  margin-left: 54px;
  margin-top: -33px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #6d6c6c;
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`
export const Icon = styled.div`
  width: 155px;
  margin-left: 190px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin-left: 120px;
  }
  @media screen and (max-width: 525px) {
    margin-left: 90px;
  }
  @media screen and (max-width: 375px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 320px) {
    margin-left: 30px;
  }
`
export const RightBox = styled.div`
  width: calc(50% - 30px);
  margin-bottom: 170px;
  @media screen and (max-width: 1230px) {
    width: 1230px;
    margin: 0px auto 60px 190px;
  }
  @media screen and (max-width: 768px) {
    width: 768px;
    margin: 0px auto 60px 120px;
  }
  @media screen and (max-width: 525px) {
    width: 525px;
    margin: 0px auto 60px 90px;
  }
  @media screen and (max-width: 375px) {
    width: 375px;
    margin: 0px 0 60px 50px;
  }
  @media screen and (max-width: 320px) {
    width: 320px;
    margin: 0px 0 60px 30px;
  }
`
export const Form = styled.form`
  margin-top: 168px;
  width: 515px;
  height: auto;
  @media screen and (max-width: 1230px) {
    margin-top: 40px;
    width: 515px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
    width: 515px;
  }
  @media screen and (max-width: 525px) {
    margin-top: 30px;
    margin-left: -50px;
    width: 460px;
  }
  @media screen and (max-width: 375px) {
    margin-top: 30px;
    margin-left: -30px;
    width: 315px;
  }
  @media screen and (max-width: 320px) {
    margin-top: 20px;
    margin-left: -15px;
    width: 290px;
  }
`
export const Input = styled.input`
  font-family: Poppins;
  width: 515px;
  height: 50px;
  float: right;
  margin-left: 0;
  margin-bottom: 15px;
  padding: 0 26px;
  flex-grow: 0;
  border-radius: 5px;
  border: solid 1px #c4c4c4;
  ::placeholder {
    width: 110.4px;
    height: 21px;
    flex-grow: 0;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #767474;
  }
  @media screen and (max-width: 768px) {
    width: 515px;
  }
  @media screen and (max-width: 525px) {
    width: 480px;
  }
  @media screen and (max-width: 375px) {
    width: 305px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
  }
`
export const Message = styled.input`
  font-family: Poppins;
  width: 515px;
  height: 173px;
  float: right;
  margin-left: 0;
  margin-bottom: 15px;
  padding-left: 26px;
  padding-bottom: 120px;
  flex-grow: 0;
  border-radius: 5px;
  border: solid 1px #c4c4c4;
  :focus {
    outline: none;
  }
  ::placeholder {
    width: 69px;
    height: 19px;
    flex-grow: 0;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #767474;
  }
  @media screen and (max-width: 768px) {
    width: 515px;
  }
  @media screen and (max-width: 525px) {
    width: 480px;
  }
  @media screen and (max-width: 375px) {
    width: 305px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
  }
`
export const Button = styled.button`
  width: 134px;
  height: 44px;
  padding: 10px 2px 9px;
  margin-top: 17px;
  margin-left: 380px;
  flex-grow: 0;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background-color: rgb(58, 178, 179);
  border-radius: 32px;
  @media screen and (max-width: 768px) {
    margin-left: 350px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 525px) {
    margin: 20px 130px 20px;
  }
  @media screen and (max-width: 375px) {
    margin: 20px 80px 20px;
  }
  @media screen and (max-width: 320px) {
    margin: 20px 60px 20px;
  }
`
export const Error = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: bold;
  margin: 4px 0 15px 26px;
  color: rgb(231, 82, 69);
  letter-spacing: 0.25px;
`
