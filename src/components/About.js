import User from './User';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log('Parent  Constructor');
  }

  componentDidMount() {
    // console.log('Parent componentDidMount');
  }
  render() {
    // console.log('Parent render');
    return (
      <div className='About'>
        <h1>About Us</h1>
        <h2>Siddhant manipulating this website</h2>

        {/* <User name={'Siddhat Kumar Prajapati (Function)'} location={'Giridih'} /> */}

        <UserClass
          name={'Siddhat Kumar Prajapati (class)'}
          location={'Giridih'}
        />
      </div>
    );
  }
}

export default About;
