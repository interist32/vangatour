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
