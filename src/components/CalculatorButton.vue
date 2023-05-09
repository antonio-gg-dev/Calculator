<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="[
      'calculator-button__button',
      `calculator-button__button--${variant}`
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    href: {
      default: undefined,
      type: String as PropType<string>
    },
    variant: {
      required: true,
      type: String as PropType<'number' | 'operation' | 'clear'>
    }
  }
})
</script>

<style scoped lang="scss">
.calculator-button {
  &__button {
    @apply grid aspect-square place-items-center rounded-full text-4xl transition-all shadow-out;

    // theme nata
    @apply nata:rounded-2xl;
    @screen sm {
      @apply nata:aspect-video;
    }

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
