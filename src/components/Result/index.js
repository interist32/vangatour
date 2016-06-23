import * as React from 'react';
import HotelCard from '../HotelCard';
import Spinner from '../Spinner';
import {Link} from 'react-router';
import 'style!./style.css'

class Result extends React.Component {
  constructor(){
    super();
    this.state = {
      showAlternates: false
    };
  }

  componentDidMount(){
    this.props.fetchResults(this.props.questions.answers);
  }

  render(){
    const offers = this.props.questions.results.map(offer =>
      <HotelCard
      key={offer.id}
      id={offer.id}
      title={offer.title}
      rating={offer.rating}
      price={offer.price}
      />
    );

    const isFound = !this.props.questions.isFetching;

    if(isFound){
      setTimeout(()=>{
        this.setState({
          showAlternates: true
        });
      }, 5000);
    }

    return (<div>
      <div className="title">Ура! Вы восхитительны!</div>

      {!isFound && <Spinner/>}
      {isFound && <div className="subtitle">
      Итак, вот какие отели идеально подходят под указанные Вами параметры
      </div>}
      {isFound && <div className="b-result">{offers}</div>}
      <hr/>

      {this.state.showAlternates && <Alternates/>}

      </div>);
    }
  }

  const Alternates = () => <div>
  <div className="subtitle centered">
  <p>Мы промахнулись? Эти отели Вам не подошли? Что ж, это странно. Тогда:</p>
  <a className="btn btn-success" href="http://tours.tutu.ru?utm_source=vangatour" target="_blank">Попробуйте наш суперпоиск!</a>
  </div>

  <div className="or">
    ИЛИ
  </div>

  <div className="subtitle centered">
    <Link to="/q/1" className="btn btn-secondary">Попробуйте еще раз!</Link>
  </div>

  </div>;

  export default Result;