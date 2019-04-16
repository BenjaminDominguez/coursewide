import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <form className="courses-search-form">
            <input onChange={this.props.handleSearch} type="text" className="courses-search-input" placeholder="Search for courses"/>
            <i class="fas fa-search"></i>
        </form>
      </div>
    )
  }
}

export default Search;
