import { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './alert';
declare const meta: Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof Alert>;
export declare const Default: Story;
export declare const Destructive: Story;
