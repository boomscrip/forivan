import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Redirect,withRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import { render } from "react-dom";







class Error404 extends Component {
	componentDidMount() {
	        window.scrollTo(0, 0);
	    }

	render() {
		return(
<div>

ошибка 404
</div>






		)}
	}

export default Error404;
