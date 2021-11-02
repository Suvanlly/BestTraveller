import styled from "styled-components"
import device from "../../../responsive/Device"

export const SigninBox = styled.div`
  height: 708px;
  padding: 29px 24.5px 5px 8px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
  z-index: 9999;
  @media ${device.mobileS} {
    width: 320px;
    margin: 0 auto;
  }
  @media ${device.mobileM} {
    width: 400px;
    margin: 0 auto;
  }
  @media ${device.mobileL} {
    position: absolute;
    top: 115px;
    right: 20px;
    width: 473px;
    height: 600px;
  }
`
export const CloseIcon = styled.img`
  margin-left: 420px;
  width: 18px;
  height: 18px;
  @media ${device.mobileS} {
    margin-left: 280px;
  }
  @media ${device.mobileM} {
    margin-left: 350px;
  }
  @media ${device.mobileL} {
    margin-left: 420px;
  }
`
export const Header = styled.h2`
  margin: 5px 0 36px 57px;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #1a202c;
  @media ${device.mobileS} {
    font-size: 18px;
    margin: 0 0 30px 20px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
    margin: 0 0 36px 40px;
  }
  @media ${device.mobileL} {
    font-size: 24px;
    margin: 5px 0 36px 57px;
  }
`
export const Title = styled.h3`
  margin: 0 0 10px 57px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #4a5568;
  @media ${device.mobileS} {
    font-size: 14px;
    margin: 0 0 10px 20px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
    margin: 0 0 10px 40px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
    margin: 0 0 10px 57px;
  }
`
export const Input = styled.input`
  margin: 0 0 10px 57px;
  width: 350px;
  height: 50px;
  padding-left: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #2d3748;
  border-radius: 25px;
  border: solid 1px #e8e8e8;
  box-sizing: border-box;
  :focus {
    outline: none;
    ::placeholder {
      opacity: 0;
    }
  }

  @media ${device.mobileS} {
    font-size: 12px;
    margin: 0 0 5px 20px;
    width: 250px;
    height: 40px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
    margin: 0 0 10px 40px;
    width: 300px;
    height: 40px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
    margin: 0 0 10px 57px;
    width: 350px;
    height: 50px;
  }
`
export const Errors = styled.p`
  margin-left: 77px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: red;
  @media ${device.mobileS} {
    margin-left: 37px;
  }
  @media ${device.mobileM} {
    margin-left: 57px;
  }
  @media ${device.mobileL} {
    margin-left: 77px;
  }
`
export const RememberLabel = styled.label`
  margin: 0 0 36px 57px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  @media ${device.mobileS} {
    margin: 0 0 10px 20px;
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
    margin: 0 0 10px 40px;
  }
  @media ${device.mobileL} {
    margin: 0 0 36px 57px;
    font-size: 14px;
  }
`
export const ForgotPassword = styled.a`
  margin: 0 0 36px 107px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-decoration: none;
  color: #274975;
  &:hover {
    color: black;
  }
  @media ${device.mobileS} {
    margin: 0 0 36px 40px;
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
    margin: 0 0 36px 40px;
  }
  @media ${device.mobileL} {
    margin: 0 0 36px 80px;
    font-size: 14px;
  }
`
export const SigninButton = styled.button`
  margin: 20px 20px 36px 57px;
  width: 347px;
  height: 50px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #ffffff;
  background-color: #3ab2b3;
  border-radius: 25px;
  border: solid 1px #e8e8e8;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media ${device.mobileS} {
    margin: 10px 20px 15px 20px;
    width: 250px;
    height: 40px;
    font-size: 14px;
  }
  @media ${device.mobileM} {
    margin: 20px 20px 36px 40px;
    width: 300px;
    height: 40px;
    font-size: 16px;
  }
  @media ${device.mobileL} {
    margin: 20px 20px 36px 57px;
    width: 347px;
    height: 50px;
    font-size: 16px;
  }
`

export const MemberWrapper = styled.div`
  text-align: center;
  margin: 10px auto;
  @media ${device.mobileL} {
    margin-left: 20px;
  }
`
export const Member = styled.span`
  font-family: Poppins;
  font-size: 14px;
  color: #767474;
  @media ${device.mobileS} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
  }
`
export const Register = styled.a`
  margin-left: 10px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  color: #274975;
  @media ${device.mobileS} {
    font-size: 12px;
    display: block;
    margin: 20px 10px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
    display: block;
    margin-top: 20px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
    display: inline;
  }
`
