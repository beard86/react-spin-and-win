'use strict';

import React from 'react';
import Slot  from './Slot';

// contains multiple instances of the Slot react class
// (For this implementation there should be 3)
class Slots extends React.Component{

  constructor(props) {
    super(props);
    //console.log(this.props.slotPositions)
  }

  render() {

    return (
      <div className="slot-container row">
        <Slot slotIndex="one" slotPositions={this.props.slotPositions[0]} />
        <Slot slotIndex="two" slotPositions={this.props.slotPositions[1]} />
        <Slot slotIndex="three" slotPositions={this.props.slotPositions[2]} />
      </div>
    );

  }

}

export default Slots;
