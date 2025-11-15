// src/components/UiField/UiField.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import UiField from './UiField.vue';
import UiInput from '../UiInput/UiInput.vue';
import UiSelect from '../UiSelect/UiSelect.vue';

const meta: Meta<typeof UiField> = {
  title: 'Components/UiField',
  component: UiField,
  argTypes: {
    label: { control: 'text' },
  },
  render: (args) => ({
    components: { UiField, UiInput, UiSelect },
    setup() {
      return { args };
    },
    template: `
      <UiField v-bind="args">
        <UiInput placeholder="Текстовое поле" />
      </UiField>
    `,
  }),
};

export default meta;

type Story = StoryObj<typeof UiField>;

export const WithInput: Story = {
  args: { label: 'Имя пользователя' },
};

export const WithSelect: Story = {
  render: (args) => ({
    components: { UiField, UiSelect },
    setup() {
      return { args };
    },
    template: `
      <UiField v-bind="args">
        <UiSelect :options="['Москва', 'СПб', 'Екатеринбург']" />
      </UiField>
    `,
  }),
  args: { label: 'Город' },
};