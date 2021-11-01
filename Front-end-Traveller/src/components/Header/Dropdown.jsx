import React from "react"
import { DropdownButton, DropdownBox } from "./styles/dropdown"

const Dropdown = () => (
  <DropdownBox>
    <DropdownButton href="/">Home</DropdownButton>
    <DropdownButton href="/packages">Packages</DropdownButton>
    <DropdownButton href="/about-us">About us</DropdownButton>
    <DropdownButton href="/contact-us">Contact us</DropdownButton>
    <DropdownButton href="/register">Register</DropdownButton>
    <DropdownButton href="/sign-in">Sign in</DropdownButton>
  </DropdownBox>
)

export default Dropdown
