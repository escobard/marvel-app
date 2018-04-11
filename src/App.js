import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import styles from "./styles/global.scss"

import { fetchComics } from "./actions"

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./containers/home";

class App extends Component {

   componentDidMount() {
    // will fetch initial data
    // http://gateway.marvel.com/v1/public/comics?apikey=c88aa66a7664cb7a2d8ec8f416c3922e
    this.props.fetchComics()
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

export default connect(null, {fetchComics})(App);
