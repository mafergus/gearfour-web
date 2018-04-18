export function customersReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_CUSTOMER":
      debugger;
      state[action.id] = action.customer;
      return state;
    default:
      return state;
  }
}
