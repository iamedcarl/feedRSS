import React from 'react';
import { withRouter } from 'react-router-dom';
import { Overlay, Popover, ButtonToolbar, Button } from 'react-bootstrap';
import CollectionFormContainer from '../collection/collection_form_container';

class FollowButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      id: this.props.feed.id,
      rss_url: this.props.feed.rss_url,
      collection_ids: this.props.feed.collection_ids,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.togglePopover = this.togglePopover.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleOnClick(e) {
    this.setState({ target: e.target, show: !this.state.show });
  }

  togglePopover() {
    this.setState({ show: !this.state.show });
  }

  handleUnfollow(e) {
    let updated = this.props.feed.collection_ids;
    this.props.collectionIds.forEach(collectionId1 => {
      updated.forEach((collectionId2, idx) => {
        if(collectionId1 === collectionId2) {
          updated.splice(idx,1);
        }
      });
    });
    this.setState({ collection_ids: updated }, () => {
      this.props.updateFeed(this.state)
        .then(data => {
          this.props.history.push(`/discover`);});
    });
  }

  followingButton() {
    return(
      <ButtonToolbar id='button-toolbar'>
        <Button id='following-button' onClick={this.handleUnfollow}>
          <span>Following</span>
        </Button>
      </ButtonToolbar>
    );
  }

  followButton() {
    return(
      <ButtonToolbar id='button-toolbar'>
        <Button id='follow-button' onClick={this.handleOnClick}>
          Follow
        </Button>

        <Overlay
          show={this.state.show}
          onHide={this.togglePopover}
          target={this.state.target}
          placement="bottom"
          container={this}
          containerPadding={20}
          rootClose={true}
        >
          <Popover
            id="popover"
          >
            <CollectionFormContainer feedId={this.props.feedId}/>
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }

  checkButton() {
    if (this.props.followed) {
      return(<div>{this.followingButton()}</div>);
    } else {
      return(<div>{this.followButton()}</div>);
    }
  }

  render() {
    return(
      <div className='check'>
        {this.checkButton()}
      </div>
    );
  }
}

export default withRouter(FollowButton);
