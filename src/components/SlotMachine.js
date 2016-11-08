'use strict';

import React            from 'react';
import Slots            from './Slots';
import SpinButton       from './SpinButton';
import StatusMessage    from './StatusMessage';

const propTypes = {
  currentUser: React.PropTypes.object
};


// The SlotMachine React class handles the entirety of this very small app.
class SlotMachine extends React.Component {

  // Generates random initial state for slots.

  constructor(props) {
    super(props);
    this.state = {
      slotPositions: this.getRandomState()
    };
    //console.log(this.state.slotPositions);
  }

  //getInitialState() {
  //  return {slotPositions: this.getRandomState()};
  //}

  genSlotValue(){
    return Math.floor(Math.random() * 3);
  }

  // Generates random landing values for slots using genSlotValue defined at the end of the file
  getRandomState() {
    //console.log(genSlotValue(), genSlotValue(), genSlotValue());
    return [genSlotValue(), genSlotValue(), genSlotValue()];
  }


  handleButtonClick(event) {
    //console.log(event, this);
    event.preventDefault();
    // Set count to 0 before each button press
    let count = 0;
    // Set a random state as the final state of all slots before we start spinning
    let finalState = this.getRandomState();
    // Make sure we start with a fresh state for all slots on each spin
    let currentState = this.getRandomState();
    //console.log(currentState,finalState)
    // Spinning happens here
    var makeSpin = function(){
      let nextState = currentState;
      let hasChanged = false;
      var spinButton = document.getElementById('spin-button');

      // Evaluate whether or not slots are on their final destination, spin to nextState if not
      for(var i = 0; i < 3; i++){
        if (count < 9 || currentState[i] != finalState[i]) {

          nextState[i] = (currentState[i]+1)%3;
          hasChanged = true;
          spinButton.setAttribute('disabled', 'disabled');
          //spinButton.setTextContent('Spinning!');
          spinButton.classList.add("spinning");
        }
        //Re-enable spin button
        if (count >= 9){
          //console.log('count more than 9')
          spinButton.removeAttribute('disabled');
          //  spinButton.setTextContent('Spin!');
          spinButton.classList.remove('spinning');
        }
      }

      // Moves reel to the next assigned state if it's not yet on it's final value.
      this.setState({slotPositions: nextState, isFinal: !hasChanged})

      // Stops reel spinning if we've hit the final state's value
      if(!hasChanged) {
        return; 
      }
      currentState = this.state.slotPositions;
      setTimeout(makeSpin, 100); 
      count++;
      //console.log(count);
    }.bind(this);


    // Actually spin
    makeSpin();
  }




  render() {

      // Define winning states
      let sp = this.state.slotPositions;
      let isWinning = (sp[0] == sp[1]) && (sp[1] == sp[2]);

      // Make sure winner, winnerClass, and winnerImage strings are undefined until there's an actual win
      let winner = ""; 
      let winnerClass = "";
      let winnerImage = "";

      // Make sure we're only displaying the win state on final slot positions
      if(isWinning && this.state.isFinal){
        winner = [<h2>You've won John Lewis vouchers!</h2>, <h2>You've won M&amp;S vouchers!</h2>, <h2>You've won Size vouchers!!</h2>][sp[0]];
        winnerClass = ['coffee', 'tea', 'espresso'][sp[0]];
        winnerImage = [<div id='coffee-img' className='tossing win-img'></div>, <div id='tea-img' className='tossing win-img'></div>, <div id='espresso-img' className='tossing win-img'></div>][sp[0]];
      }

    // Render Machine
    return (
      <main className='react-slots'>
        <section className="machine">
          <Slots slotPositions={this.state.slotPositions} />
          <div className="spin row">
            <SpinButton onButtonClick={this.handleButtonClick.bind(this)} />
          </div>
        </section>
        <section className="win row">
          <StatusMessage winner={winner} winnerClass={winnerClass} winnerImage={winnerImage} />
        </section>
      </main>
    );
  }

}

// Generates a random slot value.
function genSlotValue(){
  return Math.floor(Math.random() * 3);
}

SlotMachine.propTypes = propTypes;


export default SlotMachine;
