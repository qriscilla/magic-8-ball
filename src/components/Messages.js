import React, { useRef, useEffect } from 'react';

import Message from './Message';

const Messages = ({ messages }) => {
    const bottomRef = useRef(null);

    const scrollToBottom = () => 
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className='messages'>
            {messages.map(message => <Message key={message.id} message={message} />)}
            <div ref={bottomRef} />
        </div>
    );
};

export default Messages;