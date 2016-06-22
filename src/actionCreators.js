export function start(){
  return {
    type: 'START_QUESTION'
  }
};

export function goNext(){
  return {
    type: 'NEXT_QUESTION'
  }
};

export function goBack(){
  return {
    type: 'PREVIOUS_QUESTION'
  }
};
