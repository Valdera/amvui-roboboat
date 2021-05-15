import React from 'react';

import background from '../../assets/background-product.svg';

import AchievementSelect from '../../components/achievement-select/achievement-select.component';
import AchievementTimeline from '../../components/achievement-timeline/achievement-timeline.component';
import Footer from '../../components/footer/footer.component';
import Publication from '../../components/publication/publication.component';

import './achievementpage.styles.scss';

const AchievementPage = () => {
  const list = [
    'Muhammad Arif Budiyanto',
    'Atikah Syahidah',
    'Fadhil Azharrisman',
    'Irfan Rahadi Kurnianto',
    'Radityo Fajar Pamungkas'
  ];
  return (
    <div className="achievementpage">
      <div className="achievementpage__select">
        <div className="achievementpage__background">
          <img src={background} alt="background achievement" />
        </div>
        <AchievementSelect />
      </div>
      <div className="achievementpage__timeline">
        <h1>
          AMV UI Timeline
          <div />
        </h1>
        <AchievementTimeline />
      </div>
      <div className="achievementpage__publications">
        <h1>
          Publications
          <div />
        </h1>
        <Publication
          title="Kapal Autonomous MAKARA 09: Wahana Pemetaan Danau Otomatis"
          listNames={list}
        />
        <Publication
          title="Underwater ROV MAKARA X: Survei Bawah Laut Menggunakan Remotely Operated"
          listNames={list}
        />
      </div>
      <div className="achievementpage__footer">
        <Footer />
      </div>
    </div>
  );
};

export default AchievementPage;
