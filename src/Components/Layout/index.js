import React from 'react'
import {Helmet} from 'react-helmet'
import {Grid} from 'react-styled-flexboxgrid'

import Global from './Global'
import Nav from './Navigation'

const Layout = ({children, helmet}) => (
	<>
		<Global />
		<Helmet title={helmet} />
		<Nav />
		<Grid>{children}</Grid>
	</>
)

export default Layout
