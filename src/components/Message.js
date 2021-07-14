import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import EightBall from '../EightBall.png';

const Message = ({ message }) => {
    const floatDependency = () => 
        message.author === 'eightBall' ? 'message--float-left' : 'message--float-right';

    return (
        <div className='message'>
            <table>
                <thead>
                    <tr>
                        <th className={floatDependency()}>
                            {message.author === 'eightBall'
                                ? <img src={EightBall} alt={EightBall} className='message--margin-right' />
                                : <FontAwesomeIcon 
                                    className='message__icon message--margin-left' 
                                    icon={faUserCircle} 
                                    size='3x' />}
                        </th>
                        <th className={floatDependency()}>
                            <p className='message__content'>{message.content}</p>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Message;