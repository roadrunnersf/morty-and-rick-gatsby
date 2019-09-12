import React from 'react'
import {Helmet} from 'react-helmet'

import Nav from './Navigation'

const Layout = ({children, helmet}) => (
	<>
		<Helmet title={helmet} />
		<Nav />
		<main>{children}</main>
	</>
)

export default Layout
