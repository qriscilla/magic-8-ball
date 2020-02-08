import React, {Component} from 'react';
import EightBall from '../EightBall.png';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

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

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td style={this.align()}>
                                { this.props.message.author === 'eightBall'
                                    ? (<img src={EightBall} alt={EightBall}></img>)
                                    : (<FontAwesomeIcon className='fontIcon' icon={faUserCircle} size='3x' />)
                                }  
                            </td>
                            <td style={this.align()}>
                                <p className='message-content'>{this.props.message.content}</p>
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