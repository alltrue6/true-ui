<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const toButton = () => {
     router.push('/button')
}
</script>
<template>
    <div class="true_menu">
        <label for="通用组件" @click="toButton">
            Buttton按钮
        </label>
    </div>
</template>
<style scope lang='scss'>

</style>