import React from 'react'

import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    type: { control: 'type' },
    name: { control: 'name' },
    placeholder: { control: 'placeholder' }
  }
}

const Template = (args) => <Button {...args} />

export const Featured = Template.bind({})
Featured.args = {
  featured: true,
  value: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  value: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  value: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  value: 'Button'
}
