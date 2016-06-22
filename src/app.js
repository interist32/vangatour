import * as React from 'react';
import {render} from 'react-dom';

import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Intro from './components/Intro';
import Question from './components/Question';

import {Provider} from 'react-redux';
import store, {history} from './store';


const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Intro}></IndexRoute>
        <Route path="/q/:id" component={Question}></Route>
			</Route>
		</Router>
	</Provider>
);

window.onload = () => {
	render(router, document.getElementById('app'));
};
