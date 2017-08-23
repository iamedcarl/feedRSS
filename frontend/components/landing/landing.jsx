import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return(
    <div className='landing-page'>

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
          </div>
          <div className='welcome-img'>
            <div className='img-placeholder'>
              <img src='https://s3.feedly.com/production/head/images/landing/screenshot-web@2x.png' />
            </div>
          </div>
        </div>
      </header>

      <div className='list-features'>
        <div className='app-features container'>
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
                  more - don't miss out from the news feeds your trust.
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
                  stuff. Keep up with trends and learn something new on from
                  one app.
                </p>
              </div>
            </div>

        </div>
      </div>

      <div className='footer-button container'>
        <div className='footer-button'>
          <Link to="/signup">Get started for free</Link>
        </div>
      </div>

      <div className='landing-footer'>
        <div className='footer-info container'>
          <p>Created by Edcarl Adraincem for educational purposes only</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
