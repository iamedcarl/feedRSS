import React from 'react';
import Modal from 'react-modal';
import { withRouter, Route } from 'react-router-dom';
import FeedFormContainer from './feed_form_container';

const customStyles = {
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  },
  overlay : {
    backgroundColor    : 'rgba(0, 0, 0, 0.5)',
  }
};

class FeedModal extends React.Component {
  constructor(){
    super();

    this.state = {
      modalIsOpen: true,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.goBack();
  }

  render() {
    return (
      <div onClick={this.closeModal} className='modal'>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Feed Form Modal"
          animationType={"slide"}
          closeTimeoutMS={250}
        >
          <FeedFormContainer/>
        </Modal>
      </div>
    );
  }

}

export default withRouter(FeedModal);
