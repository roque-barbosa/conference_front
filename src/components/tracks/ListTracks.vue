<template>
  <div class="wrapper">
    <div
      class="tracks-wrapper"
      v-for="track in tracks"
      :key="tracks.indexOf(track)"
    >
      <h1 class="track-title">{{`Track ${tracks.indexOf(track) + 1}`}}</h1>
      <div
        class="presentation-wrapper"
        v-for="track in track"
        >
        <div v-for="lecture in track">
          <PresentationCard :presentation="lecture"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import PresentationCard from '../tracks/PresentationCard.vue'

  export default {
    name: "PresentationList",
    props: {
      tracks: Array
    },
    components: {
      PresentationCard,
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 40rem;
    padding: 2rem;
    gap: 8px;
    align-items: center;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .wrapper::-webkit-scrollbar {
    display: none;
  }

  .tracks-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
    width: 100%;
  }

  .presentation-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 1rem;
    padding-left: 2rem;
  }
</style>