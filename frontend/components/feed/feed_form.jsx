import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';

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
      <div>
        <header className='header-bar nav-open'>
          <HeaderContainer />
        </header>

        <div className='sidebar'>
          <SideBar />
        </div>

        <div className='feed-form-component main nav-open'>
          <div className='container centered'>
            <div className='feed-header'>
              <i className="fa fa-rss" aria-hidden="true"></i>
              <h1>Add a feed</h1>
            </div>
            <div className='discover-sub'>
              What source do you want to follow?
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

        </div>
      </div>
    );
  }
}

export default withRouter(FeedForm);
