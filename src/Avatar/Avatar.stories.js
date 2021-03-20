import React from 'react'

import { Avatar } from './Avatar'

export default {
  title: 'Example/Avatar',
  component: Avatar,
  argTypes: {
    user: { control: 'object' }
  }
}

const Template = (args) => <Avatar {...args} />

export const Example = Template.bind({})
Example.args = {
   user: {
        name: "test",
        surname: "PropTypes.string",
        email: "PropTypes.email",
        password: "PropTypes.string",
    }
}
