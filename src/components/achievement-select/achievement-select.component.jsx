import React from 'react';

import './achievement-select.styles.scss';

const AchievementSelect = () => {
  return (
    <div className="achievement-select">
      <h1>Our achievements</h1>
      <p>Lorem ipsum sir dolor amet : </p>
      <div className="achievement-select__list">
        <div className="achievement-select__item">
          <p>ASV International Achievement</p>
          <span>3</span>
        </div>
        <div className="achievement-select__item">
          <p>Champion ROV Achievement</p>
          <span>2</span>
        </div>
        <div className="achievement-select__item">
          <p>ASV National Achievement</p>
          <span>4</span>
        </div>
        <div className="achievement-select__item">
          <p>Research Collaboration</p>
          <span>5</span>
        </div>
      </div>
    </div>
  );
};

export default AchievementSelect;
