import * as React from 'react';
import * as fastclick from 'fastclick';
import {getSiteLabels} from './utils';
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import Intro from './components/Intro';
import Question from './components/Question';
import Result from './components/Result';

import {Provider} from 'react-redux';
import store, {history} from './store';

import * as Cookies from 'js-cookie';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Intro}></IndexRoute>
        <Route path="/q/:id" component={Question}></Route>
        <Route path="/result" component={Result}></Route>
			</Route>
		</Router>
	</Provider>
);

window.onload = () => {
	const labels = getSiteLabels();
	document.title = `${labels.siteName} - ${labels.titleText}`;

	fastclick.attach(document.body);

	if(!Cookies.get('userId')){
		Cookies.set('userId', Date.now());
	}

	render(router, document.getElementById('app'));
};
