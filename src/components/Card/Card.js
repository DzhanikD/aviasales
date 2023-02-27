import add from 'date-fns/add';
import format from 'date-fns/format';

import classes from './Card.module.scss';

function Card({ price, carrier, segmentsThere, segmentsBack }) {
  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    if (minutes === 0) {
      return `${hours}ч`;
    }
    if (hours === 0) {
      return `${minutes}м`;
    }
    return `${hours}ч ${minutes}м`;
  }

  function textAboutTransfer(stops) {
    if (stops.length === 0) return 'нет пересадок';
    if (stops.length === 1) return '1 пересадка';
    if (stops.length === 2) return '2 пересадки';
    if (stops.length === 3) return '3 пересадки';
    return 'пересадки';
  }

  const formatPrice = (p) => {
    const strPrice = String(p);
    if (p < 1000) return strPrice;

    const resultStr = `${formatPrice(Number(strPrice.slice(0, strPrice.length - 3)))} ${strPrice.slice(
      strPrice.length - 3
    )}`;

    return resultStr;
  };

  const timezoneOffset = new Date().getTimezoneOffset();

  const formatDate = (date, duration) => {
    const start = format(add(new Date(date), { minutes: timezoneOffset }), 'HH:mm');
    const destination = format(add(new Date(date), { minutes: duration + timezoneOffset }), 'HH:mm');

    return `${start} - ${destination}`;
  };

  return (
    <div className={classes.card}>
      <div className={classes['header-card']}>
        <span className={classes.price}>{formatPrice(price)} P</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo S7" width={110} />
      </div>
      <div className={classes.detail}>
        <div className={classes.flight}>
          <div>
            <span className={classes.title}>
              {segmentsThere.origin} – {segmentsThere.destination}
            </span>
            <span className={classes.info}>{formatDate(segmentsThere.date, segmentsThere.duration)}</span>
          </div>
          <div>
            <span className={classes.title}>в пути</span>
            <span className={classes.info}>{getTimeFromMins(segmentsThere.duration)}</span>
          </div>
          <div className={classes.transfer}>
            <span className={classes.title}>{textAboutTransfer(segmentsThere.stops)}</span>
            <span className={classes.info}>{segmentsThere.stops.join(', ')}</span>
          </div>
        </div>
        <div className={classes.flight}>
          <div>
            <span className={classes.title}>
              {segmentsBack.origin} – {segmentsBack.destination}
            </span>
            <span className={classes.info}>{formatDate(segmentsBack.date, segmentsBack.duration)}</span>
          </div>
          <div>
            <span className={classes.title}>в пути</span>
            <span className={classes.info}>{getTimeFromMins(segmentsBack.duration)}</span>
          </div>
          <div className={classes.transfer}>
            <span className={classes.title}>{textAboutTransfer(segmentsBack.stops)}</span>
            <span className={classes.info}>{segmentsBack.stops.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
