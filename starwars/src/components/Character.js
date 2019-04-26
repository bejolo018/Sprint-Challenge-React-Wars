import React, { Component } from 'react';
import './StarWars.css';

const Character = props => {
    return(
        <div className='Character-card'>
        <h1>Name: {props.Character.name}</h1>
        <p>Year Born: {props.Character.birth_year}</p>
        <p>Gender: {props.Character.gender}</p>
        </div>
    )
}

export default Character;