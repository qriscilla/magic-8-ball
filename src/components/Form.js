import React from 'react';

function Form() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-11'>
                    <input type='text' placeholder='Dear Magic 8 Ball' className='form-input'></input>
                </div>
                <div className='col-md-1'>
                    <button className='form-button'>Ask</button>                    
                </div>
            </div>
        </div>
    );
}

export default Form;