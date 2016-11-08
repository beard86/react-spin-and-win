'use strict';

import React from 'react';

// The Slot React class 
class Slot extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
 // console.log(this.props,this.props.slotIndex,this.props.slotPositions);
    return (
      <div className="medium-4 small-12">
        <div className="slot-reel"> 
          <div className={"slot slot-"+this.props.slotIndex+" position-"+this.props.slotPositions}>
          </div>
        </div>
      </div>
    );

  }
};

export default Slot;

