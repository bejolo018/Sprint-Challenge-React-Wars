import React, { Component } from 'react';
import App from '../App';
import Char from './Character';


const charList = (props) => {
    return(
        <div>
        {this.state.charList.map(charFromMap => {
            return <chars charsProp={charFromMap} />;
          })}
        </div>
    )
}

export default charList