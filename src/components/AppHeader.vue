<script >
export default {
  name: "AppHeader"

}
</script>

<template>
  <div id="headerBar">
    <div>
      <img
        src="https://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es"
        alt="">
    </div>

    <h1>YU-GI-OH API</h1>

  </div>
</template>

<style scoped>
#headerBar {
  display: flex;
  padding: 1rem;
  align-items: center;
  background-color: white;
  margin-bottom: 2rem;
}

h1 {
  padding-left: 1rem;
}

img {
  width: 80px;
}
</style>
