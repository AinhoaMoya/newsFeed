import React, { Component } from 'react';
import './RecentActivity.css';


class RecentActivity extends Component {

  constructor(props) {
   super(props);
   this.state = {
     items: this.props.items
   };
  }

  render() {
    return (
      <div className='recent-wrapper'>
        {this.state.items.map((item) => {
          <div className='recent_item'></div>
        })}
      </div>
    )
  }
}

export default RecentActivity;
