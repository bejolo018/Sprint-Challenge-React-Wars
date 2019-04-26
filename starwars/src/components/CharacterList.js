import React, { Component } from 'react';
import Character from './Character';


const CharacterList = (props) => {
    return(
        <div>
        {props.characterList.map((characterList) => {
            <Character characterList={characterList} />;
          })}
        </div>
    )
}

export default CharacterList;