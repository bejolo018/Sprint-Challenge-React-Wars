import React, { Component } from 'react';

const Character = props => {
    return(
        <div className='char-card'>
        <h1>Name:{props.characterList.name}</h1>
        </div>
    )
}

export default Character;