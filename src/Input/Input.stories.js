import React from 'react'

import { Input } from './Input'

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    name: { control: 'text' },
    type: { control: 'text' },
    placeholder: { control: 'text' }
  }
}

const Template = (args) => <Input {...args} />

export const Medium = Template.bind({})
Medium.args = {
    size: 'medium'
}

export const Large = Template.bind({})
Large.args = {
    size: 'large'
}