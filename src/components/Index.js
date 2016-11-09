'use strict';

import React, {Component}	from 'react';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';
import SlotMachine from './SlotMachine';
import PlayButton from './PlayButton';

class IndexComponent extends Component {

	componentWillMount() {
		this.lock = new Auth0Lock('3RhBq3qZaZARDQae7PtbH59wyP9xe7Ld', 'wolftiger.eu.auth0.com');
	}

	constructor() {
		super();
		this.state = {
			authenticated: AuthStore.isAuthenticated()
		}
	}

	componentDidMount(props) {
		this.setState({authenticated:true});
		console.log(this.props, props);
	}

	render() {
		return(
			<div>
				<h1>Spin and Win</h1>

				{ !this.state.authenticated ? (
				<div className="medium-12 small-12">
					<img src="http://placehold.it/960x360"/>
					<PlayButton lock={this.lock} />

				</div>
				) : (
					<SlotMachine />
				)}
			</div>
		);
	}

}

export default IndexComponent;