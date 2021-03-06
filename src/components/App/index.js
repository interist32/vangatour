import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actionCreators';

import Main from '../Main';

function mapStateToProps(state){
  return {
    questions: state.questions,
    appState: state.appState
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
