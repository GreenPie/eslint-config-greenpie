<template>{{ point.x }}</template>

<script setup lang="ts">
  class Point {
    public x = 1;
  }

  const point: Point = { x: 1 };

  Promise.resolve(42);
  await 42;
</script>
