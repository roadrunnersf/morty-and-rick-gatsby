import React from 'react'
import {Helmet} from 'react-helmet'

import Nav from './Nav'

const Layout = ({children, helmet}) => (
	<>
		<Helmet title={helmet} />
		<Nav />
		<main>{children}</main>
	</>
)

export default Layout
