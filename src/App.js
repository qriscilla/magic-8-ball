import React from 'react';
import './App.css';
import Form from './components/Form';
import Messages from './components/Messages';
import EightBall from './EightBall.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import uuid from "uuid";

class App extends React.Component {
  state = {
    messages: [
      {
        id: uuid.v4(),
        author: 'eightBall',
        image: EightBall,
        content: 'Ask me your deepest, darkest questions.',
      }
    ]
  }

  form = (ask, answer) => {
    const newMessage =
      {
        id: uuid.v4(),
        author: 'visitor',
        image: <FontAwesomeIcon className='fontIcon' icon={faSearch} />,
        content: ask
      }
    const newAnswer =
      {
        id: uuid.v4(),
        author: 'eightBall',
        image: EightBall,
        content: answer
      }
    this.setState({messages: [...this.state.messages, newMessage, newAnswer] });
  }

  render() {
    console.log(this.state.messages)
    return (
      <div>
        <header>Magic 8 Ball</header>
        <div className="container-fluid">
          <div className='row'>
            <div className='col-md-12'>
              <Messages messages={this.state.messages} />
            </div>
          </div>
          <div className='row'>
            <Form form={this.form} />
          </div>
        </div>
      </div>       
    );
  }
}

export default App;
