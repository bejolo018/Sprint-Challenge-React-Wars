import React, { Component } from 'react';
import Character from './Character';
import './StarWars.css';

const CharacterList = (props) => {
    return(
        <div>
        {props.characterArray.map((Characters) => (
           <Character Character={Characters} />
          ))}
        </div>
    )
}

export default CharacterList;