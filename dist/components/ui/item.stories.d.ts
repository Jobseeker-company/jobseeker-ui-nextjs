import { Meta, StoryObj } from '@storybook/react-vite';
import { Item } from './item';
declare const meta: Meta<typeof Item>;
export default meta;
type Story = StoryObj<typeof Item>;
export declare const Default: Story;
export declare const WithImage: Story;
