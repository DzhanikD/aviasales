const initialState = {
  activeButton: 'cheapest',
  tickets: [],
  loaderProgress: 0,
  spinner: true,
  visibleTickets: 5,
  error: false,
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKET_LOAD':
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
        spinner: false,
        loaderProgress: state.loaderProgress + 3,
      };

    case 'CHEAPEST_TICKETS': {
      return {
        ...state,
        activeButton: 'cheapest',
      };
    }

    case 'FASTEST_TICKETS': {
      return {
        ...state,
        activeButton: 'fastest',
      };
    }

    case 'OPTIMAL': {
      return {
        ...state,
        activeButton: 'optimal',
      };
    }

    case 'SHOW_MORE_TICKETS': {
      return {
        ...state,
        visibleTickets: state.visibleTickets + 5,
      };
    }

    case 'ERROR': {
      return {
        ...state,
        error: true,
        spinner: false,
      };
    }

    case 'LOADING_TICKETS': {
      return {
        ...state,
        loaderProgress: 100,
      };
    }

    default:
      return state;
  }
};

export default ticketsReducer;
