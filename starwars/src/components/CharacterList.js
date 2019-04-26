import React, { Component } from 'react';
import App from '../App';
import Char from './Character';


const charList = (props) => {
    return(
        <div>
        {props.charList.map(CharFromMap => {
            <Char Char={Char} />;
          })}
        </div>
    )
}

export default charList