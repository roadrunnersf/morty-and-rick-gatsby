import React from 'react'
import Enzyme, {shallow, adapter} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import HomeBox from './HomeBox'
import {Heading1, Lead} from '../elements/text'
import {Link} from 'gatsby'

describe('<HomeBox />', () => {
	it('should have one heading', () => {
		const wrapper = shallow(<HomeBox />)
		expect(wrapper.find(Heading1).length).toBe(1)
	})
	it('should have two links', () => {
		const wrapper = shallow(<HomeBox />)
		expect(wrapper.find(Link).length).toBe(2)
	})
})
