import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import Header 				from './Header';
//import Sidebar 				from './Sidebar';
import {Grid, Row, Col}  	from 'react-bootstrap';



class AppComponent extends Component {

	componentWillMount() {
		this.lock = new Auth0Lock('3RhBq3qZaZARDQae7PtbH59wyP9xe7Ld', 'wolftiger.eu.auth0.com');
	}

	render() {
		return (
		  <div>
		  	<Header lock={this.lock}></Header>
		  	<Grid>
		  		<Row>
		  			<Col xs={12} md={12}>
						{this.props.children}
		  			</Col>
		  		</Row>
		  	</Grid>
		  </div>
		);
  }
}

//AppComponent.defaultProps = {};

export default AppComponent;
