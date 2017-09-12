import React from 'react';
import { withRouter } from 'react-router-dom';

class FeedForm extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      rss_url: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createFeed(this.state)
      .then(data => {
        this.props.history.push(`/feeds/${data.feed.id}`);
      });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    return(
      <ul className='auth-errors-list'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return(
      <div className='feed-form-component'>
        <div className='feed-header'>
          <h2>Add New Feed</h2>
        </div>
        <div className='feed-form'>
          <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <input
              type='text'
              value={this.state.url}
              placeholder='e.g. http://www.somefeed.com/rss'
              onChange={this.update('rss_url')}
            />
            <button id='feed-add-button'>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(FeedForm);
