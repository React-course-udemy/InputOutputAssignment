import React from 'react';

const UserInput = (props) => {
  return (
    <form>
      <input type="text" onChange={props.change} value={props.username} />
    </form>
  );
};

export default UserInput;
