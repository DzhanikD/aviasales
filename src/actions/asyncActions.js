import { error, loadingTickets } from './actions';

function idForTickets(tickets) {
  const newTickets = tickets.map((el) => ({ ...el, id: crypto.randomUUID() }));
  return newTickets;
}

function ticketLoad() {
  return async (dispatch) => {
    let stop;
    let jsonSearchID = '';

    try {
      const searchID = await fetch('https://aviasales-test-api.kata.academy/search');
      jsonSearchID = await searchID.json();
    } catch (e) {
      dispatch(error());
    }

    if (jsonSearchID.length !== 0) {
      do {
        try {
          const tickets = await fetch(
            `https://aviasales-test-api.kata.academy/tickets?searchId=${jsonSearchID.searchId}`
          );
          const jsonTickets = await tickets.json();
          stop = jsonTickets.stop;
          const newJsonTickets = idForTickets(jsonTickets.tickets);
          dispatch({
            type: 'TICKET_LOAD',
            tickets: newJsonTickets,
          });
        } catch (e) {
          stop = false;
        }
      } while (!stop);

      dispatch(loadingTickets());
    }
  };
}

export default ticketLoad;
