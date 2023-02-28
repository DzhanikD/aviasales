import { useDispatch } from 'react-redux';

import { showMoreTickets } from '../../actions/actions';

import classes from './ButtonShowMore.module.scss';

function ButtonShowMore() {
  const dispatch = useDispatch();

  return (
    <button type="button" className={classes['button-show-more']} onClick={() => dispatch(showMoreTickets())}>
      Показать еще 5 билетов!
    </button>
  );
}

export default ButtonShowMore;
