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
export const Left = styled.div`
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

export const Right = styled.div`
  height: 720px;
  width: 800px;
  position: absolute;
  top: 30px;
  left: 330px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  overflow-y: scroll;
`

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`

export const ReviewCard = styled.div`
  height: 300px;
  width: 300px;
  margin: 20px auto;
  border-radius: 10px;
  position: relative;
  transition-property: transform;
  transition-duration: 0.4s;
  box-shadow: 0.5rem 1.5rem 2rem rgb(0 0 0 / 10%);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 30%);
  }
`

export const Title = styled.p`
  font-size: 34px;
  font-weight: 800;
  font-family: Josefin Sans;
  position: absolute;
  bottom: 130px;
  left: 20px;
  color: #fff;
`
export const Date = styled.p`
  font-size: 16px;
  font-family: Poppins;
  font-style: italic;
  position: absolute;
  bottom: 100px;
  left: 20px;
  color: #fff;
`
export const Comment = styled.p`
  font-size: 20px;
  font-family: Josefin Sans;
  font-style: italic;
  line-height: 30px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
`
