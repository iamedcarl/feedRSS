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

        <form id='auth-form-form' onSubmit={this.handleOnSubmit}>
          <input
            id='auth-form-fname-input'
            type={inputType}
            value={this.state.fname}
            placeholder="First Name"
            onChange={this.update('fname')}
          />
          <input
            id='auth-form-lname-input'
            type={inputType}
            value={this.state.lname}
            placeholder="Last Name"
            onChange={this.update('lname')}
          />
          <br/>
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
        </form>

      </div>
    );
  }

} // end of AuthForm

export default withRouter(AuthForm);
