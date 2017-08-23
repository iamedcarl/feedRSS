import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderAdditionalSignUpFields(inputType){
    return(
      <div>
        <input
          id='auth-form-fname-input'
          type={inputType}
          value={this.state.fname}
          placeholder="First Name"
          onChange={this.update('fname')}
        />
        <br/>
        <input
          id='auth-form-lname-input'
          type={inputType}
          value={this.state.lname}
          placeholder="Last Name"
          onChange={this.update('lname')}
        />
        <br/>
      </div>
    );
  }

  render() {
    const { loggedIn, formType } = this.props;
    if (loggedIn) { return null; }

    let header, inputType, nameInput, signUpLink, loginLink;
    if (formType === 'login') {
      header = "Log in to feedRSS";
      inputType = "hidden";
      loginLink = { display: 'none' };
    } else {
      header = "Sign up to feedRSS";
      inputType = "text";
      signUpLink = { display: 'none' };
      nameInput = this.renderAdditionalSignUpFields(inputType);
    }

    return(
      <div className='auth-form-container'>

        <form onSubmit={this.handleOnSubmit}>
          <h2>{header}</h2>
          {this.renderErrors()}
          <div className='auth-form'>
            <br/>
            {nameInput}
            <input
              id='auth-form-username-input'
              type="text"
              value={this.state.username}
              placeholder="Username"
              onChange={this.update('username')}
            />
            <br/>
            <input
              id='auth-form-password-input'
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.update('password')}
            />
            <br/>
            <button id='auth-form-button'>Submit</button>
          </div>
        </form>

        <Link to="/signup" style={signUpLink}>New user? Sign up</Link>
        <Link to="/login" style={loginLink}>Existing user? Login</Link>
      </div>
    );
  }

} // end of AuthForm

export default withRouter(AuthForm);
