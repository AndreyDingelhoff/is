<!-- src/components/UiInput/UiInput.vue -->
<template>
  <input
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :disabled="props.isDisabled"
    @input="onInput"
    class="ui-input"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmit>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<style lang="scss">
.ui-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: var(--border-width) solid var(--color-gray-400);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  color: var(--color-gray-700);
  transition: border-color var(--transition-fast), box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(0, 108, 187, 0.2);
  }

  &:disabled {
    background-color: var(--color-gray-200);
    color: var(--color-gray-500);
    cursor: not-allowed;
  }
}
</style>