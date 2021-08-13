import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";
import { TiArrowBackOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { TiHeartFullOutline } from "react-icons/ti";

class Tweet extends Component {
  render() {
    const { tweet } = this.props;

    if (tweet === null) {
      return <p>This Tweet doesn't existed</p>;
    }

    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      id,
      parent
    } = tweet;

    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      </div>
    );
  }
}

// function mapStateToProps(store, props) >>>> This is the important thing to notice here
// that mapStateToProps accept two arguments:
// (1) The state of the Store, (2) The props passed to the Tweet component

function mapStateToProps({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  };
}

export default connect(mapStateToProps)(Tweet);
