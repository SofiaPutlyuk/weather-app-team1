import React, { useEffect, useState } from 'react';
import './Banner.scss';

const Banner = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
    const number = date.getDate();

    const suffix = (n) => {
      if (n > 3 && n < 21) return 'th';
      switch (n % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    setCurrentDate(`${formattedDate}\n${day}, ${number}${suffix(number)}`);
  }, []);

  return (
    <div className="banner">
      <h1 className="banner__title">Weather dashboard</h1>
      <div className="banner__content">
        <p className="banner__description">
          Create your personal list of <br />
          favorite cities and always be <br />
          aware of the weather.
        </p>
        <div className="banner__divider" />
        <p className="banner__date">{currentDate}</p>
      </div>
    </div>
  );
};

export default Banner;
