import { Meta, StoryObj } from '@storybook/react-vite';
import { Field } from './field';
declare const meta: Meta<typeof Field>;
export default meta;
type Story = StoryObj<typeof Field>;
export declare const Default: Story;
export declare const WithError: Story;
export declare const Horizontal: Story;
export declare const FieldGroupExample: Story;
