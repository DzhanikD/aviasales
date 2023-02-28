import { error, loadingTickets, status } from './actions';

function idForTickets(tickets) {
  const newTickets = tickets.map((el) => ({ ...el, id: crypto.randomUUID() }));
  return newTickets;
}

function ticketLoad() {
  return async (dispatch) => {
    let stop;
    let jsonSearchID = '';
    let tickets;

    try {
      const searchID = await fetch('https://aviasales-test-api.kata.academy/search');
      jsonSearchID = await searchID.json();
    } catch (e) {
      dispatch(error());
    }

    if (jsonSearchID.length !== 0) {
      do {
        try {
          tickets = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${jsonSearchID.searchId}`);
          if (!tickets.ok && tickets.status !== 500) {
            dispatch(error());
          }
          const jsonTickets = await tickets.json();
          stop = jsonTickets.stop;
          const newJsonTickets = idForTickets(jsonTickets.tickets);
          dispatch({
            type: 'TICKET_LOAD',
            tickets: newJsonTickets,
          });
          if (!navigator.onLine) {
            dispatch(status());
          }
        } catch (e) {
          stop = false;
        }
      } while (!stop && navigator.onLine && (tickets.ok || tickets.status === 500));

      dispatch(loadingTickets());
    }
  };
}

export default ticketLoad;
