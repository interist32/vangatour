export function getSiteLabels(){
  let retVal = {
    titleText: 'подбор отеля для пляжного отдыха',
  };
  switch(location.host.toLowerCase()){
    case "vangatour.ru":
      retVal['siteName'] = 'Vanga Tour';
      break;
    default:
      retVal['siteName'] = 'Ask2Go';
  }

  return retVal;
}
