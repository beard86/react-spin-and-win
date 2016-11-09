'use strict';

import React, {Component} from 'react';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

// Creates Spin Button
class PlayButton extends Component {

	componentWillMount() {
		this.lock = new Auth0Lock('3RhBq3qZaZARDQae7PtbH59wyP9xe7Ld', 'wolftiger.eu.auth0.com');
	}

	constructor(props) {
		console.log(props);
		super(props);
		this.state = {
			authenticated: AuthStore.isAuthenticated()
		}
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}




	login(props) {
		// We can call the show method from Auth0Lock,
		// which is passed down as a prop, to allow
		// the user to log in
		console.log(this.props.lock);


		this.props.lock.show((err,profile,token) => {
			if (err) {
				alert(err);
				//console.log(err);
				return;

			}
			AuthActions.logUserIn(profile, token);
			//this.forceUpdate();
			this.setState({authenticated:true});
			React.renderComponent();
		});
	}

	logout() {
	    AuthActions.logUserOut();
		this.setState({authenticated:false});
	}

	render() {
	 console.log(this, this.props, this.state, );
		return (
			<div>
			{!this.state.authenticated ? (
				<div className="medium-4 small-12">
					<button id="play-button" className="play-button" onClick={this.login}>Play!</button>
				</div>
			) : (
				<div className="medium-4 small-12">
					<button id="play-button" className="play-button" onClick={this.login}>Loggedin!</button>
				</div>
			)}
			</div>
		);
	}

}

export default PlayButton;
