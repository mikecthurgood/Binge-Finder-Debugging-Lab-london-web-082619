import React from 'react';

const tvShow = (props) => {
  // debugger
  return (
    <div>
      <br />
      <img src={props.show.image.medium} onClick={props.selectShow} alt="" />
    </div>
  );
}

export default tvShow;
