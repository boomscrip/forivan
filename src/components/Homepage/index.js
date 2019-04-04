import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Redirect,withRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import Footer from '../Footer'

import './style.css';






class Homepage extends Component {
	componentDidMount() {
	        window.scrollTo(0, 0);
	    }

	render() {
		return(
			<div>


					<div className="slider_wrapp">
						<div className="slider">
						<p>Слайдер с видео / с фото / либо ролик / можно запускать автоматически / еще нужно обговорить моменты </p>
						</div>
					</div>

					<div className="all_page-title">
						<h1>Упаковка, Маркировка, Проверка на качество, сортировка и тд и тп (по сути красивый заголовок)</h1>
					</div>

					<div style={{'margin':'10px'}}>
					<h2> Goods Machine</h2> — <p>Предлагает решение для упаковки, маркировки кодирования и тд и тп во многих отрослях промышленности (напишем небольшую нвормацию о личном брэнде)</p>

					</div>

					<div className="page-subtitle">
					<h2>Наши преимущества</h2>

					</div>


<Footer />
			</div>





		)}
	}

export default Homepage;
