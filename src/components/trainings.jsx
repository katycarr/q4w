import React from 'react';

import '../trainings.scss';

const Trainings = () => {
  const ewBase = 'https://events.elizabethwarren.com'
  const events = `${ewBase}/event/`;
  const buttons = [
    { name: 'Cavass Training', url: `${events}/109508` },
    { name: 'Reach Training', url: `${events}/112385` },
    { name: 'Phone Bank Training', url: `${events}/112385` },
    { name: 'Text Bank Training', url: `${events}/99673` },
    { name: 'All Campaign Trainings', url: `${ewBase}/?event_type=11&is_virtual=true/` },
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
