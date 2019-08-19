import React from 'react'
import {storiesOf} from '@storybook/react'

import {Link} from 'gatsby'
import {Jumbotron, Button, Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

import HomeBox from './HomeBox'

storiesOf('Home/', module).add('HomeBox', () => <HomeBox />)
