import * as React from 'react';
import Card from '../Card';

class Result extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.fetchResults(this.props.questions.answers);
  }

  render(){
    return (<div>
      <h2>This is result!</h2>
      {this.props.questions.isFetching && "Loading..."}

      <div>Хочется чего-то другого? Попробуйте наш
        <a href="http://tours.tutu.ru" target="_blank">суперпоиск</a>.
      </div>

      <div>
        Отправить запрос на подбор тура нашим заботливым турменеджерам?</div>
      </div>);
    }
  }

  export default Result;
