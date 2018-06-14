import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const API_KEY = "AIzaSyDy2RXLjdGrcDg5EILjrlyTUEPc2ZdYnl0";

const App = () => {
	return <div className="f1 tc">Hi!</div>
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
