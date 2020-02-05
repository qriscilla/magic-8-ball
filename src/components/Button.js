import React from 'react';
import EightBall from '../EightBall.png'

function Button() {
    return (
        <div>
            <button><img src={EightBall} alt={EightBall}></img></button>
        </div>
    );
}

export default Button;