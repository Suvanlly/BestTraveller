import styled from "styled-components"

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 940px) {
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 0;
    width: 100%;
  }
  @media screen and (max-width: 525px) {
    flex-direction: column;
    padding-left: 0;
    flex-wrap: wrap;
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    flex-direction: column;
    padding-left: 0;
    flex-wrap: wrap;
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    flex-direction: column;
    padding-left: 0;
    flex-wrap: wrap;
    width: 100%;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
  @media screen and (max-width: 525px) {
    margin-left: 0;
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    margin-left: 0;
    width: 100%;
  }
  @media screen and (max-width: 320px) {
    margin-left: 0;
    width: 100%;
  }
`

export const Title = styled.h2`
  margin-top: 130px;
  margin-bottom: 70px;
  font-size: 36px;
  font-family: "Poppins", sans-serif;
  font-weight: 1000;
`

export const Underline = styled.span`
  text-decoration: underline;
  text-decoration-color: #3ab2b3;
`
