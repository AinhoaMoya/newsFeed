import React, { Component } from 'react';
import './NewsFeed.css';
import News from '../../data/news'
import Feeds from '../../components/Feeds/Feeds'
import Overlaps from '../../components/Overlaps/Overlaps'
import RecentActivity from '../../components/RecentActivity/RecentActivity'
import Topics from '../../components/Topics/Topics'
import VideoFeed from '../../components/VideoFeed/VideoFeed'


class NewsFeed extends Component {

  constructor(props) {
   super(props);
   this.state = {
     news: [],
     isLoaded: false
   };
  }

  componentDidMount() {
    this.setState({
      news: News,
      isLoaded: true
    })
  }

  filterNews = (type) => {
    let items = [];
    let news = this.state.news[0].items;
    news.map((item) => {
      if (item.entity_type === type) {
        items.push(item);
      } else if (item.type === type) {
        items.push(item);
      }
    })
    return items;
  }

  render() {

    return (
      <div className='wrapper'>
        {this.state.isLoaded &&
          <div className='wrapper'>
            <div className='header'>
              <h1>Your Dashboard</h1>
            </div>
            <Feeds feeds={this.filterNews('feed')}/>
            <Topics topics={this.filterNews('video-topics')} />
            <div className='main'>
              <VideoFeed videos={this.filterNews('video')} />
            </div>
            <div className='sidebar'>
              <RecentActivity items={this.filterNews('channel-new')} />
              <Overlaps items={this.filterNews('channel-overlap')} />
            </div>
          </div>
        }
        { !this.state.isLoaded &&
          <h1>Loading</h1>
        }
      </div>
    )
  }
}

export default NewsFeed;
