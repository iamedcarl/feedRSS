import React from 'react';
import { Route, Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import AuthModal from '../auth/auth_modal';


const LandingPage = () => {
  return(
    <div>
      <Route path="/login" component={AuthModal} />
      <Route path="/signup" component={AuthModal} />

      <header className='header-bar'>
        <HeaderContainer />
      </header>

      <div className='landing-page main'>
        <header className='welcome-header'>
          <div className='welcome container'>
            <h1>
              Welcome to FeedRSS
            </h1>
            <div className='welcome-sub'>
              The content you need to accelerate
              your research, marketing, and sales
            </div>
            <div className='welcome-button'>
              <Link to="/signup">Get started for free</Link>
              <Link to="/login">Try the demo</Link>
            </div>
            <div className='welcome-img'>
              <div className='img-placeholder'>
                <img src='https://s3.us-east-2.amazonaws.com/feedrss-pro/feedRSS_screen.png' />
              </div>
            </div>
          </div>
        </header>

        <div className='list-features'>
          <div className='app-features container centered'>
              <div className='app-features-kicker'>
                You are in control
              </div>
              <h2>More news, less other stuff</h2>

              <div className='app-features-grid'>
                <div className='feature-1'>
                  <div className='feature-1-img'>
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                  </div>
                  <h3>Your News Feed</h3>
                  <p>Whether it's real news, fake news, gossip, or
                    more - don't miss out from the feeds you trust.
                  </p>
                </div>
                <div className='feature-2'>
                  <div className='feature-2-img'>
                    <i className="fa fa-folder-open-o" aria-hidden="true"></i>
                  </div>
                  <h3>Your Collections</h3>
                  <p>Keep things organized in specific categories so your
                    fake news doesn't get mixed in with your real news...
                    because that's important!
                  </p>
                </div>
                <div className='feature-3'>
                  <div className='feature-3-img'>
                    <i className="fa fa-th" aria-hidden="true"></i>
                  </div>
                  <h3>Your Blogs</h3>
                  <p>Follow any one on the web who has a blog and writes about
                    stuff. Keep up with trends and learn something new from
                    one app.
                  </p>
                </div>
              </div>

          </div>
        </div>

        <div className='landing-bottom'>
          <div className='footer-message container centered'>
            <h1>Stay ahead of the curve</h1>
            <div className='message-kicker'>
              If you're not first, you're last.
            </div>
            <div className='footer-button'>
              <Link to="/signup">Get started for free</Link>
              <Link to="/login">Try the demo</Link>
            </div>
          </div>
        </div>

        <div className='landing-footer'>
          <div className='footer-info container centered'>
            <p>Created by Edcarl Adraincem for educational purposes only</p>
            <a href='http://edcarladraincem.com/'>
              <i className="fa fa-home" aria-hidden="true"></i>
            </a>
            <a href='https://github.com/iamedcarl/feedRSS'>
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href='https://www.linkedin.com/in/edcarladraincem/'>
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
