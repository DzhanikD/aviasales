const initialState = {
  all: false,
  nonStop: [false, 0],
  oneTransfer: [false, 1],
  twoTransfers: [false, 2],
  threeTransfers: [false, 3],
};

const checkboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL': {
      if (action.payload) {
        return {
          all: true,
          nonStop: [true, 0],
          oneTransfer: [true, 1],
          twoTransfers: [true, 2],
          threeTransfers: [true, 3],
        };
      }
      return {
        all: false,
        nonStop: [false, 0],
        oneTransfer: [false, 1],
        twoTransfers: [false, 2],
        threeTransfers: [false, 3],
      };
    }

    case 'NON_STOP': {
      if (action.payload) {
        if (state.oneTransfer[0] && state.twoTransfers[0] && state.threeTransfers[0]) {
          return {
            ...state,
            nonStop: [true, 0],
            all: true,
          };
        }
        return {
          ...state,
          nonStop: [true, 0],
        };
      }

      return {
        ...state,
        all: false,
        nonStop: [false, 0],
      };
    }

    case 'ONE_TRANSFER': {
      if (action.payload) {
        if (state.nonStop[0] && state.twoTransfers[0] && state.threeTransfers[0]) {
          return {
            ...state,
            oneTransfer: [true, 1],
            all: true,
          };
        }
        return {
          ...state,
          oneTransfer: [true, 1],
        };
      }
      return {
        ...state,
        all: false,
        oneTransfer: [false, 1],
      };
    }

    case 'TWO_TRANSFERS': {
      if (action.payload) {
        if (state.oneTransfer[0] && state.nonStop[0] && state.threeTransfers[0]) {
          return {
            ...state,
            twoTransfers: [true, 2],
            all: true,
          };
        }
        return {
          ...state,
          twoTransfers: [true, 2],
        };
      }
      return {
        ...state,
        all: false,
        twoTransfers: [false, 2],
      };
    }

    case 'THREE_TRANSFERS': {
      if (action.payload) {
        if (state.oneTransfer[0] && state.twoTransfers[0] && state.nonStop[0]) {
          return {
            ...state,
            threeTransfers: [true, 3],
            all: true,
          };
        }
        return {
          ...state,
          threeTransfers: [true, 3],
        };
      }
      return {
        ...state,
        all: false,
        threeTransfers: [false, 3],
      };
    }

    default:
      return state;
  }
};

export default checkboxReducer;
