import React from 'react';
import './App.css';
import Form from './components/Form';
import Messages from './components/Messages';
import EightBall from './EightBall.png';
import uuid from "uuid";
// import Test from './components/Test';
import { Element } from 'react-scroll'


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
        content: ask
      }
    const newAnswer =
      {
        id: uuid.v4(),
        author: 'eightBall',
        content: answer
      }
    this.setState({messages: [...this.state.messages, newMessage, newAnswer] });
  }

  render() {
    console.log(this.state.messages)
    return (
      <div>
        <header><div className='header'>MAGIC 8 BALL</div></header>
          <div className="container">
            <div className='row fixed-bottom'>
              <div className='col-md-12'>
              <Element style={{overflow:'scroll'}}>
                <Messages messages={this.state.messages} />
              </Element>  
                <Form form={this.form} />
                {/* <Test /> */}
              </div>
            </div>
          </div>
      </div>       
    );
  }
}

export default App;
