<script >
import AppCard from './AppCard.vue';

export default {
  components: {
    AppCard
  },
  name: "AppCardContainer"

}
</script>

<template>
  <div id="cardContainer">
    <div>
      <h3>found 39 cards</h3>
      <div class="flex">
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>

    </div>
  </div>
</template>

<style scoped>
#cardContainer {
  background-color: white;
  margin-top: 10px;
  width: 1200px;
  margin: auto;
  height: 80vh;
}

#cardContainer>div {
  padding: 2rem;
}

h3 {
  padding: 1rem;
  background-color: black;
  color: white;
}
</style>
