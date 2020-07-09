import React from 'react';
import { red } from '@material-ui/core/colors';

const Footer = () => {
  return (
    <div>
      <body
        style={{
          backgroundColor: '#343a40',
          color: 'white',
          fontSize: 'small',
          textAlign: 'center',
          position: 'absolute',
          bottom: '0',
          width: '100%',
          height: '20px',
        }}
      >
        Find out more about us:
        <a href="https://www.portsmouth-port.co.uk/"> here</a>
      </body>
    </div>
  );
};

export default Footer;
