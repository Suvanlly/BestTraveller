import styled from "styled-components"
import device from "../../../responsive/Device"

export const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media ${device.mobileL} {
    position: absolute;
    top: 700;
    left: 0;
    width: 100%;
  }
`

export const Card = styled.form`
  width: 473px;
  height: 600px;
  padding: 65px 10px;
  background-color: white;
  z-index: 9999;
  border-radius: 5px;
  @media ${device.mobileS} {
    width: 325px;
    padding: 65px 0;
  }
  @media ${device.mobileM} {
    width: 430px;
    padding: 65px 10px;
  }
  @media ${device.mobileL} {
    position: absolute;
    width: 473px;
    top: 100px;
    right: 20px;
    padding-top: 15px;
  }
`
export const Title = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #1a202c;
`
export const InputContainer = styled.div`
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  font-family: Poppins;
  font-size: 16px;
  color: #4a5568;
  @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
`
export const Label = styled.label`
  margin-top: 17px;
`
export const Input = styled.input`
  padding: 15px;
  width: 350px;
  height: 21px;
  border-radius: 25px;
  border: solid 1px #e8e8e8;
  margin-top: 6px;
  :focus {
    outline: none;
  }
  @media ${device.mobileS} {
    width: 250px;
  }
  @media ${device.mobileM} {
    width: 350px;
  }
`
export const Button = styled.button`
  width: 350px;
  height: 50px;
  color: white;
  background-color: #3ab2b3;
  border-radius: 25px;
  border: none;
  margin-top: 36px;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media ${device.mobileS} {
    width: 250px;
  }
  @media ${device.mobileM} {
    width: 350px;
  }
`
export const Text = styled.span`
  font-size: 14px;
  color: #767474;
  margin-top: 30px;
  @media ${device.mobileS} {
    text-align: center;
  }
  @media ${device.mobileM} {
    text-align: left;
    margin-left: 30px;
  }
`
export const BlueText = styled.a`
  font-family: Poppins;
  color: #2c5282;
  margin-left: 30px;
  @media ${device.mobileS} {
    display: block;
    padding-top: 20px;
  }
  @media ${device.mobileM} {
    display: inline;
    padding-top: 0;
  }
`
export const Close = styled.a`
  display: blcok;
`
export const CloseIcon = styled.img`
  position: absolute;
  top: 24px;
  right: 28px;
  width: 18px;
  height: 18px;
  color: #767474;
`
export const Error = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
  color: rgb(231, 82, 69);
  letter-spacing: 0.25px;
`
