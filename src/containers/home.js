import React, { Component } from "react";
import { connect } from "react-redux";

import HeroList from "../components/HeroList"

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Enter the name of your favorite infinity war hero!</h2>
        <HeroList heroes={ this.props.marvel }/>
      </div>
    );
  }
}

function mapStateToProps({marvel}){
	return{
		marvel
	}
}

export default connect(mapStateToProps)(Home)