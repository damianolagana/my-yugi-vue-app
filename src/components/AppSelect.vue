<script >
import { store } from '../data/store';

export default {
    name: "AppSelect",
    data() {
        return {
            store


        }
    }
}
</script>

<template>
    <select class="select">
        <option v-for="option in store.selectOptions">{{ option }}</option>
    </select>
</template>

<style lang="scss" scoped>
.select {
    width: 100px;
    padding: 2px;
    margin-left: 20px;
}
</style>
