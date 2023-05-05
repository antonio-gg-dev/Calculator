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
      type: String as PropType<'number' | 'operation' | 'clear'>
    }
  }
})
</script>

<style scoped lang="scss">
.button {
  &__button {
    @apply block aspect-square rounded-full text-4xl transition-all shadow-out;

    &--number {
      @apply bg-base text-base-alt;

      &:hover, &:focus {
        @apply bg-base-highlight text-base-alt-highlight;
      }
    }

    &--operation {
      @apply bg-primary text-primary-alt;

      &:hover, &:focus {
        @apply bg-primary-highlight text-primary-alt-highlight;
      }
    }

    &--clear {
      @apply bg-danger text-danger-alt;

      &:hover, &:focus {
        @apply bg-danger-highlight text-danger-alt-highlight;
      }
    }

    &:active {
      @apply shadow-in;
    }
  }
}
</style>
