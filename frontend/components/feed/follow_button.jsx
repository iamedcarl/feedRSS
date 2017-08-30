import React from 'react';
import { Overlay, Popover, ButtonToolbar, Button } from 'react-bootstrap';
import CollectionFormContainer from '../collection/collection_form_container';

class FollowButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { show: false };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.togglePopover = this.togglePopover.bind(this);
  }

  handleOnClick(e) {
    this.setState({ target: e.target, show: !this.state.show });
  }

  togglePopover() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const props = {positionLeft: -37, positionTop: 27, placement: 'bottom'};
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
            {...props}
          >
            <CollectionFormContainer feedId={this.props.feedId}/>
          </Popover>
        </Overlay>
      </ButtonToolbar>
    );
  }
}

export default FollowButton;
