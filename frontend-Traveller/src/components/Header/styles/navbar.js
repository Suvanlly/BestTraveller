import styled from "styled-components"
import device from "../../../responsive/Device"

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  background-color: rgba(90, 89, 88, 0.52);
  background-color: black;
  @media ${device.mobileS} {
    width: 100%;
    height: 65px;
  }
  @media ${device.mobileM} {
    height: 85px;
  }
`
export const NavbarLeft = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  &:first-child {
    margin-left: 40px;
  }
  @media ${device.mobileS} {
    width: 100%;
    display: none;
    &:first-child {
      margin-left: 20px;
    }
  }
  @media ${device.mobileM} {
    &:first-child {
      margin-left: 30px;
    }
  }
  @media ${device.mobileL} {
    display: flex;
    &:first-child {
      margin-left: 20px;
    }
  }
  @media ${device.tablet} {
    &:first-child {
      padding-right: 5px;
    }
  }
`

export const NavbarRight = styled(NavbarLeft)`
  display: flex;
  justify-content: flex-end;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.mobileL} {
    display: flex;
    justify-content: flex-end;
  }
`

export const Item = styled.div`
  margin-right: 40px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  color: #ffffff;
  &:hover {
    color: #ccc;
  }
  @media ${device.mobileS} {
    width: 100%;
    font-size: 9px;
    margin-right: 5px;
  }
  @media ${device.mobileM} {
    font-size: 10px;
    margin-right: 5px;
  }
  @media ${device.mobileL} {
    font-size: 11px;
    margin-right: 10px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    margin-right: 20px;
  }
  @media ${device.laptop} {
    font-size: 18px;
    margin-right: 40px;
  }
`

export const Logout = styled.span`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  padding-right: 60px;
  cursor: pointer;
  @media ${device.mobileS} {
    font-size: 16px;
    position: absolute;
    left: 30px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    padding-right: 20px;
    position: initial;
  }
  @media ${device.tablet} {
    font-size: 16px;
    padding-right: 40px;
  }
  @media ${device.laptop} {
    font-size: 18px;
    padding-right: 60px;
  }
`

export const Avatar = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  margin-right: 20px;
  @media ${device.mobileM} {
    margin-right: 20px;
  }
  @media ${device.mobileL} {
    margin-right: 10px;
    width: 2rem;
    height: 2rem;
  }
  @media ${device.tablet} {
    margin-right: 20px;
    height: 2.5rem;
    width: 2.5rem;
  }
`

export const UserName = styled.span`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  padding-right: 60px;
  @media ${device.mobileS} {
    font-size: 16px;
    padding-right: 20px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
    padding-right: 20px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
    padding-right: 15px;
  }
  @media ${device.tablet} {
    font-size: 16px;
    padding-right: 30px;
  }
  @media ${device.laptop} {
    font-size: 18px;
    padding-right: 60px;
  }
`

export const Logo = styled.img`
  display: none;
  @media ${device.laptop} {
    display: inline-block;
    vertical-align: bottom;
  }
`
