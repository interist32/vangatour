import * as React from 'react';
import {Link} from 'react-router';
import { push } from 'react-router-redux'
import 'style!./style.css'

const Intro = (props) => <div className="intro">
  <div className="title">Персональный тур за 7 шагов</div>
  <div className="subtitle">Ответьте на 7 простых вопросов и сразу получите подходящий тур</div>
  <Link className="btn btn-primary" to="/q/1">Вперёд к морю!</Link>
</div>;

export default Intro;
