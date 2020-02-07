import React from 'react';
import './App.css';
import Form from './components/Form';
import Messages from './components/Messages';
import EightBall from './EightBall.png';

class App extends React.Component {
  state = {
    messages: [
      {
        id: 1,
        author: 'eightBall',
        image: EightBall,
        content: 'Ask me your deepest, darkest questions',
      }
    ]
  }

  form = (ask) => {
    const newMessage = {
      id: 4,
      author: 'visitor',
      image: EightBall,
      content: ask
    }
    this.setState({messages: [...this.state.messages, newMessage] });
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
