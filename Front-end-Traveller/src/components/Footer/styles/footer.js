import styled from "styled-components"
import img from "../img/background.jpg"
import device from "../../../responsive/Device"

export const FooterWrapper = styled.div`
  padding: 65px 153px 38px;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  @media ${device.mobileS} {
    padding: 50px 40px 38px;
  }
  @media ${device.tablet} {
    padding: 65px 60px 38px;
  }
  @media ${device.laptop} {
    padding: 65px 80px 38px;
  }
  @media ${device.laptopL} {
    padding: 65px 150px 38px;
  }
`
export const TitleWrapper = styled.div`
  display: flex;
  display: grid;
  justify-content: center;
  align-items: center;
  @media ${device.mobileS} {
    margin-right: 0;
  }
  @media ${device.mobileM} {
    margin-right: 35px;
  }
  @media ${device.mobileL} {
    margin-right: 80px;
  }
  @media ${device.tablet} {
    margin-right: 0;
  }
`
export const SubTitle = styled.span`
  line-height: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #eef0f3;
  display: block;
  grid-row: 1;
  grid-column: 1;
  @media ${device.mobileS} {
    font-size: 16px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 22px;
  }
  @media ${device.laptopL} {
    font-size: 24px;
  }
`
export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: white;
  display: inline-block;
  vertical-align: middle;
  grid-row: 2;
  grid-column: 1;
  margin-right: 40px;
  @media ${device.mobileS} {
    margin-bottom: 20px;
    margin-right: 0;
    font-size: 16px;
  }
  @media ${device.tablet} {
    margin-bottom: 0;
    margin-right: 40px;
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 26px;
  }
  @media ${device.laptopL} {
    font-size: 36px;
  }
`
export const SearchBarWrapper = styled.form`
  display: inline-block;
  grid-row: 2;
  grid-column: 2;
  @media ${device.mobileS} {
    display: block;
    grid-row: 3;
    grid-column: 1;
  }
  @media ${device.tablet} {
    display: inline-block;
    grid-row: 2;
    grid-column: 2;
  }
`
export const SearchBar = styled.input`
  box-sizing: border-box;
  width: 350px;
  height: 45px;
  line-height: 45px;
  border-radius: 27px;
  background-color: #ffffff;
  padding-left: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #767474;
  &::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    color: #767474;
  }
  @media ${device.mobileS} {
    width: 130px;
    height: 30px;
    line-height: 30px;
    &::placeholder {
      font-size: 12px;
    }
  }
  @media ${device.mobileM} {
    width: 160px;
    height: 40px;
    line-height: 40px;
    &::placeholder {
      font-size: 14px;
    }
  }
  @media ${device.mobileL} {
    width: 250px;
  }
  @media ${device.tablet} {
    width: 200px;
    height: 40px;
    line-height: 40px;
    &::placeholder {
      font-size: 18px;
    }
  }
  @media ${device.laptop} {
    width: 300px;
    height: 45px;
    line-height: 45px;
  }
  @media ${device.laptopL} {
    width: 350px;
  }
`
export const SendButton = styled.button`
  width: 111px;
  height: 45px;
  margin-left: 30px;
  padding: 10px 32px;
  border-radius: 30px;
  background-color: #3ab2b3;
  vertical-align: middle;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #ffffff;
  @media ${device.mobileS} {
    width: 60px;
    height: 30px;
    margin-left: 15px;
    font-size: 12px;
    padding: 5px 10px;
  }
  @media ${device.mobileM} {
    width: 80px;
    height: 40px;
    margin-left: 20px;
    font-size: 14px;
    padding: 10px 15px;
  }
  @media ${device.mobileL} {
    width: 80px;
    margin-left: 30px;
  }
  @media ${device.tablet} {
    width: 90px;
    margin-left: 20px;
    font-size: 16px;
    padding: 8px 25px;
  }
  @media ${device.laptop} {
    width: 180px;
    height: 45px;
    margin-left: 30px;
    padding: 8px 32px;
    font-size: 18px;
  }
