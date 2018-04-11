import React, { Component } from "react";
import { connect } from "react-redux";

class Hero extends Component {
  render() {
    let { marvel } = this.props.marvel ? this.props : [{loading: true}]
    console.log('HERO', this.props)
    console.log('HERO NAME', this.props.match.params.hero)

    // should refactor into helper component
    let hero = marvel.map((hero, index) =>{
      if (hero.loading) {
        return(
            <p>Loading...</p>
          )
      }
      if (hero.name === this.props.match.params.hero) {
        console.log('MATCH', hero)
        return hero
      }

    })
    
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