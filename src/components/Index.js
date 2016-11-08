import React, {Component}	from 'react';
import AuthStore from '../stores/AuthStore';
import SlotMachine from './SlotMachine';

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
					<h1>Log in to Spin & Win!</h1>
				) : (
					<SlotMachine />
				)}
			</div>
		);
	}

}

export default IndexComponent;