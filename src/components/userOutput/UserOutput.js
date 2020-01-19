import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div>
      <p style={{ backgroundColor: 'yellow' }}>welcome to jumanji</p>
      <p>this prof.{props.username}</p>
    </div>
  );
};
export default UserOutput;
