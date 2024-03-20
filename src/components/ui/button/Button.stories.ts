import type { Meta, StoryObj } from '@storybook/react'

import {Button} from './Button'

const meta = {
    component: Button,
    tags: ['autodocs'],
    title: 'Components/Button',
} as Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}
