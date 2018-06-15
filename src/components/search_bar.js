import React, { Component } from 'react';

class SearchBar extends Component {
	//this is how we initialize state in a class based component
	constructor(props) {
		super(props);

		this.state = { term: "" };
	}

	render() {
		return <input className="f1" onChange={event => this.setState({ term: event.target.value })} />
	}
}

export default SearchBar;