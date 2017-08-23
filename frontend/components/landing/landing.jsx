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
                <div className='feature-1-img'></div>
                <h3>Your News Feed</h3>
                <p>Whether it's real news, fake news, gossip, or
                  more - don't miss out from the news feeds your trust.
                </p>
              </div>
              <div className='feature-2'>
                <div className='feature-2-img'></div>
                <h3>Your Collections</h3>
                <p>Keep things organized in specific categories so your
                  fake news doesn't get mixed in with your real news...
                  because that's important!
                </p>
              </div>
              <div className='feature-3'>
                <div className='feature-3-img'></div>
                <h3>Your Control</h3>
                <p>Read when you want and what you want. You can save articles to
                  read while doing things or share with friends. 
                </p>
              </div>
            </div>

        </div>
      </div>

    </div>
  );
};

export default LandingPage;
