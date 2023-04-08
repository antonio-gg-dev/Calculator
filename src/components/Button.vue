<template>
  <button :class="[
    'button__button',
    `button__button--${variant}`
  ]">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    variant: {
      required: true,
      type: String as PropType<'number' | 'operation'>
    }
  }
})
</script>

<style scoped lang="scss">
.button {
  &__button {
    @apply block aspect-square w-20 rounded-full text-4xl transition-colors shadow-button;

    &--number {
      @apply bg-base;

      &:hover, &:focus {
        @apply bg-base-highlight;
      }
    }

    &--operation {
      @apply bg-primary;

      &:hover, &:focus {
        @apply bg-primary-highlight;
      }
    }

    &:active {
      @apply shadow-inset-button;
    }
  }
}
</style>
