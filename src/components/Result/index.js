import * as React from 'react';
import HotelCard from '../HotelCard';
import Spinner from '../Spinner';
import {Link} from 'react-router';
import {getSiteLabels} from '../../utils';
import 'style!./style.css'

let labels = getSiteLabels();

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
      country={offer.country}
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

  <div className="or">
    ИЛИ
  </div>

  <div className="centered">
    <a className="btn btn-secondary" target="_blank" href="http://goo.gl/forms/LulmE0k7LeIpgGPm2">
    Оставьте заявку <br/> нашим заботливым турменеджерам!
    </a>
  </div>

  <div className="centered footer">
		<div>&copy; 2016 {labels.siteName}</div>
    <a target="_blank" href="http://goo.gl/forms/Wj3EwgKJSFhZ1zkm1">
      Обратная связь (напишите нам свое мнение)
    </a>
  </div>

  </div>;

  export default Result;
