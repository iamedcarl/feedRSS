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
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleOnSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(currentUser => {
        this.props.history.push(`/my`);
      });
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {
      username: "demo",
      password: "password",
    };
    this.props.processForm(user)
      .then(currentUser => {
        this.props.history.push(`/my`);
      });
  }

  renderErrors() {
    return(
      <ul className='auth-errors-list'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderAdditionalSignUpFields(inputType){
    return(
      <div className='auth-form-fname-lname'>
        <input
          id='auth-form-fname-input'
          type={inputType}
          value={this.state.fname}
          placeholder="First Name"
          onChange={this.update('fname')}
          required
        />
        <br/>
        <input
          id='auth-form-lname-input'
          type={inputType}
          value={this.state.lname}
          placeholder="Last Name"
          onChange={this.update('lname')}
          required
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

        <h2>{header}</h2>
        <form onSubmit={this.handleOnSubmit}>
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
              required
            />
            <br/>
            <input
              id='auth-form-password-input'
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.update('password')}
              required
            />
            <br/>
            <button id='auth-form-button'>Submit</button>
          </div>
        </form>

        <div className='demo-login'>
          <form onSubmit={this.demoLogin}>
            <button id='demo-button' style={signUpLink}>Demo</button>
          </form>
        </div>

        <div className='auth-form-footer'>
          <Link to="/signup" style={signUpLink}>New user? Sign up</Link>
          <Link to="/login" style={loginLink}>Existing user? Login</Link>
        </div>

      </div>
    );
  }

} // end of AuthForm

export default withRouter(AuthForm);
