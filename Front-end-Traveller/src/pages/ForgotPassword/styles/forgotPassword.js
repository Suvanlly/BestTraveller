import styled from "styled-components"
import background from "../image/background.jpg"

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 100px;
`
export const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  background-color: hsla(10, 100%, 90%, 0.5);
  margin: 0 auto;
  border-radius: 5px;
`
export const Text = styled.p`
  width: 500px;
  padding: 100px 0 80px;
  margin: 0 auto;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  font-family: Poppins;
  line-height: normal;
`
export const Title = styled.p`
  font-size: 18px;
  font-family: Poppins;
  padding-left: 150px;
`
export const InputBox = styled.input`
  width: 500px;
  height: 60px;
  margin: 30px 0 50px 150px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 400;
  font-family: Poppins;
  padding-left: 10px;
  display: block;
`
export const Button = styled.button`
  width: 500px;
  height: 60px;
  margin-left: 150px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 400;
  font-family: Poppins;
  color: #ffffff;
  background-color: #3ab2b3;
  :hover {
    opacity: 0.8;
  }
`
