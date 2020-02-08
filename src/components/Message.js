import React, {Component} from 'react';
import EightBall from '../EightBall.png';
import PropTypes from 'prop-types';

class Message extends Component {
    align = () => {
        if(this.props.message.author === 'eightBall') {
            return {
                float: 'left'
            }
        } else {
            return {
                float: 'right'
            }
        }
    }

    who = () => {
        if(this.props.message.author === 'eightBall') {
            return {
                backgroundColor: 'rgb(85, 57, 82)',
                color: 'white'
            }
        } else {
            return {
                backgroundColor: 'rgb(85, 57, 82)',
                color: 'white'
            }
        }
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td style={this.align()}>
                                <img src={EightBall} alt={EightBall}></img>
                            </td>
                            <td style={this.align()}>
                                <p className='message-content' style={this.who()}>{this.props.message.content}</p>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}

export default Message;