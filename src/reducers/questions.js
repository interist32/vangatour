export default function questions(state = [], action) {
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
