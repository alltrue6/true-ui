<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';

interface Router {
    title: String
    label?: any
}

const router = useRouter()

const routeList = ref([
    {
        title: 'Button按钮',
        label: '/button'
    }, {
        title: 'Border边框',
        label: '/border'
    }
])

const toButton = (item: Router) => {
    router.push(item.label)
}
</script>
<template>
    <div class="true_menu">
        <label for="通用组件" v-for="(item, index) in routeList" @click="toButton(item)">
            {{ item.title }}
        </label>
    </div>
</template>

<style scoped lang="scss">

</style>
