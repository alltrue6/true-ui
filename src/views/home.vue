<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const routeList = ref([
  {
    title: "Button按钮",
    label: "/button",
  },
  {
    title: "Border边框",
    label: "/border",
  },
  {
    title: "Link链接",
    label: "/link",
  },
]);
const toButton = (item: Router) => {
  router.push(item.label);
};
</script>
<template>
  <div class="true_menu">
    <label for="通用组件" v-for="item in routeList" @click="toButton(item)">
      {{ item.title }}
    </label>
  </div>
</template>

<style scoped lang="scss"></style>
