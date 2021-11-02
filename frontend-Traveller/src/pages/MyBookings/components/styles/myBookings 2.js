import styled from "styled-components"
import background from "../../../UserPage/Profile/img/background.jpg"

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 50px;
`

export const ProfileWrap = styled.div`
  width: 1150px;
  height: 800px;
  margin: 0 auto;
  background-color: #eef0f3;
  border-radius: 20px;
  position: relative;
`
export const Menu = styled.div`
  width: 300px;
  height: 800px;
  background-color: #1d2b45;
  display: inline-block;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`
export const ListWrap = styled.ul`
  padding-top: 40px;
`
export const List = styled.li`
  padding: 50px 40px;
`
export const Link = styled.a`
  font-family: Poppins;
  font-size: 22px;
  font-weight: 700;
  :hover {
    color: #3ab2b3;
  }
`
export const Icon = styled.img`
  margin-right: 10px;
  vertical-align: bottom;
`

export const PersonalInfo = styled.div`
  height: 720px;
  width: 800px;
  position: absolute;
  top: 30px;
  left: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
`
