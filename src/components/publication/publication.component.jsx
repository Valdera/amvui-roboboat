import React from 'react';

import './publication.styles.scss';

const Publication = ({ listNames, title, link }) => {
  return (
    <div className="publication">
      <h1>{title}</h1>
      <div className="publication__grid">
        <ul>
          {listNames.map((val) => (
            <li key={val}>
              {val} <span>(Inventor)</span>
            </li>
          ))}
        </ul>
        <div className="publication__content">
          <span>Departement of Mechanical Engineering</span>
          <p>Research Output : Registered Patent</p>
          <a href={link}>
            <button>Link</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Publication;
