import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './index.css';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#26428b', color: 'white', textAlign: 'center',
        position: 'fixed', bottom: 0, left: 0,right: 0}}>
      <div style={{ margin: '0 7px', display: 'flex', justifyContent: 'left' }}>
        <a href="https://twitter.com/LexerMarkets" target="_blank" rel="noopener noreferrer" style={{  color: 'white' }}>
          <FontAwesomeIcon icon={faTwitter} size="1.7x" />
        </a>
        <a href="https://discord.com/invite/QUCRBYD6uc" target="_blank" rel="noopener noreferrer" style={{ margin: '0 7px', color: 'white' }}>
          <FontAwesomeIcon icon={faDiscord} size="1.7x" />
        </a>
        <a href="https://docs.lexer.markets/lexer/about-lexer-markets" target="_blank" rel="noopener noreferrer" style={{ margin: '0 7px', color: 'white' }}>
          <FontAwesomeIcon icon={faBook} size="1.7x" />
        </a>
        <div className="scrolling-text" style={{ width: '100%', wordSpacing: '8px' }}>
  <span>
    LEX GO! Trade-2-Earn up to ~$20k in esLEX rewards now! More volume = more money! Read up on Trade-2-Earn!
  </span>
</div>

      </div>
    </div>
  );
};

export default Footer;
