import React from 'react';

function Squirrel(props) {
  return (
    <div className="Squirrel">
      <h3>SQUIRREL CARD!</h3>
      <h5> age:{props.data.age}</h5>
      <h5> locaation:{props.data.location}</h5>
      <h5> shift:{props.data.shift}</h5>
    </div>
  );
}

export default Squirrel;
