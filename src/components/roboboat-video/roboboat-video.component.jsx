import React from 'react';
import Line from '../line/line.component';
import './roboboat-video.styles.scss';
import YouTube from 'react-youtube';

const RoboboatVideo = () => {
  const opts = {
    height: '400',
    width: '670'
  };

  return (
    <div className="roboboat-video">
      <h1>AMV UI for Roboboat 2021</h1>
      <Line />
      <p>
        RoboBoat is an international student competition. Teams from around the
        world design autonomous, robotic boats to navigate through a challenge
        course.
      </p>
      <div className="roboboat-video__youtube">
        <YouTube videoId="jsRMPio2Jv0" opts={opts} />
      </div>
    </div>
  );
};

export default RoboboatVideo;
