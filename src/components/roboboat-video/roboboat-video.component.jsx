import React from 'react';
import Line from '../line/line.component';
import './roboboat-video.styles.scss';

const RoboboatVideo = () => {
  return (
    <div className="roboboat-video">
      <h1>AMV UI for Roboboat 2021</h1>
      <Line />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut.
      </p>
      <div className="roboboat-video__youtube"></div>
    </div>
  );
};

export default RoboboatVideo;
