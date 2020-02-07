import React from 'react';

class Form extends React.Component {
    state = {
        ask: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.form(this.state.ask);
        this.setState({ask:''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});


    render() {
        return (
            <div className='container-fluid'>
                <form onSubmit={this.onSubmit}>
                    <div className='row'>
                        <div className='col-sm-11'>
                            <input 
                                name='ask' 
                                type='text' 
                                placeholder='Dear Magic 8 Ball,' 
                                value={this.state.ask}
                                onChange={this.onChange}
                            ></input>
                        </div>
                        <div className='col-sm-1'>
                            <button 
                                type='submit'
                                value='Submit'
                            >Ask</button>                    
                        </div>                            
                    </div>
                </form>
            </div>                  
        );
    }
}

export default Form;