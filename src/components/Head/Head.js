import { useDispatch, useSelector } from 'react-redux';

import { cheapest, fastest, optimal } from '../../actions/actions';

import classes from './Head.module.scss';

function Head() {
  const dispatch = useDispatch();
  const activeButton = useSelector((state) => state.ticketsReducer.activeButton);

  return (
    <div className={classes['button-list']}>
      <button
        type="button"
        onClick={() => dispatch(cheapest())}
        className={`${classes['button-filter']} ${activeButton === 'cheapest' ? classes.active : ''}`}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        onClick={() => dispatch(fastest())}
        className={`${classes['button-filter']} ${activeButton === 'fastest' ? classes.active : ''}`}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        onClick={() => dispatch(optimal())}
        className={`${classes['button-filter']} ${activeButton === 'optimal' ? classes.active : ''}`}
      >
        Оптимальный
      </button>
    </div>
  );
}

export default Head;
