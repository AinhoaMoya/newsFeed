import React, { Component } from 'react';
import './Topics.css';


class Topics extends Component {

  constructor(props) {
   super(props);
   console.log(props)
   this.state = {
     topics: this.props.topics
   };
  }

  render() {
    return (
      <div className='topics-wrapper'>
        {this.state.topics.map((topic) => {
          <div className='topic'></div>
        })}
      </div>
    )
  }
}

export default Topics;
