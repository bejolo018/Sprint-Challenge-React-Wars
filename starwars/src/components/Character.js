import React, { Component } from 'react';

const Char = props => {
    return(
        <div className='char-card'>
        <h1>Name:{props.Char.name}</h1>
        </div>
    )
}

export default Char