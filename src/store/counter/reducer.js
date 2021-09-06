const counterInitialState = 0;

function counterReducer(state = counterInitialState, action) {
  console.log(
    "counter reducer obradjuje akciju: ",
    action,
    "uz trenutno stanje",
    state
  );
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
}

export default counterReducer;
