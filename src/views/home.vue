<script setup lang='ts'>
import { ref, reactive, shallowRef } from 'vue';
import { useRouter } from 'vue-router';
import trueButton from "../components/trueButton.vue";
import trueButton2 from "../components/trueButton2.vue";
const router = useRouter()
const toButton = () => {
    router.push('/button')
}
// const toButton = () => {
//     activeComponent.value = trueButton
// };
// const activeComponent = shallowRef(trueButton2)
</script>
<template>
    <div>
        <div class="true_menu">
            <label for="通用组件" @click="toButton">
                Buttton按钮
            </label>
        </div>
        <!-- <transition name="fade" mode="out-in">
            <component :is="activeComponent"></component>
        </transition> -->
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>