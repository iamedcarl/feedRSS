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
            The content you need to accelerate your research, marketing, and sales
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
    </div>
  );
};

export default LandingPage;
