import { useState } from 'react';

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className='user-card'>
      <h1>Conut= {count} </h1>
      <h1>Conut= {count2} </h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: siddhant_0087</h4>
    </div>
  );
};

export default User;
