import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../src/App.css";
import { simpleAction } from './actions/simpleAction'
import Footer from './components/Footer/Footer';
import Login from './components/login/Login';
import Register from './components/login/Register';

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
        {/* <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
         */}

         <Login/>
        <Register/>
        <Footer/>
      </div  >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
