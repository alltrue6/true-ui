<script setup lang="ts" name="">
import { inject } from 'vue';
const props = defineProps()
const emit = defineEmits()
const count = inject('')
</script>

<template>
  <div class="content">
    <div class="flex flex-wrap mt-10">
      <a href="#" class="trueLink">Default</a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>