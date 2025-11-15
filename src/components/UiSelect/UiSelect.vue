<!-- src/components/UiSelect/UiSelect.vue -->
<template>
  <div class="ui-select-wrapper">
    <select
      :value="props.modelValue"
      :disabled="props.isDisabled"
      @change="onChange"
      class="ui-select"
    >
      <option value="" disabled>{{ props.placeholder || 'Выберите...' }}</option>
      <option
        v-for="option in props.options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
  options: string[];
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmit>();

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
}
</script>

<style lang="scss">
.ui-select-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.ui-select {
  width: 100%;
  padding: 12px 36px 12px 16px;
  font-size: 16px;
  border: var(--border-width) solid var(--color-gray-400);
  border-radius: var(--border-radius-md);
  background-color: var(--color-white);
  color: var(--color-gray-700);
  appearance: none;

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

  // стрелка
  &::after {
    content: '';
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--color-gray-600);
  }
}
</style>