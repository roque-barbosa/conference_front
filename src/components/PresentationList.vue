<template>
  <div class="wrapper">
    <div
      class="presentation-wrapper"
      :key="presentation.lecture.id"
      v-for="presentation in presentations"
    >
      <PresentationCard
        :presentation="presentation.lecture"
        @delete-presentation="$emit('delete-presentation', presentation.lecture.id)"
        @edit-presentation="$emit('edit-presentation', presentation)"
      />
    </div>
  </div>
</template>

<script>
  import PresentationCard from "./PresentationCard.vue"

  export default {
    name: "PresentationList",
    props: {
      presentations: Array
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

  .presentation-wrapper {
    display: flex;
    margin-bottom: 4px;
    width: 100%;
  }
</style>