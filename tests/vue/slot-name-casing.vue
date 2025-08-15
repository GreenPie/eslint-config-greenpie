<!-- This test demonstrates the slot-name-casing rule behavior -->
<template>
  <!-- These should be camelCase according to the fix -->
  <slot name="woofBark" />
  <slot name="mySpecialSlot" />

  <!-- These should cause errors with camelCase rule -->
  <!-- <slot name="woof-bark" /> -->
  <!-- <slot name="my-special-slot" /> -->
</template>

<script lang="ts" setup>
  interface Slots {
    readonly woofBark: unknown;
    readonly mySpecialSlot: unknown;
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  defineSlots<Slots>();
</script>
