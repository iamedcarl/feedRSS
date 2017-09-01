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
    this.handleClickCancel = this.handleClickCancel.bind(this);
  }

  handleClickCancel(e) {
    console.log("Need to figure out how to close this");
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
          <div>
            <i className="fa fa-rss" aria-hidden="true"></i>
            <span>{collection.title}</span>
          </div>
          <button
            id='add-button'
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
        <div className='collection-create-form'>
          <form onSubmit={this.handleSubmit}>
            <label>Collection name</label>
            <div>
              <input
                type='text'
                value={this.state.title}
                placeholder='e.g. News'
                onChange={this.update('title')}
              />
            <button id='collection-create-button'>Create</button>
            <button
              id='collection-cancel-button'
              onClick={this.handleClickCancel}
            >
              Cancel
            </button>
          </div>
          </form>
        </div>
      </div>
    );
  }

} //end of CollectionForm

export default withRouter(CollectionForm);
