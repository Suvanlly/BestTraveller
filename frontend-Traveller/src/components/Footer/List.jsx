import React from "react"
import { Menu, Contact, Item, Link } from "./styles/footer"

const List = () => (
  <Menu>
    <Contact>
      Our Agency
      <ul>
        <Item>
          <Link to="/">Services</Link>
        </Item>
        <Item>
          <Link to="/">Insurance</Link>
        </Item>
        <Item>
          <Link to="/">Agency</Link>
        </Item>
        <Item>
          <Link to="/">Tourism</Link>
        </Item>
        <Item>
          <Link to="/">Payment</Link>
        </Item>
      </ul>
    </Contact>
    <Contact>
      Partners
      <ul>
        <Item>
          <Link to="/">Booking</Link>
        </Item>
        <Item>
          <Link to="/">Uber</Link>
        </Item>
        <Item>
          <Link to="/">Trivago</Link>
        </Item>
        <Item>
          <Link to="/">TripAdviser</Link>
        </Item>
        <Item>
          <Link to="/">Priceline</Link>
        </Item>
      </ul>
    </Contact>
    <Contact>
      Business
      <ul>
        <Item>
          <Link to="/">Contact</Link>
        </Item>
        <Item>
          <Link to="/">Terms & Conditions</Link>
        </Item>
        <Item>
          <Link to="/">Investor Relations</Link>
        </Item>
        <Item>
          <Link to="/">Press Centre</Link>
        </Item>
        <Item>
          <Link to="/">Partner Help</Link>
        </Item>
      </ul>
    </Contact>
  </Menu>
)

export default List
