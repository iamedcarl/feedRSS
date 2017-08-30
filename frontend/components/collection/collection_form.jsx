import React from 'react';
import { withRouter } from 'react-router-dom';

class CollectionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      feed_ids: [this.props.feedId],
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCollection(this.state)
      .then(collection => {
        this.props.history.push(`/feeds/${this.props.feedId}`);
      });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  componentDidMount() {
    this.props.fetchAllCollections();
  }

  render() {
    const collections = this.props.collections.map(collection => {
      return(
        <div className='menu-collection-item'>
          <i className="fa fa-rss" aria-hidden="true"></i>
          <span>{collection.title}</span>
          <button>+ Add</button>
        </div>
      );
    });

    return(
      <div className='collection-form'>
        <div className='collection-menu'>
          {collections}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Collection name</label>
          <input
            type='text'
            value={this.state.title}
            placeholder='e.g. News'
            onChange={this.update('title')}
          />
        <button>Create</button>
        </form>
      </div>
    );
  }

} //end of CollectionForm

export default withRouter(CollectionForm);
