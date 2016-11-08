'use strict';

import React from 'react';

// StatusMessage is where success messages are output
class StatusMessage extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"row" + this.props.winnerClass}>
        <div className="medium-12">
          {this.props.winner}
        </div>
        <div className="medium-12">
          {this.props.winnerImage}
        </div>
      </div>
    )
  }

};

export default StatusMessage;
