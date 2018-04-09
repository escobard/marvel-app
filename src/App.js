import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./containers/home";

class App extends Component {
   componentDidMount() {
      // will fetch initial data
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <Route exact path="/" component={Home} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
