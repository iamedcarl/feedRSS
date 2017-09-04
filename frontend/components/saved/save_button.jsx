import React from 'react';

class SaveButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickSave = this.handleClickSave.bind(this);
  }

  handleClickSave(e) {
    this.props.saveArticle({
      id: this.props.articleId,
      user_ids: [this.props.user.id] 
    });
  }

  render() {
    return(
      <div onClick={this.handleClickSave}>
        <i className="fa fa-bookmark-o" aria-hidden="true"></i>
      </div>
    );
  }
}

export default SaveButton;
