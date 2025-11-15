import type { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue';

const meta: Meta<typeof UiButton> = {
  title: 'Components/UiButton',
  component: UiButton,
  argTypes: {
    layout: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    isDisabled: { control: 'boolean' },
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit'],
    },
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Кнопка</UiButton>',
  }),
};

export default meta;

type Story = StoryObj<typeof UiButton>;

export const Primary: Story = {
  args: { layout: 'primary' },
};

export const Secondary: Story = {
  args: { layout: 'secondary' },
};

export const DisabledPrimary: Story = {
  args: { layout: 'primary', isDisabled: true },
};

export const DisabledSecondary: Story = {
  args: { layout: 'secondary', isDisabled: true },
};

export const SubmitType: Story = {
  args: { layout: 'primary', type: 'submit' },
};