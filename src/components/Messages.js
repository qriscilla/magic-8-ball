import React, {Component} from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class Messages extends Component {
    render() {
        return this.props.messages.map((message) => (
            <Message key={message.id} message={message} />
        ));
    }
}

Messages.propTypes = {
    messages: PropTypes.array.isRequired
}

export default Messages;