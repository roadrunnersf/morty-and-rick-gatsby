import React from 'react'
import Enzyme, {shallow, adapter} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import {LayoutContent} from './'
import {Helmet} from 'react-helmet'
import Global from './Global'
import Nav from './Navigation'

describe('<LayoutContent />', () => {
	const wrapper = shallow(
		<LayoutContent size={1200} helmet={'some helmet text'} />
	)

	it('should display helmet', () => {
		expect(wrapper.find(Helmet).length).toBe(1)
	})
	it('should display Global style component', () => {
		expect(wrapper.find(Global).length).toBe(1)
	})
	it('should display Nav', () => {
		expect(wrapper.find(Nav).length).toBe(1)
	})
})
