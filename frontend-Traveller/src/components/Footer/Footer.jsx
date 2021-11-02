import React from "react"
import List from "./List"
import Titles from "./Titles"
import Search from "./Search"
import IntroductionComponent from "./IntroductionComponent"
import CopyrightTitle from "./CopyrightTitle"
import { TitleWrapper, FooterWrapper, Content } from "./styles/footer"

const Footer = () => (
  <FooterWrapper>
    <TitleWrapper>
      <Titles />
      <Search />
    </TitleWrapper>
    <Content>
      <IntroductionComponent />
      <List />
      <CopyrightTitle />
    </Content>
  </FooterWrapper>
)

export default Footer
