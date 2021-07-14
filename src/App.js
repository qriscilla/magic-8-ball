import React, { useState } from 'react';
import uuid from "uuid";

import './App.css';
import { randomAnswer } from './randomAnswers';

import Header from './components/Header';
import Messages from './components/Messages';
import Form from './components/Form';

const App = () => {
  const [ messages, setMessages ] = useState([
    {
      id: uuid.v4(),
      author: 'eightBall',
      content: 'Ask me your deepest, darkest questions.'
    }
  ]);

  const ask = question => {
    const newQuestion = {
      id: uuid.v4(),
      author: 'user',
      content: question
    };
    const newAnwer = {
      id: uuid.v4(),
      author: 'eightBall',
      content: randomAnswer()
    };

    setMessages([...messages, newQuestion, newAnwer]);
  };

    return (
      <div>
        <Header />
        <Messages messages={messages} />
        <Form ask={ask} />
      </div>
    );
}

export default App;
