import React from 'react';
import './App.css';
import Form from './components/Form';
import Button from './components/Button';
import Answer from './components/Answer';

function App() {
  return (
    <div className="App container-fluid">
        <div className='row'>
          <div className='col-md-4'>
            <Form />
          </div>
          <div className='col-md-4'>
            <Button />
          </div>
          <div className='col-md-4'>
            <Answer />
          </div>
        </div>
    </div>
  );
}

export default App;
