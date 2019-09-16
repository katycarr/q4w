import React from 'react';

import '../trainings.scss';

const Trainings = () => {
  const buttons = [
    { name: 'Cavass Training', url: '/' },
    { name: 'Tabling & Fliering Training', url: '/' },
    { name: 'Phone Bank Training', url: '/' },
    { name: 'Text Bank Training', url: '/' },
  ];

  return (
    <div className="training__container">
      {buttons.map(({ name, url }) => (
        <a className="button training__button" href={url}>
          {name}
        </a>
      ))}
    </div>
  );
};

export default Trainings;