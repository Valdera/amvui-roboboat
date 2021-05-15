import React from 'react';

import {
  Timeline,
  Events,
  TextEvent,
  createTheme,
  themes
} from '@merc/react-timeline';

import {
  CustomCard2012,
  CustomCard2013,
  CustomCard2014,
  CustomCard2015,
  CustomCard2016,
  CustomCard2017,
  CustomCard2018,
  CustomCard2019
} from '../../components/custom-cards/custom-cards.component';

import './achievement-timeline.styles.scss';

const AchievementTimeline = () => {
  const customTheme = createTheme(themes.default, {
    marker: {
      borderColor: '#240058'
    },
    timelineTrack: {
      backgroundColor: '#f7d022'
    }
  });

  return (
    <div className="achievement-timeline">
      <Timeline theme={customTheme}>
        <Events>
          <TextEvent card={CustomCard2012} />
          <TextEvent card={CustomCard2013} />
          <TextEvent card={CustomCard2014} />
          <TextEvent card={CustomCard2015} />
          <TextEvent card={CustomCard2016} />
          <TextEvent card={CustomCard2017} />
          <TextEvent card={CustomCard2018} />
          <TextEvent card={CustomCard2019} />
        </Events>
      </Timeline>
    </div>
  );
};

export default AchievementTimeline;
