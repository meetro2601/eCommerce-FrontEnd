import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction'
import Header from './components/Header';
import './App.scss'
import './Helper.scss'

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})


const mapStateToProps = state => ({
  ...state
})


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
