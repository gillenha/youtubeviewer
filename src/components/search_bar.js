import React, { Component } from 'react';

class SearchBar extends Component {
	//this is how we initialize state in a class based component
	constructor(props) {
		super(props);

		this.state = { term: "" };
	}

	render() {
		return(
			<div className="search-bar f1">
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value) }/>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;


			// <div className="welcome-message shadow-4">
			// 	<p>This is a simplified Youtube Viewer. <br /> Search for a video, get the top five results, and get watching. <br />
			// 	No distractions, no recommended videos, no crazy comments section.
			// 	Enjoy!</p>
			// </div>