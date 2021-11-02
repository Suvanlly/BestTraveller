import React from "react"
import { MemberWrapper, Member, Register } from "./styles/signin"

const SignWrapper = () => (
  <MemberWrapper>
    <Member>Not a BestTraveller.com member?</Member>
    <Register href="/"> Register &gt;&gt; </Register>
  </MemberWrapper>
)

export default SignWrapper
