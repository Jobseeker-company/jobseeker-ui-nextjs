import { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';
declare const meta: Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof Textarea>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const WithLabel: Story;
