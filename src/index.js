import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
const API_KEY = "AIzaSyDy2RXLjdGrcDg5EILjrlyTUEPc2ZdYnl0";

//create a new component. This component should produce some html
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null 
		};

		YTSearch({key: API_KEY, term: 'baseball'}, videos => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
			//this will get resolved as this.setState({ videos: videos}), this is
			//just a bit of syntactic sugar
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		)
	}
}

//take this component's html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
