import React, { Component } from "react";
import { connect } from "react-redux";

import HeroList from "../components/HeroList"

class Home extends Component {
  render() {
    return (
      <div>
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