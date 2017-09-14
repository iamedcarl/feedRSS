import React from 'react';
import Modal from 'react-modal';
import { withRouter, Route } from 'react-router-dom';
import ArticleShowContainer from './article_show_container';
import SaveButtonContainer from '../saved/save_button_container';

const customStyles = {
  overlay : {
    backgroundColor    : 'rgba(0, 0, 0, 0.2)',
  },
  content : {
    position                   : 'absolute',
    top                        : '0px',
    left                       : '25%',
    right                      : '0px',
    bottom                     : '0px',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
  }
};

class ArticleModal extends React.Component {
  constructor(props){
    super(props);

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
    if (this.props.article === undefined) { return null; }

    let saveStatus = "";
    if (this.props.article.user_ids.includes(this.props.userId)) {
      saveStatus = "modal-bookmark-saved";
    } else {
      saveStatus = "modal-bookmark-unsaved";
    }

    return (
      <div onClick={this.closeModal} className='article-modal'>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          animationType={"slide"}
          closeTimeoutMS={250}
          contentLabel='Article Modal'
        >

          <div className='modal-header'>
            <div className='icon-close' onClick={this.closeModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <div className={saveStatus}>
              <SaveButtonContainer
                userId={this.props.userId}
                article={this.props.article}
              />
            </div>
          </div>

          <Route path="/articles/:id" component={ArticleShowContainer} />
        </Modal>
      </div>
    );
  }
}

export default withRouter(ArticleModal);
