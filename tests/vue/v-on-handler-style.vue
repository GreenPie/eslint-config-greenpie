<!-- eslint-disable vue/no-bare-strings-in-template -->
<!-- eslint-disable vue/html-button-has-type -->
<template>
  <div>
    <button @click="handleClick">
      Click
    </button>

    <button
      v-for="item in items"
      :key="item"
      @click="handleClick(item)"
    >
      Click
    </button>
  </div>
</template>

<!-- eslint-disable vue/block-lang -->
<script setup>
  const items = [1, 2, 3];

  function handleClick() {
    console.log('click');
  }
</script>
