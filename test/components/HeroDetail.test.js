import React, { Component } from 'react'
import HeroDetail from '../../src/components/HeroDetail';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('HeroDetail snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<HeroDetail /> )  
    })

    it('+++ render the HeroDetail component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});