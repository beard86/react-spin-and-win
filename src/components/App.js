import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import Header 				from './Header';
//import Sidebar 				from './Sidebar';



class AppComponent extends Component {

	componentWillMount() {
		this.lock = new Auth0Lock('3RhBq3qZaZARDQae7PtbH59wyP9xe7Ld', 'wolftiger.eu.auth0.com');
	}

	render() {
		console.log(this.props, this.props.children)
		return (
		  <div>
		  	<Header lock={this.lock}></Header>
		  	<div className="container">
		  		<div className="row">
					<div className="medium-12 small-12">
						{this.props.children}
		  			</div>
		  		</div>
		  	</div>
		  </div>
		);
  }
}

//AppComponent.defaultProps = {};

export default AppComponent;
