import React, { Component } from 'react'
import HeroList from '../../../src/components/HeroList';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('HeroList snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<HeroList /> )  
    })

    it('+++ render the HeroList component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});