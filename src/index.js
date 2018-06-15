import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// const API_KEY = "AIzaSyDy2RXLjdGrcDg5EILjrlyTUEPc2ZdYnl0";

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
