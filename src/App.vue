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
      urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
      store
    }
  },
  mounted() {
    axios.get(this.urlAPI).then((answer) => {
      console.log(answer.data.results)
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

<style scoped></style>
