<script setup lang='ts'>
import { useRouter } from 'vue-router';

const router = useRouter()
const toButton = () => {
    router.push('/button')
}
</script>
<template>
    <div>
        <div class="true_menu">
            <label for="通用组件" @click="toButton">
                Buttton按钮
            </label>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>