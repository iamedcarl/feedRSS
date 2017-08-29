import React from 'react';
import { OverlayTrigger, Popover, ButtonToolbar, Button } from 'react-bootstrap';

const popoverBottom = (
  <Popover id="popover-positioned-scrolling-bottom" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
  </Popover>
);

class FollowButton extends React.Component {
  constructor(props){
    super(props);
    this.state = { show: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.setState({ target: e.target, show: !this.state.show });
  }

  render() {
    return(
      <ButtonToolbar>
        <OverlayTrigger container={this} trigger="click" placement="bottom" overlay={popoverBottom}>
          <Button id='follow-button' onClick={this.handleOnClick}>
            Follow
          </Button>
        </OverlayTrigger>
      </ButtonToolbar>
    );
  }
}

export default FollowButton;
