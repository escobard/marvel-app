import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
// required to work with async / await
import "babel-polyfill";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import './index.css';
import App from './App';
import reducers from "./reducers";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
