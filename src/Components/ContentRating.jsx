import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0
    };
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  handleLike() {
    this.setState((prevState) => ({
      likes: prevState.likes + 1
    }));
  }

  handleDislike() {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className='content-rating'></div>
        <p>
         CONTENT RATING?
        </p>
        <div className='rating-buttons'>
          <button className='like-button' onClick={this.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className='dislike-button' onClick={this.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ContentRating;
