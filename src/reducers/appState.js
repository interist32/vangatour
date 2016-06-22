export default function appState(state = {}, action) {
  switch(action.type){
    case "START":
    return state;
    case "NEXT_QUESTION":
    return state;
    case "PREVIOUS_QUESTION":
    return state;
    default:
    return state;
  }
  
  return state;
};
