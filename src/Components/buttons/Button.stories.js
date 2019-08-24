import React from 'react'
import {storiesOf} from '@storybook/react'

import Button from './'

storiesOf('Button/', module).add('Button', () => <Button>Characters</Button>)

storiesOf('Button/', module).add('Button animate', () => (
	<Button animate>Characters</Button>
))