`
export const Content = styled.div`
  width: 1134px;
  height: 250px;
  margin: 50px auto;
  padding: 32px 0 0;
  background-color: #ffffff;
  opacity: 0.85;
  @media ${device.mobileS} {
    width: 250px;
    height: 200px;
    padding: 15px 0 0;
    margin: 30px auto;
  }
  @media ${device.mobileM} {
    width: 320px;
    height: 250px;
  }
  @media ${device.mobileL} {
    width: 450px;
  }
  @media ${device.tablet} {
    width: 650px;
    padding: 20px 0 0;
    margin: 30px auto;
  }
  @media ${device.laptop} {
    width: 900px;
    height: 220px;
    padding: 32px 0 0;
    margin: 50px auto;
  }
  @media ${device.laptopL} {
    width: 1134px;
    height: 250px;
    border-radius: 10px;
  }
`
export const Introduction = styled.p`
  width: 450px;
  margin: 10px 90px 10px 50px;
  font-size: 18px;
  font-weight: 400;
  display: inline-flex;
  justify-content: left;
  color: #767474;
  font-family: "Caveat", cursive;
  line-height: normal;
  @media ${device.mobileS} {
    margin: 0 0 20px 20px;
    font-size: 11px;
    width: 220px;
  }
  @media ${device.mobileM} {
    margin: 0 0 30px 20px;
    font-size: 12px;
    width: 250px;
  }
  @media ${device.mobileL} {
    margin: 5px 0 25px 30px;
    font-size: 14px;
    width: 400px;
  }
  @media ${device.tablet} {
    margin: 10px 0 30px 50px;
    width: 500px;
  }
  @media ${device.laptop} {
    margin: 10px 50px 10px 50px;
    font-size: 15px;
    width: 450px;
  }
  @media ${device.laptopL} {
    margin: 10px 90px 10px 50px;
    font-size: 25px;
  }
`
export const Menu = styled.div`
  display: inline-flex;
  justify-content: flex-end;
`
export const Contact = styled.span`
  padding-right: 87px;
  margin-left: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  &:last-child {
    padding-right: 0;
  }
  @media ${device.mobileS} {
    margin-left: 20px;
    padding-right: 0;
    font-size: 9px;
  }
  @media ${device.mobileM} {
    padding-right: 5px;
    font-size: 12px;
  }
  @media ${device.mobileL} {
    margin-left: 30px;
    padding-right: 40px;
  }
  @media ${device.tablet} {
    margin-left: 50px;
    padding-right: 80px;
  }
  @media ${device.laptop} {
    margin-left: 0;
    padding-right: 30px;
    font-size: 14px;
  }
  @media ${device.laptopL} {
    padding-right: 87px;
    font-size: 18px;
  }
`
export const Item = styled.li`
  background-color: #ffffff;
  padding-bottom: 10px;
  &:first-child {
    padding-top: 15px;
  }
  @media ${device.mobileS} {
    padding-bottom: 5px;
  }
  @media ${device.mobileL} {
    padding-bottom: 8px;
  }
  @media ${device.tablet} {
    padding-bottom: 5px;
  }
  @media ${device.laptop} {
    padding-bottom: 10px;
  }
`
export const Link = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #767474;
  &:hover {
    color: #3ab2b3;
    cursor: pointer;
  }
  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
  }
  @media ${device.laptopL} {
    font-size: 14px;
  }
`
export const Rectangle = styled.div`
  width: 1134px;
  height: 36px;
  margin-top: 20px;
  background-color: #3ab2b3;
  @media ${device.mobileS} {
    width: 250px;
    margin-top: 10px;
  }
  @media ${device.mobileM} {
    width: 320px;
    margin-top: 20px;
  }
  @media ${device.mobileL} {
    width: 450px;
  }
  @media ${device.tablet} {
    width: 650px;
  }
  @media ${device.laptop} {
    width: 900px;
  }
  @media ${device.laptopL} {
    width: 1134px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`
export const Copyright = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 36px;
  padding-right: 18px;
  justify-content: flex-end;
  color: #ffffff;
  @media ${device.mobileS} {
    font-size: 8px;
  }
  @media ${device.mobileM} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 12px;
  }
  @media ${device.laptopL} {
    font-size: 14px;
  }
`
