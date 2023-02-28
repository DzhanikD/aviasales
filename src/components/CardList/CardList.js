import LoadingBar from 'react-top-loading-bar';
import { useSelector } from 'react-redux';
import { Alert, Spin } from 'antd';

import ButtonShowMore from '../ButtonShowMore';
import Card from '../Card';

import classes from './CardList.module.scss';

function CardList() {
  const stateTickets = useSelector((state) => state.ticketsReducer);
  const activeButton = useSelector((state) => state.ticketsReducer.activeButton);
  const transfers = useSelector((state) => state.checkboxReducer);
  const loaderProgress = useSelector((state) => state.ticketsReducer.loaderProgress);
  function checkboxTickets(tickets) {
    const activeValuesTransfers = [];

    Object.keys(transfers).forEach((el) => {
      if (transfers[el][0] === true) {
        activeValuesTransfers.push(transfers[el][1]);
      }
    });

    const newTickets = tickets.filter((ticket) => {
      if (
        activeValuesTransfers.includes(ticket.segments[0].stops.length) ||
        activeValuesTransfers.includes(ticket.segments[1].stops.length)
      )
        return true;

      return false;
    });
    return newTickets;
  }

  function sortTickets(tickets) {
    switch (activeButton) {
      case 'cheapest': {
        return [...tickets].sort((a, b) => a.price - b.price);
      }
      case 'fastest': {
        return [...tickets].sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        );
      }

      case 'optimal': {
        return [...tickets].sort(
          (a, b) =>
            a.price * (a.segments[0].duration + a.segments[1].duration) -
            b.price * (b.segments[0].duration + b.segments[1].duration)
        );
      }

      default:
        return tickets;
    }
  }

  function searchIncludedCheckboxes(checkboxes) {
    return Object.values(checkboxes).flat(1).includes(true);
  }

  const searchIncluded = searchIncludedCheckboxes(transfers);

  const visibleTickets = checkboxTickets(sortTickets(stateTickets.tickets));

  const loader = stateTickets.spinner ? <Spin size="large" className={classes.spinner} /> : null;
  const error = stateTickets.error ? (
    <Alert
      message="Error"
      description="Что-то пошло не так, попробуйте снова!"
      type="error"
      showIcon
      className={classes.error}
    />
  ) : null;

  const messageNotResults =
    !loader && !error && (visibleTickets.length === 0 || !searchIncluded) ? (
      <div className={classes['no-flights']}> Рейсов, подходящих под заданные фильтры, не найдено</div>
    ) : null;

  const content =
    !stateTickets.spinner && !error && searchIncluded && visibleTickets.length !== 0 ? (
      <>
        <ul className={classes['card-list']}>
          <LoadingBar color="#7B68EE" progress={loaderProgress} loaderSpeed={1000} />
          {visibleTickets.map((el, index) =>
            index < stateTickets.visibleTickets ? (
              <li key={el.id}>
                <Card
                  price={el.price}
                  carrier={el.carrier}
                  segmentsThere={el.segments[0]}
                  segmentsBack={el.segments[1]}
                />
              </li>
            ) : null
          )}
        </ul>
        <ButtonShowMore />
      </>
    ) : null;

  return (
    <>
      {content}
      {loader}
      {error}
      {messageNotResults}
    </>
  );
}

export default CardList;
