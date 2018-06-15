import React, { Component } from 'react';

class SearchBar extends Component {
	//this is how we initialize state in a class based component
	constructor(props) {
		super(props);

		this.state = { term: "" };
	}

	render() {
		return(
			<div className="f-headline lh-solid mh5 mt2">
				<input 
				value={this.state.term}
				onChange={event => this.setState({ term: event.target.value })} />
			</div>
		)
	}
}

export default SearchBar;