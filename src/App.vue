<script >
import AppHeader from './components/AppHeader.vue';
import AppCardContainer from './components/AppCardContainer.vue';




export default {
  components: {
    AppHeader,
    AppCardContainer,


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
