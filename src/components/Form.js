import React, { useRef } from 'react';

const Form = ({ ask }) => {
    const questionRef = useRef(null);

    const triggerAsk = e => {
        e.preventDefault();
        ask(questionRef.current.value);
    };

    return (
        <form className='form' onSubmit={triggerAsk}>
            <input ref={questionRef} placeholder='Dear magic 8 ball . . .' />
            <button type='submit'>ask</button>
        </form>
    );
};

export default Form;