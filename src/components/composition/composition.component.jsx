import React from 'react';

import photo1 from '../../assets/mechanic-composition-1.jpg';
import photo2 from '../../assets/mechanic-composition-2.jpg';
import photo3 from '../../assets/mechanic-composition-3.jpg';

import './composition.styles.scss';

const Composition = () => {
  return (
    <div className="composition">
      <img
        src={photo1}
        alt=" 1"
        class="composition__photo composition__photo--p1"
      />
      <img
        src={photo2}
        alt=" 2"
        class="composition__photo composition__photo--p2"
      />
      <img
        src={photo3}
        alt=" 3"
        class="composition__photo composition__photo--p3"
      />
    </div>
  );
};

export default Composition;
