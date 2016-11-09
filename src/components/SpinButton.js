'use strict';

import React       from 'react';

// Creates Spin Button
class SpinButton extends React.Component{

  constructor(props) {
    super(props);
  }

  handleClick(props){
    console.log(this.props);
    this.props.onButtonClick();
  }

  render() {
   // console.log(this, this.props, this.state);
    return (
      <div className="medium-4 small-12">
        <button id="spin-button" className="spin-button" onClick={this.props.onButtonClick}>Spin!</button>
      </div>
    );
  }

}

export default SpinButton;
