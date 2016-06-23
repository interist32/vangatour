import * as React from 'react';
import {Link} from 'react-router';
import { push } from 'react-router-redux'

const Intro = (props) => <div>
  Привет, турист. Мы сейчас будем тебе помогать.
  <Link to="/q/1">Начнем!</Link>
</div>;

export default Intro;
