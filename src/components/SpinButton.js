'use strict';

import React       from 'react';
import SlotMachine from './SlotMachine';

// Creates Spin Button
class SpinButton extends React.Component{

  constructor(props) {
    super(props);
    //console.log(this.props, this.state);
  }

  handleClick(props){
    //console.log(this);
    this.props.onButtonClick();
  }

  render() {
    return (
      <div className="medium-4 small-12">
        <button id="spin-button" className="spin-button" onClick={this.props.onButtonClick}>Spin!</button>
      </div>
    );
  }

};

export default SpinButton;
