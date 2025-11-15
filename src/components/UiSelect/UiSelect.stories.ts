// src/components/UiSelect/UiSelect.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiSelect from './UiSelect.vue';

const meta: Meta<typeof UiSelect> = {
  title: 'Components/UiSelect',
  component: UiSelect,
  argTypes: {
    modelValue: { control: 'text' },
    isDisabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    options: { control: 'object' },
  },
  render: (args) => ({
    components: { UiSelect },
    setup() {
      const value = ref(args.modelValue);
      return { value, args };
    },
    template: '<UiSelect v-bind="args" v-model="value" />',
  }),
};

export default meta;

type Story = StoryObj<typeof UiSelect>;

export const Default: Story = {
  args: {
    modelValue: '',
    options: ['Москва', 'СПб', 'Екатеринбург'],
    placeholder: 'Выберите город',
  },
};

export const Selected: Story = {
  args: {
    modelValue: 'СПб',
    options: ['Москва', 'СПб', 'Екатеринбург'],
  },
};

export const Disabled: Story = {
  args: {
    modelValue: '',
    options: ['Москва', 'СПб'],
    isDisabled: true,
  },
};