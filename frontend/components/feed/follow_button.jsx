import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const popover = (
  <Popover id='popover' title='collections'>
    TESTING
  </Popover>
);

class FollowButton extends React.Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {

  }

  render() {
    return(
      <div>
        <OverlayTrigger
          rootClose
          placement="bottom"
          trigger='click'
          overlay={popover}
          container={this}
        >
          <button
            id='follow-button'
            onClick={this.handleOnClick}
          >
            Follow
          </button>
        </OverlayTrigger>
      </div>
    );
  }
}

export default FollowButton;
