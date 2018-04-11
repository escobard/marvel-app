import React, { Component } from "react";
import { connect } from "react-redux";

import HeroDetail from "../components/HeroDetail"

class Hero extends Component {
  render() {
    let { marvel } = this.props.marvel ? this.props : [{loading: true}]
    
    console.log('HERO NAME', this.props.match.params.hero)

    // should refactor into helper component
    let hero,
    findHero = marvel.map((fhero, index) =>{
      if (fhero.loading) {
        return {}
      }
      if (fhero.name === this.props.match.params.hero) {
        console.log('MATCH', fhero)
        hero = fhero
        return hero
      }

    })

    return (
      <div>
        <h3>single hero view</h3>
        <HeroDetail hero={hero}/>
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