import styled from "styled-components"

export const SearchWrapper = styled.div`
  width: 90%;
  height: 150px;
  background-color: rgba(29, 43, 69, 1);
  border-radius: 12px;
  box-shadow: 0 1.5rem 1rem rgb(0 0 0 / 25%);
  margin: 0 auto 100px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
`

export const Icon = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 77px;
  right: 43px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const DestinationWrapper = styled.div`
  width: 20%;
  display: inline-block;
  margin: 20px;
`

export const StateWrapper = styled(DestinationWrapper)``

export const DateWrapper = styled(DestinationWrapper)`
  width: 15%;
`

export const SliderWrapper = styled(DestinationWrapper)`
  width: 15%;
`

export const Title = styled.span`
  padding-top: 20px;
  font-family: Poppins;
  font-weight: 700;
  font-size: 15px;
  line-height: normal;
  display: inline-block;
  color: #fff;
`

export const Input = styled.input`
  margin-top: 20px;
  width: 100%;
  min-height: 38px;
  border-radius: 3px;
  font-family: Poppins;
  font-size: 16px;
  padding-left: 10px;
  border: none;
  &::placeholder {
    color: hsl(0, 0%, 50%);
  }
`
