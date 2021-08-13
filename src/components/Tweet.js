import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

class Tweet extends Component {
  render() {
    console.log(this.props);
    return <div className="tweet"></div>;
  }
}

// function mapStateToProps(store, props) >>>> This is the important thing to notice here
// that mapStateToProps accept two arguments:
// (1) The state of the Store, (2) The props passed to the Tweet component

function mapStateToProps({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id];

  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser)
  };
}

export default connect(mapStateToProps)(Tweet);
