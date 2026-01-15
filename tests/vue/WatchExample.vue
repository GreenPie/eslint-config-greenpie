<template>
  <div />
</template>

<script lang="ts" setup>
  import { ref, watch } from 'vue';

  const count = ref(0);

  watch(() => count.value, () => {
    // No-op
  });
</script>
