import React, { Component } from 'react';
import './VideoFeed.css';


class VideoFeed extends Component {

  constructor(props) {
   super(props);
   this.state = {
     videos: this.props.videos
   };
  }

  render() {
    return (
      <div className='videofeed-wrapper'>
        {this.state.videos.map((video) => {
          <div className='video'>
          </div>
        })}
      </div>
    )
  }
}

export default VideoFeed;
