export function cheapest() {
  return {
    type: 'CHEAPEST_TICKETS',
  };
}

export function fastest() {
  return {
    type: 'FASTEST_TICKETS',
  };
}

export function optimal() {
  return {
    type: 'OPTIMAL',
  };
}

export function checkboxAll(check) {
  return {
    type: 'ALL',
    payload: check,
  };
}

export function checkboxNonStop(check) {
  return {
    type: 'NON_STOP',
    payload: check,
  };
}

export function checkboxOneTransfer(check) {
  return {
    type: 'ONE_TRANSFER',
    payload: check,
  };
}

export function checkboxTwoTransfers(check) {
  return {
    type: 'TWO_TRANSFERS',
    payload: check,
  };
}

export function checkboxThreeTransfers(check) {
  return {
    type: 'THREE_TRANSFERS',
    payload: check,
  };
}

export function showMoreTickets() {
  return {
    type: 'SHOW_MORE_TICKETS',
  };
}

export function error() {
  return {
    type: 'ERROR',
  };
}

export function loadingTickets() {
  return {
    type: 'LOADING_TICKETS',
  };
}
