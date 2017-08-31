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
    this.addToCollection = this.addToCollection.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCollection(this.state)
      .then(data => {
        this.props.history.push(`/collections/${data.collection.title}`);
      });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  addToCollection(e) {
    this.setState({ title: e.target.value }, () => {
      this.props.updateCollection(this.state)
        .then(data => {
          this.props.history.push(`/discover`);
        });
    });
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
          <button
            onClick={this.addToCollection}
            value={collection.title}
          >
          + Add
          </button>
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
