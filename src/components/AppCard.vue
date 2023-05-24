<script >
import { store } from '../data/store';

export default {
  name: "AppCard",
  data() {
    return {
      store

    }
  }
}
</script>

<template>
  <div v-for="(character, i) in store.characters" class="card">
    <div>
      <img :src="character.card_images[0].image_url" alt="">
    </div>
    <div class="cardText">
      {{ character.name }}
    </div>
    <div class="cardText">
      {{ character.archetype }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: #d48f38;
  margin-bottom: 1rem;
  width: calc(100%/6);
  color: white;
}

.cardText {
  text-align: center;
  padding: 10px;
}

img {
  width: 100%;
}
</style>
