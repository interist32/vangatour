export default function appState(state = {}, action) {
  console.log('appstate reducer');
  switch(action.type){
    case "NEXT_QUESTION":
    return state;
    case "PREVIOUS_QUESTION":
    return state;
    default:
    return state;
  }

  return state;
};
