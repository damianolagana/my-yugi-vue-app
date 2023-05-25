<script >
import AppHeader from './components/AppHeader.vue';
import AppCardContainer from './components/AppCardContainer.vue';
import { store } from './data/store';
import axios from 'axios';




export default {
  components: {
    AppHeader,
    AppCardContainer,


  },
  data() {
    return {
      urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
      store
    }
  },
  mounted() {


    axios.get(this.urlAPI).then(answer => {

      this.store.characters = answer.data.data

    })



  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppCardContainer />

  </main>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>

