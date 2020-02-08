import React from 'react';

class Form extends React.Component {
    state = {
        ask: '',
        answer: ''
    }

    typing = (e) => {
        // picking up input value
        this.setState({[e.target.name]: e.target.value});  
        
        // randomizing answer and updating answer state
        const responses = [
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Signs point to yes",
            "Yes",
            "It is certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes - definitely",
            "You may rely on it",
            "Reply hazy, try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again"             
        ]
        const random = responses[Math.floor(Math.random()*responses.length)];
        this.setState({answer:random});
    }     

    asked = (e) => {
        e.preventDefault();

        // updating ask state
        this.setState({ask:''});

        // pushing states to App.js
        this.props.form(this.state.ask, this.state.answer);
    }

    render() {
        const isEnabled = this.state.ask.length > 0;
        return (
            <div className='container-fluid'>
                <form onSubmit={this.asked}>
                    <div className='row'>
                        <div className='col-sm-11'>
                            <input 
                                name='ask' 
                                type='text' 
                                placeholder='Dear Magic 8 Ball,' 
                                value={this.state.ask}
                                onChange={this.typing}
                            ></input>
                        </div>
                        <div className='col-sm-1'>
                            <button
                                type='submit'
                                value='Submit'
                                disabled={!isEnabled}
                            >Ask</button>                    
                        </div>                            
                    </div>
                </form>
            </div>                  
        );
    }
}

export default Form;