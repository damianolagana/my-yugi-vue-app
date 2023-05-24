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
      <img :src="character.card_images[0].images_url" alt="">
    </div>
    <div>
      {{ character.name }}
    </div>
    <div>
      {{ character.archetype }}
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #d48f38;
  margin-bottom: 1rem;
  width: calc(100%/6)
}

img {
  width: 100%;
}
</style>
