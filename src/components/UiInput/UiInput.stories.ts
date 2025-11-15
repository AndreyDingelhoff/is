import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiInput from './UiInput.vue';

const meta: Meta<typeof UiInput> = {
  title: 'Components/UiInput',
  component: UiInput,
  argTypes: {
    modelValue: { control: 'text' },
    isDisabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  render: (args) => ({
    components: { UiInput },
    setup() {
      const value = ref(args.modelValue);
      return { value, args };
    },
    template: '<UiInput v-bind="args" v-model="value" />',
  }),
};

export default meta;

type Story = StoryObj<typeof UiInput>;

export const Default: Story = {
  args: { modelValue: '', placeholder: 'Введите текст' },
};

export const Filled: Story = {
  args: { modelValue: 'Анна', placeholder: 'Имя' },
};

export const Disabled: Story = {
  args: { modelValue: 'Только для чтения', isDisabled: true },
};