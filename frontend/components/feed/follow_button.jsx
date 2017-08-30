import React from 'react';
import { Overlay, Popover, ButtonToolbar, Button } from 'react-bootstrap';
import CollectionFormContainer from '../collection/collection_form_container';

class FollowButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.togglePopover = this.togglePopover.bind(this);
  }

  handleOnClick(e) {
    this.setState({ target: e.target, show: !this.state.show });
  }

  togglePopover() {
    this.setState({ show: !this.state.show });
  }

  followingButton() {
    return(
      <ButtonToolbar id='button-toolbar'>
        <Button id='following-button'>
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
      <div>
        {this.checkButton()}
      </div>
    );
  }
}

export default FollowButton;
