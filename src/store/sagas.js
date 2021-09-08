import * as activeUserSagas from "./activeUser/sagas";
// import * as counterSagas from "counter/sagas";

const sagas = {
  ...activeUserSagas,
//   ...counterSagas,
};

export default sagas;
