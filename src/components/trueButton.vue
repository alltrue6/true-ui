<script setup lang='ts'>
import { ref, reactive } from 'vue';

</script>
<template>
    <transition>
        <div class="trueButton">
            <button class="Default">Default</button>
            <button class="Primary">Primary</button>
            <button class="Success">Success</button>
            <button class="Info">Info</button>
            <button class="Warning">Warning</button>
            <button class="Danger">Danger</button>
        </div>
    </transition>
</template>
<style scope lang='scss'>
.trueButton {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: .1s;
    user-select: none;
    vertical-align: middle;
    padding: 8px 15px;
    .Default {
        border: 1px
    }
}
</style>