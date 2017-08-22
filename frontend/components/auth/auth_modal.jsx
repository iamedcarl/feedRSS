import React from 'react';
import Modal from 'react-modal';
import { withRouter, Route } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import AuthFormContainer from './auth_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  },
  overlay : {
    backgroundColor    : 'rgba(0, 0, 0, 0.45)',
  }
};

class AuthModal extends React.Component {
  constructor(){
    super();

    this.state = {
      modalIsOpen: true,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push(`/`);
  }

  render() {
    const formType = this.props.match.path.slice(1);

    let title;
    if (formType === 'login') { title = "Login to feedRSS"; }
    else { title = "Sign up to feedRSS"; }

    return (
      <div onClick={this.closeModal} className='auth-modal'>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Auth Form Modal"
        >

          <h2>{title}</h2>
          <Route path="/login" component={AuthFormContainer} />
          <Route path="/signup" component={AuthFormContainer} />
        </Modal>
      </div>
    );
  }

} // end of AuthModal

export default withRouter(AuthModal);
