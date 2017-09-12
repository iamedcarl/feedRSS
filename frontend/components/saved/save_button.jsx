import React from 'react';

class SaveButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickSave = this.handleClickSave.bind(this);
  }

  handleClickSave(e) {
    let userIds = this.props.article.user_ids;
    let removeCurrentUser;
    let idx;

    if (userIds.includes(this.props.userId)) {
      idx = userIds.indexOf(this.props.userId);
      userIds.splice(idx, 1);
      this.props.updateArticle({
        id: this.props.article.id,
        user_ids: userIds
      });
    } else {
      userIds = userIds.concat(this.props.userId);
      this.props.updateArticle({
        id: this.props.article.id,
        user_ids: userIds
      });
    }
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
