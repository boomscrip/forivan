import React, { Component } from "react";
import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom'

import Header from './Header';


import Homepage from './Homepage';
import Footer from './Footer';
import Ivan from './Ivan';
import Services from './Services';
import Products from './Products';
import Industry from './Industry';
import Production from './Production';
import Delivery from './Delivery';
import Contacts from './Contacts';
import Error404 from './Error404';





class App extends Component {
  render() {
    return (

	<Router  onUpdate={() => window.scrollTo(0, 0)} >
 		<div className="container main-container ">
 			<Header />
 				<Switch>
								<Route  exact path="/" component={Homepage}  />
								<Route path="/Ivan" component={Ivan}  />
								<Route path="/Services" component={Services} />
								<Route path="/Products" component={Products} />
								<Route path="/Industry" component={Industry} />
								<Route path="/Production" component={Production} />
								<Route path="/Delivery" component={Delivery} />
								<Route path="/Contacts" component={Contacts} />

								<Route component={Error404} />

				</Switch>

		</div>
	</Router>

    );
  }
}

export default App;
