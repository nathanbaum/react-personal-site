import React, { Component } from 'react';
import { HighlightIcon } from './components/HighlightIcon';
import './css/App.css';

const githubBlack = require("./img/icon/github.svg");
const githubHighlight = require("./img/icon/github-purple.svg");
const linkedinBlack = require("./img/icon/linkedin.svg");
const linkedinHighlight = require("./img/icon/linkedin-blue.svg");
const atBlack = require("./img/icon/at.svg");
const atHighlight = require("./img/icon/at-yellow.svg");

let thingsIMake = [
  ' scalable systems.',
  ' delightful user experiences.',
  ' very good sourdough.',
  ' pretty good jokes.',
  ' data-driven descisions.',
  ' comprehensive documentation.',
  ' thorough unit tests.',
  ' descriptive function names.',
  ' appropriate small-talk.',
];

const msBetweenLetters = 100;
const msToRead = 5000;
const msBetweenBackspaces = 70;

function getRandomizedThingsIMake() {
  const thingsIMakeCopy = thingsIMake.map(t => t);
  const randomizedThingsIMake = [];
  while(thingsIMakeCopy.length !== 0) {
    const thingIndex = Math.floor(Math.random()*thingsIMakeCopy.length);
    randomizedThingsIMake.push(thingsIMakeCopy[thingIndex]);
    thingsIMakeCopy.splice(thingIndex, 1);
  }
  return randomizedThingsIMake;
}

function getStripped(message) {
  if (message.endsWith('│')) {
    return message.substring(0, message.length-1);
  }
  return message;
}

class App extends Component {
  constructor( props ) {
    super( props );

    this.randomizedThingsIMake = getRandomizedThingsIMake();
    this.thingIndex = 0;
    this.typing = false;

    this.state = {
      message: 'Nathan Baum makes',
    };

    // interval for cursor flash
    window.setInterval(
      () => {
        const message = this.state.message;
        if (!this.typing) {
          if (message.endsWith('│')) {
            this.setState({ message: message.substring(0, message.length-1) });
          } else {
            this.setState({ message: message+'│' });
          }
        }
      },
      500
    );

    // interval for changing message
    window.setInterval(
      () => {
        if (this.typingLocked) {
          return;
        }
        this.typingLocked = true;
        // lock the message
        this.typing = true;
        const string = this.randomizedThingsIMake[this.thingIndex++];
        if (this.thingIndex === this.randomizedThingsIMake.length) {
          // go back to begining of list
          this.thingIndex = 0;
        }
        // make a bunch of timeouts to type the words
        for (const charIndex in string) {
          window.setTimeout(
            () =>  {
              const message = this.state.message;
              this.setState({ message: `${getStripped(message)}${string[charIndex]}│` });
              // only true on the last timeout
              this.typing = parseInt(charIndex) !== string.length-1;
            },
            msBetweenLetters * charIndex
          );
        }

        // wait a little bit so the user can read the message
        window.setTimeout(
          () => {
            // make a bunch of timeouts to untype the words
            for (const charIndex in string) {
              window.setTimeout(
                () =>  {
                  const message = this.state.message;
                  let newMessage = getStripped(message);
                  newMessage = newMessage.substring(0, newMessage.length-1);
                  this.setState({ message: `${newMessage}│` });
                  // only true on the last timeout
                  this.typing = parseInt(charIndex) !== string.length-1;
                  this.typingLocked = parseInt(charIndex) !==string.length-1;
                },
                msBetweenBackspaces * charIndex
              );
            }
          },
          msToRead + string.length * msBetweenLetters
        );
      },
      2000
    );
  }

  render() {

    return (
      <div className="App">
        <p id="name">
          {this.state.message}
          <span style={{ color: 'white' }}>│</span>
        </p>
        <div id="contactIcons">
          <HighlightIcon link="https://github.com/nathanbaum" black={githubBlack} highlight={githubHighlight}/>
          <HighlightIcon link="https://www.linkedin.com/in/nathaniel-baum/" black={linkedinBlack} highlight={linkedinHighlight}/>
          <HighlightIcon link="mailto:nathanlbaum@gmail.com" black={atBlack} highlight={atHighlight}/>
        </div>
      </div>
    );
  }
}

/*

*/

export default App;
