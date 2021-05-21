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
      <div className="achievementpage__news">
        <h1>
          Publications <div />
        </h1>
        <div className="news">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/news%2Fpublication-1.png?alt=media&token=eb79d584-2f4d-451a-9a3c-16bb466ac8fc"
            className="news--1"
            alt="news-1"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/news%2Fpublication-2.png?alt=media&token=17123f25-25be-4b85-bf22-985a32a4644c"
            className="news--2"
            alt="news-2"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/news%2Fpublication-3.png?alt=media&token=50d9c7c2-138b-47d9-ac5b-891f2c99bea6"
            className="news--3"
            alt="news-3"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/news%2Fpublication-4.png?alt=media&token=6a919e2d-6f6c-4c66-9181-3bd585770aa9"
            className="news--4"
            alt="news-4"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/webamv-c51f6.appspot.com/o/news%2Fpublication-5.png?alt=media&token=0c458100-4c39-49cf-8439-a0a4f081ebcf"
            className="news--5"
            alt="news-5"
          />
        </div>
      </div>
      <div className="achievementpage__publications">
        <h1>
          Research Products
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
