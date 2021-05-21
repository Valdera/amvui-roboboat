import React from 'react';

import './composition.styles.scss';

const Composition = ({ imageArr }) => {
  return (
    <div className="composition">
      <img
        src={imageArr[0]}
        alt=" 1"
        class="composition__photo composition__photo--p1"
      />
      <img
        src={imageArr[1]}
        alt=" 2"
        class="composition__photo composition__photo--p2"
      />
      <img
        src={imageArr[2]}
        alt=" 3"
        class="composition__photo composition__photo--p3"
      />
    </div>
  );
};

export default Composition;
