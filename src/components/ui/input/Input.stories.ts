import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
    component: Input,
    tags: ['autodocs'],
    title: 'Components/Input',
} as Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}
