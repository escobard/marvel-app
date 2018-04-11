import React, { Component } from "react";
import { connect } from "react-redux";

class Hero extends Component {
  render() {
    return (
      <div>
        <h3>single hero view</h3>
      </div>
    );
  }
}

function mapStateToProps({marvel}){
	return{
		marvel
	}
}

export default connect(mapStateToProps)(Hero)