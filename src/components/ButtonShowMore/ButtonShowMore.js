import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { showMoreTickets } from '../../actions/actions';

import classes from './ButtonShowMore.module.scss';

function ButtonShowMore() {
  const spinner = useSelector((state) => state.ticketsReducer.spinner);
  const error = useSelector((state) => state.ticketsReducer.error);
  const dispatch = useDispatch();

  const btnClass = cn(classes['button-show-more'], {
    [classes['btn-hidden']]: spinner || error,
  });
  return (
    <button type="button" className={btnClass} onClick={() => dispatch(showMoreTickets())}>
      Показать еще 5 билетов!
    </button>
  );
}

export default ButtonShowMore;
