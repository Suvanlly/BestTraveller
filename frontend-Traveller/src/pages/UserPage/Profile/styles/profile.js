import styled from "styled-components"
import background from "../img/background.jpg"

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 100px;
`

export const ProfileWrap = styled.div`
  width: 1100px;
  height: 1000px;
  margin: 0 auto;
  background-color: #eef0f3;
  border-radius: 20px;
`
export const Left = styled.div`
  width: 300px;
  height: 1000px;
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
  width: 800px;
  height: 1000px;
  display: inline-block;
  position: absolute;
`
export const Header = styled.p`
  font-family: Poppins;
  font-size: 22px;
  font-weight: 700;
  margin: 80px 0 0 100px;
  color: #3ab2b3;
`
export const Photo = styled.img`
  position: absolute;
  height: 100px;
  top: 30px;
  right: 100px;
  border-radius: 50%;
  cursor: pointer;
`

export const UploadImage = styled.input`
  position: absolute;
  top: 72px;
  left: 567px;
  opacity: 0;
`

export const Title = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  margin: 30px 0 5px 100px;
  color: #767474;
`
export const Input = styled.input`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  width: 600px;
  height: 45px;
  margin: 10px 0 0 100px;
  padding: 20px;
  border-radius: 10px;
  color: #767474;
`
export const IconCurrent = styled(Icon)`
  position: absolute;
  top: 503px;
  right: 54px;
  cursor: pointer;
`

export const IconNew = styled(Icon)`
  position: absolute;
  top: 610px;
  right: 54px;
  cursor: pointer;
`
export const IconConfirm = styled(Icon)`
  position: absolute;
  top: 720px;
  right: 54px;
  cursor: pointer;
`

export const Button = styled.button`
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  width: 250px;
  height: 50px;
  margin: 30px 0 30px 100px;
  cursor: pointer;
  border-radius: 20px;
  text-align: center;
  background-image: linear-gradient(to right, #4cb8c4, #3cd3ad);
  :hover {
    opacity: 0.8;
  }
`
