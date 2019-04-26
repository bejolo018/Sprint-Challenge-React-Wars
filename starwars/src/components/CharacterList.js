import React, { Component } from 'react';
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