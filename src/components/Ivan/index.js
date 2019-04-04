import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Redirect,withRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import { render } from "react-dom";

import './style.css';






class Ivan extends Component {
	componentDidMount() {
	        window.scrollTo(0, 0);
	    }

	render() {
		return(
			<div>

			<div className="Ivan_header">

					<div className="Ivan_header_row1">
						<div className="ivan_logo">
						<h1>Good Machine</h1>

						</div>
						<div className="ivan_header_descrip">
						<p>Производство и продажа линий пищевого оборудования, Автоматизация линий пищевого производства.</p>

						</div>

						<div className="ivan_contact">
						<p>почта / телефон</p>


						</div>

						<div className="ivan_soc">
						<p>соц сети</p>

						</div>

					</div>

					<div className="Ivan_header_row2">
						<div className="ivan_item__nav">Главная</div>
						<div className="ivan_item__nav">Наши услуги</div>
						<div className="ivan_item__nav">Контакты</div>
						<div className="ivan_item__nav">Стаьи</div>
						<div className="ivan_item__nav">Доставка</div>
						<div className="ivan_item__nav">Производство</div>
					</div>


			</div>






			</div>





		)}
	}

export default Ivan;
