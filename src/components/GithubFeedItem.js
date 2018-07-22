import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/GithubFeedItem.css';

class GithubFeedItem extends Component {

  render() {
    return (
      <div className="Github FeedItem Container">
        <div className="Github FeedItem Title">
          Made a commit to <a href={'https://github.com/' + this.props.repoName}>{this.props.repoName.slice(11)}</a>
        </div>
        <div className="Github FeedItem Message">
          {this.props.message}
        </div>
        <div className="Github FeedItem Stats">
          <div className="Github FeedItem Stats Date">
            {(new Date(this.props.timestamp)).toDateString()}
          </div>
          <div>
            <div className="Github FeedItem Stats Additions">+{this.props.stats.additions}</div>
            <div className="Github FeedItem Stats Deletions">-{this.props.stats.deletions}</div>
          </div>
        </div>
      </div>
    );
  }

}

GithubFeedItem.propTypes = {
  repoName: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.string,
  stats: PropTypes.object,
  timestamp: PropTypes.number
};

export { GithubFeedItem };
