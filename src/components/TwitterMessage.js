import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tweet: "",
      remainChars: props.maxChars,
      submittedData: []
    };
  }

  handleTweetChange = (event) => {
    let charLeft = this.props.maxChars - event.target.value.length
    this.setState({
      tweet: event.target.value,
      remainChars: charLeft
    }) 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleTweetChange(event)} value={this.state.tweet} type="text" name="message" id="message" />
        <p>{this.state.remainChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
