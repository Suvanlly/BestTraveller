import React, { Component } from "react"
import { subscribe } from "../../api/api"
import { SearchBarWrapper, SearchBar, SendButton } from "./styles/footer"

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      email: e.target.value,
    })
  }

  render() {
    const { email } = this.state
    return (
      <SearchBarWrapper action="#" method="post">
        <SearchBar
          type="text"
          placeholder="Email"
          onChange={this.handleInputChange}
        />
        <SendButton onClick={(e) => subscribe(e, email)}>SEND</SendButton>
      </SearchBarWrapper>
    )
  }
}

export default Search
