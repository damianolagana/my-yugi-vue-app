<script >
import AppCard from './AppCard.vue';
import AppSelect from './AppSelect.vue';

export default {
  name: "AppCardContainer",

  components: {
    AppCard,
    AppSelect
  },

}
</script>

<template>
  <AppSelect />
  <div id="cardContainer">
    <div>
      <h3>found 39 cards</h3>
      <div class="flex flexWrap gap4">
        <AppCard />

      </div>

    </div>
  </div>
</template>

<style scoped>
#cardContainer {
  background-color: white;
  margin-top: 10px;
  max-width: 1200px;
  margin: auto;

}

#cardContainer>div {
  padding: 2rem;
}

.gap4 {
  gap: 4%;
}

h3 {
  padding: 1rem;
  background-color: black;
  color: white;
}
</style>
