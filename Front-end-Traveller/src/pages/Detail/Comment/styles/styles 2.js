import styled from "styled-components"

export const CommentWrap = styled.div`
  width: 90%;
  margin: 80px 0 120px 130px;
  @media screen and (max-width: 1440px) {
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
  @media screen and (max-width: 320px) {
    margin-left: 20px;
  }
`
export const CommentField = styled.div`
  margin-bottom: 20px;
`
export const FieldName = styled.span`
  font-family: Poppins;
  font-size: 30px;
  font-weight: bold;
`
export const FieldInput = styled.div`
  margin: 30px 0 50px 0;
  width: 100%;
  height: 300px;
  border-radius: 50px;
  background-image: linear-gradient(to right, #4cb8c4, #3cd3ad);
  box-shadow: 0.5rem 1rem 1.5rem 1rem rgb(0 0 0 / 10%);
`
export const InputArea = styled.textarea`
  width: 94%;
  height: 220px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  padding: 20px;
  margin: 40px 3%;
  border: none;
  border-radius: 20px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`
export const Button = styled.button`
  margin: 0 auto;
  width: 200px;
  font-family: Poppins;
  color: #ffffff;
  cursor: pointer;
  padding: 20px;
  font-size: 28px;
  border-radius: 10rem;
  transition: all 0.2s;
  text-align: center;
  box-shadow: 0.5rem 1rem 1rem 0.5rem rgb(0 0 0 / 10%);
  background-image: linear-gradient(to right, #4cb8c4, #3cd3ad);
  &:active {
    transform: translateY(3px);
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`
