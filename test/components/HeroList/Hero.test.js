import React, { Component } from 'react'
import Hero from '../../../src/components/HeroList/Hero';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('Hero snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Hero /> )  
    })

    it('+++ render the Hero component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});