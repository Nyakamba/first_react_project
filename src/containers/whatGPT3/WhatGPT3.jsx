import React from 'react';
import './whatGPT3.css';
import {Feature} from '../../components/index'


const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3' id='whpt3'>
      <div className='gpt3__whatgpt3-feautre'>
        <Feature />
      </div>
      <div className='gpt3__whatgpt3-header'>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
          <Feature />
          <Feature />
          <Feature />
      </div>
    </div>
  )
}

export default WhatGPT3