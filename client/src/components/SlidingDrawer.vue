<script setup lang="ts">

</script>

<template>
    <div class="sliding-drawer">
        <slot></slot>
    </div>
</template>

<style scoped>
.sliding-drawer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 70%;
    max-width: 300px;
    background-color: white;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.26);
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
}

.sliding-drawer.open .sliding-drawer:hover{
    transform: translateX(0);
}
</style>