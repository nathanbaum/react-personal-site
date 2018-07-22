import React, { Component } from 'react';
import { ProjectIcon } from './components/ProjectIcon';
import { MailIcon } from './components/MailIcon';
import { FeedIcon } from './components/FeedIcon';
import { Carousel } from './components/Carousel';
import { Tooltip } from './components/Tooltip';
import { Feed } from './components/Feed';
import { HighlightIcon } from './components/HighlightIcon';
import { Projects } from './components/Projects';
import './css/App.css';

const face = require("./img/money-shot.JPG");
const githubBlack = require("./img/icon/github.svg");
const githubHighlight = require("./img/icon/github-purple.svg");
const linkedinBlack = require("./img/icon/linkedin.svg");
const linkedinHighlight = require("./img/icon/linkedin-blue.svg");
const atBlack = require("./img/icon/at.svg");
const atHighlight = require("./img/icon/at-yellow.svg");

class App extends Component {
  constructor( props ) {
    super( props );

    this.tooltipCarousel = React.createRef();
    this.contentCarousel = React.createRef();
  }

  render() {

    return (
      <div className="App">
        <div id="headerWrapper">
          <div id="header">
            <div className="Face Wrapper"><img id="face" src={face}/></div>
            <p id="name">Nathan Baum</p>
            <div id="iconBar">
              <FeedIcon onClick={ () => {
                this.tooltipCarousel.current.setIndex(0);
                this.contentCarousel.current.setIndex(0);
              }}/>
              <MailIcon onClick={ () => {
                this.tooltipCarousel.current.setIndex(1);
                this.contentCarousel.current.setIndex(1);
              }}/>
              <ProjectIcon onClick={ () => {
                this.tooltipCarousel.current.setIndex(2);
                this.contentCarousel.current.setIndex(2);
              }}/>
            </div>
          </div>
        </div>
        <Carousel ref={this.tooltipCarousel}>
          <Tooltip name="Feed" description="What have I been up to lately on GitHub?"/>
          <Tooltip name="Contact" description="Want to get in touch with me?"/>
          <Tooltip name="Projects" description="Take a look a a few of my projects."/>
        </Carousel>
        <div id="dividerWrapper"><div id="divider"></div></div>
        <Carousel ref={this.contentCarousel}>
          <Feed/>
          <div id="contactIcons">
            <HighlightIcon link="https://github.com/nathanbaum" black={githubBlack} highlight={githubHighlight}/>
            <HighlightIcon link="https://www.linkedin.com/in/nathaniel-baum/" black={linkedinBlack} highlight={linkedinHighlight}/>
            <HighlightIcon link="mailto:nathan.baum@nyu.edu" black={atBlack} highlight={atHighlight}/>
          </div>
          <Projects/>
        </Carousel>
      </div>
    );
  }
}

/*

*/

export default App;
