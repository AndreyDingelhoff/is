<!-- src/components/UiButton/UiButton.vue -->
<template>
  <button
    :type="props.type"
    :disabled="props.isDisabled"
    :data-layout="props.layout"
    class="ui-button"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  isDisabled?: boolean;
  type?: 'submit' | 'button';
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  isDisabled: false,
  type: 'button',
});
</script>

<style lang="scss">
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 500;
  border: var(--border-width) solid transparent;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: background-color var(--transition-fast), opacity 0.1s;
  background-color: var(--color-primary);
  color: var(--color-white);

  &[data-layout='secondary'] {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 1;
    &[data-layout='primary'] {
      background-color: var(--color-primary-disabled);
      color: var(--color-gray-500);
    }
    &[data-layout='secondary'] {
      background-color: var(--color-secondary-disabled);
      color: var(--color-gray-600);
    }
  }

  &:not(:disabled):hover {
    &[data-layout='primary'] {
      background-color: var(--color-primary-hover);
    }
    &[data-layout='secondary'] {
      background-color: var(--color-secondary-hover);
    }
  }
}
</style>