import styled from "styled-components"

export const Body = styled.div`
  border-radius: 5px;
  flex-direction: column;
  text-align: center;
  width: 420px;
  height: 500px;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 100px;
  z-index: 9999;
  background-color: #fff;
`

export const ControlButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const NavButton = styled.img`
  width: 17px;
  height: 17px;
  margin: 20px 20px 35px;
`

export const Icon = styled.img`
  width: 65px;
  height: 65px;
  margin: 45px 0;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  font-family: Poppins;
`

export const Info = styled.div`
  width: 350px;
  height: 150px;
  /* background-color: #f4f8fd; */
  margin: 30px auto;
  border-radius: 5px;
  line-height: 1.5;
`

export const Text = styled.p`
  font-family: Poppins;
  font-size: 15px;
  padding: 25px;
  line-height: 30px;
  white-space: normal;
  text-align: center;
`

export const DoneButton = styled.div`
  width: 250px;
  height: 45px;
  padding: 15px;
  border-radius: 45px;
  border: none;
  font-weight: 900;
  font-size: 16px;
  font-family: Poppins;
  color: white;
  margin: 0 auto;
  cursor: pointer;
  background-color: #3ab2b3;
`
