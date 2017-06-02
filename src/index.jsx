/**
 * @flow
 * index for project
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './App';

import './style.scss';

class PageWrapper extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<App />
		);
	}
};

ReactDOM.render(
  <PageWrapper />
  ,document.getElementById('app')
);
