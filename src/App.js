import React from 'react';
import './App.css';
import Form from './components/Form';
import Chat from './components/Chat';
import Answer from './components/Answer';

function App() {
  return (
    <div>
      <header>Magic 8 Ball</header>
      <div className="container-fluid">
        <div className='row'>
          <div className='col-md-6'>
            <Chat />
          </div>
          <div className='col-md-6'>
            <Answer />
          </div>
        </div>
        <div className='row'>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
