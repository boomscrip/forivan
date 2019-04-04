import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Redirect,withRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import { render } from "react-dom";

import './style.css';






class Footer extends Component {
	componentDidMount() {
	        window.scrollTo(0, 0);
	    }

	render() {
		return(
<div>

<div className="footer__wrapp">

		<div className="footer__row1">

				<div className="footer_map">
адрес + иконка +
				</div>
				<div className="footer_contact">
телефон  почта
				</div>
				<div className="footer_nav">
				навигация по сайту

				</div>
				<div className="footer_social">
заказать звонок + иконки
				</div>
		</div>
		<div className="footer__row2">
				<div className="footer_copyright">

				© 2019 All Rights Reserved.


</div>
		</div>
</div>

</div>






		)}
	}

export default Footer;
