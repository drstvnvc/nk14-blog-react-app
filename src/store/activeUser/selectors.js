export function selectActiveUser(state) {
  console.log("Active user selector", state);
//   {
//       counter: 0,
//       activeUser: null
//   }
  return state.activeUser;
}
