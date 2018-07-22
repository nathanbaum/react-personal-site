import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Feed.css';

import { GithubFeedItem } from './GithubFeedItem';
import { Throbber } from './Throbber';

class Feed extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      ready: false,
      feed: [],
    };

    this.fetchGithubContent();
  }

  fetchGithubContent() {

    const githubFeedAdditions = [];
    let headers = new Headers();
    fetch(
      "https://api.github.com/users/nathanbaum/events/public",
      {
        method: 'GET',
        headers: headers
      }
    )
    .then( (response) => {
      return response.json();
    })
    .then( (githubData) => {
      const githubPromises = [];

      for( const event of githubData ) {
        if( event.type === "PushEvent" ){
          for( const commit of event.payload.commits ) {
            githubPromises.push( fetch(commit.url, {method: 'GET', headers: headers}) );
            githubFeedAdditions.push({repoName: event.repo.name, type: 'github', message: commit.message});
          }
        }
      }

      return Promise.all(githubPromises);
    })
    .then( (responses) => {
      const jsonPromiseArray = [];
      for( const response of responses ) {
        jsonPromiseArray.push(response.json());
      }
      return Promise.all(jsonPromiseArray);
    })
    .then( (data) => {
      for( const commit in data ) {
        githubFeedAdditions[commit].link = data[commit].html_url;
        githubFeedAdditions[commit].stats = data[commit].stats;
        githubFeedAdditions[commit].timestamp = Date.parse(data[commit].commit.committer.date);
      }

      return this.setState( (prevstate) => {
        return {
          ready: true,
          feed: [
            ...prevstate.feed,
            ...githubFeedAdditions,
          ]
        };
      });
    })
    .catch(function(error) {
      alert('Something went wrong while trying to fetch my github data, sorry :/\nAnyway, here\'s the error: ' + error);
    });

  }


  getPosts() {
    const myFeed = this.state.feed;
    myFeed.sort( (b,a) => {
      if (a.timestamp < b.timestamp) {
        return -1;
      }
      if (a.timestamp > b.timestamp) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

    const posts = [];
    let key = 0;
    for( const feedItem in this.state.feed ) {
      posts.push(
        <GithubFeedItem
          key={key}
          repoName={this.state.feed[feedItem].repoName}
          message={this.state.feed[feedItem].message}
          link={this.state.feed[feedItem].link}
          stats={this.state.feed[feedItem].stats}
          timestamp={this.state.feed[feedItem].timestamp}
        />
      );
      if( feedItem%2 === 1 ) {
        key++;
      }
    }

    const left = [];
    const right = [];

    for( const post in posts ) {
      if( post%2 === 0 ) {
        left.push(posts[post]);
      }
      else {
        right.push(posts[post]);
      }
    }

    return {left: left, right:right};
  }

  render() {
    if( !this.state.ready ) {
      return (
        <div className="Feed ContentWindow">
          <Throbber/>
        </div>
      );
    }

    //console.log( this.state.feed );
    return (
      <div className="Feed PostFlow">
       <div className="Feed Left">{this.getPosts().left}</div>
       <div className="Feed Right">{this.getPosts().right}</div>
      </div>
    );
  }

}

Feed.propTypes = {
  mediumUID: PropTypes.string
};

export { Feed };
