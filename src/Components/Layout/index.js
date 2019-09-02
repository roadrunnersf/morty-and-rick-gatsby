import React from 'react'
import {Helmet} from 'react-helmet'

import NavigationBar from './NavigationBar.js'

const Layout = ({children, helmet}) => (
	<>
		<Helmet title={helmet} />

		<NavigationBar />

		<main>{children}</main>
	</>
)

export default Layout
