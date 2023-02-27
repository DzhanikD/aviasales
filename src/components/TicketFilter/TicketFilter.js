import { useDispatch, useSelector } from 'react-redux';

import {
  checkboxAll,
  checkboxNonStop,
  checkboxOneTransfer,
  checkboxTwoTransfers,
  checkboxThreeTransfers,
} from '../../actions/actions';

import classes from './TicketFilter.module.scss';

function TicketFilter() {
  const transfers = useSelector((state) => state.checkboxReducer);
  const dispatch = useDispatch();

  return (
    <div className={classes.ticketFilter}>
      <h2 className={classes.title}>Количество пересадок</h2>
      <ul className={classes.list}>
        <li className={classes.item}>
          <label htmlFor="all" className={classes.label}>
            <input
              type="checkbox"
              id="all"
              checked={transfers.all}
              className={classes.checkbox}
              onChange={(e) => dispatch(checkboxAll(e.target.checked))}
            />
            <span className={classes['new-checkbox']} />
            <span className={classes.span}>Все</span>
          </label>
        </li>
        <li className={classes.item}>
          <label htmlFor="non-stop" className={classes.label}>
            <input
              type="checkbox"
              id="non-stop"
              className={classes.checkbox}
              checked={transfers.nonStop[0]}
              onChange={(e) => dispatch(checkboxNonStop(e.target.checked))}
            />
            <span className={classes['new-checkbox']} />
            <span className={classes.span}>Без пересадок</span>
          </label>
        </li>
        <li className={classes.item}>
          <label htmlFor="1_transfer" className={classes.label}>
            <input
              type="checkbox"
              id="1_transfer"
              className={classes.checkbox}
              checked={transfers.oneTransfer[0]}
              onChange={(e) => dispatch(checkboxOneTransfer(e.target.checked))}
            />
            <span className={classes['new-checkbox']} />
            <span className={classes.span}>1 пересадка</span>
          </label>
        </li>
        <li className={classes.item}>
          <label htmlFor="2_transfers" className={classes.label}>
            <input
              type="checkbox"
              id="2_transfers"
              className={classes.checkbox}
              checked={transfers.twoTransfers[0]}
              onChange={(e) => dispatch(checkboxTwoTransfers(e.target.checked))}
            />
            <span className={classes['new-checkbox']} />
            <span className={classes.span}>2 пересадки</span>
          </label>
        </li>
        <li className={classes.item}>
          <label htmlFor="3_transfers" className={classes.label}>
            <input
              type="checkbox"
              id="3_transfers"
              className={classes.checkbox}
              checked={transfers.threeTransfers[0]}
              onChange={(e) => dispatch(checkboxThreeTransfers(e.target.checked))}
            />
            <span className={classes['new-checkbox']} />
            <span className={classes.span}>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default TicketFilter;
