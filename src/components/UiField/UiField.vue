<template>
  <div class="ui-field">
    <label v-if="props.label" class="ui-field__label">
      {{ props.label }}
    </label>
    <div class="ui-field__control">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label?: string;
}

const props = defineProps<IProps>();
</script>

<style lang="scss">
.ui-field {
  display: flex;
  flex-direction: column;
  gap: 6px;

  &__label {
    font-size: 14px;
    font-weight: 500;
    color: var(--color-gray-600);
  }
}
</style>