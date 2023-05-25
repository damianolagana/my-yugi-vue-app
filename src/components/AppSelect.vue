<script >
import { store } from '../data/store';
import axios from 'axios';


export default {
    name: "AppSelect",
    data() {
        return {
            endpointAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
            store,
            chosenOption: "",


        }
    },
    methods: {
        getNewData() {



        }
    },
    mounted() {
        axios.get(this.endpointAPI).then(risposta => {
            console.log(risposta.data)
            console.log(risposta.data.archetype_name)
            this.store.selectOptions = risposta.data
            console.log("opzioni: ", this.store.selectOptions)

        })

    }
}
</script>

<template>
    <select @change="getNewData()" v-model="chosenOption" class="select">
        <option v-for="option in store.selectOptions">{{ option.archetype_name }}</option>
    </select>
</template>

<style lang="scss" scoped>
.select {
    width: 100px;
    padding: 2px;
    margin-left: 20px;
}
</style>
