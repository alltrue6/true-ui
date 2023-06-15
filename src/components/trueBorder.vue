<script setup lang='ts'>
import { ref, reactive } from 'vue';

</script>
<template>
    <div class="flex flex-wrap mt-10">
        <div class="trueBorder radius-min"></div>
        <div class="trueBorder radius-max"></div>
        <div class="trueBorder round"></div>
    </div>

    <div class="flex flex-wrap mt-10">
        <div class="trueBorder radius-min Shadow--Basic"></div>
        <div class="trueBorder radius-min Shadow--Light"></div>
        <div class="trueBorder radius-min Shadow--Lighter"></div>
        <div class="trueBorder radius-min Shadow--Dark"></div>
    </div>

</template>
<style scope lang='scss'></style>