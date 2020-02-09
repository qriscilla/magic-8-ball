import React from 'react';
import { Element } from 'react-scroll'

class Test extends React.Component {

  render() {
    return (
      <div>

          <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '200px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>
                        <Element name="firstInsideContainer" style={{
                        marginBottom: '200px'
                        }}>
                        first element inside container
                    </Element>

                        <Element name="secondInsideContainer" style={{
                        marginBottom: '200px'
                        }}>
                        second element inside container
                    </Element>
          </Element>

      </div>
    );
  }
};

export default Test;