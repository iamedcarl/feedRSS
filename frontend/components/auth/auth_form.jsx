import React from 'react';
import { withRouter } from 'react-router-dom';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fname: "",
      lname: "",
      img_url: "",
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(currentUser => {
        this.props.history.push(`/user`);
      });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors() {
    this.props.errors.map(error => {
      return(<li key={error}>{error}</li>);
    });
  }

  render() {
    const { loggedIn, formType } = this.props;
    if (loggedIn) { return null; }

    let header, inputType;
    if (formType === 'login') {
      header = "Log in to feedRSS";
      inputType = "hidden";
    } else {
      header = "Sign up to feedRSS";
      inputType = "text";
    }

    return(
      <div className='auth-form'>
        <ul className='auth-form-errors'>
          {this.errors()}
        </ul>

        <form onSubmit={this.handleOnSubmit}>
          <input
            type={inputType}
            value={this.state.fname}
            onChange={this.update('fname')} />
          <input
            type={inputType}
            value={this.state.lname}
            onChange={this.update('lname')} />
          <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')} />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')} />
          <button id='auth-form-button'>Submit</button>
        </form>

      </div>
    );
  }
  
} // end of AuthForm

export default withRouter(AuthForm);
