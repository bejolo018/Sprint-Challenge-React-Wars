import React, { Component } from 'react';
import App from '../App';

const Char = props => {
    return(
        <div className='char-card'>
        <h1>{props.charsProp.name}</h1>
        </div>
    )
}

export default Char