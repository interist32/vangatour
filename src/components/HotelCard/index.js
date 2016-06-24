import * as React from 'react';
import 'style!./style.css'
import {Countries} from '../../constants'

const HotelCard = (props) => {
  const rating = parseFloat(props.rating.replace(',', '.'));
  const label = rating >= 7 ? 'label label-pill label-success' : 'label label-pill label-warning';
  return (
    <figure className="b-hotel-card">
        <div className="b-hotel-card_title">Отель {props.title} ({Countries[props.country]})</div>
        <div className="b-hotel-card_rating">
          Рейтинг: <span className={label}>{rating.toFixed(1)}</span>
        </div>
        <div className="b-hotel-card_price">Цена: ~{props.price} руб./чел</div>
        <div className="b-hotel-card_price">Продолжительность: 7 ночей</div>
      <figcaption className="b-hotel-card_button">
        <a target="_blank" className="btn btn-primary" href={`http://tours.tutu.ru/hotel/${props.id}/?utm_source=vangatour`}>Фото, отзывы, описание &rarr;</a>
      </figcaption>
    </figure>
  );
}


export default HotelCard;
