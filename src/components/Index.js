import React, {Component}	from 'react';
import AuthStore from '../stores/AuthStore';

class IndexComponent extends Component {

	constructor() {
		super();
		this.state = {
			authenticated: AuthStore.isAuthenticated()
		}
	}
	render() {
		return(
			<div>
				{ !this.state.authenticated ? (
					<h1>Log in Spin & Win!</h1>
				) : (
					<h1>Click on a contact to view their profile</h1>
				)}
			</div>
		);
	}

}

export default IndexComponent;