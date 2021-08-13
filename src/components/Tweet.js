import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";
import TiArrowBackOutline from "react-icons/lib/ti/arrow-back-outline";
import TiHeartOutline from "react-icons/lib/ti/heart-outline";
import TiHeartFullOutline from "react-icons/lib/ti/heart-full-outline";

class Tweet extends Component {
  render() {
    const { tweet } = this.props;

    if (tweet === null) {
      return <p>This Tweet doesn't existed</p>;
    }

    console.log(this.props);
    return <div className="tweet"></div>;
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
