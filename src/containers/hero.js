import React, { Component } from "react";
import { connect } from "react-redux";

import HeroDetail from "../components/HeroDetail";

class Hero extends Component {
  render() {
    let { marvel } = this.props.marvel ? this.props : { loading: true };

    // should refactor into helper component
    let hero = false,
      findHero = marvel.map((fhero, index) => {
        if (fhero.loading) {
          return null;
        }
        if (fhero.name === this.props.match.params.hero) {
          hero = fhero;
          return hero;
        }
      });

    return (
      <div>
        <h3>{hero ? null : "Loading hero..."}</h3>
        <HeroDetail hero={hero} />
      </div>
    );
  }
}

function mapStateToProps({ marvel }) {
  return {
    marvel
  };
}

export default connect(mapStateToProps)(Hero);