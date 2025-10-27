<template>
  <button :class="$style.button" :data-layout="props.layout" :disabled="props.isDisabled" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 16px 32px;
  font-size: 1rem;
  line-height: 1.5;
  color: #ffffff;
  background: #ff69b4; 
  border: none;
  border-radius: 16px;
  cursor: pointer; 
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background: #ff5ca8; 
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed; 
  }

  &[data-layout='secondary'] {
    color: #ff69b4;
    background: transparent;
    border: 2px solid #ff69b4;

    &:hover:not(:disabled) {
      background: rgba(255, 105, 180, 0.1);
    }
  }
}
</style>