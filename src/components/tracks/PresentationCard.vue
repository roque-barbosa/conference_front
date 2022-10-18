<template>
  <div class="card-wrapper">
    <div>
      <h3>{{presentation.name}}</h3>
      <h6>{{presentation.duration}}</h6>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PresentationCard",
    props: {
      presentation: Object,
    },
  }
</script>

<style scoped>
  h6 {
    font-size: x-small;
    font-weight: 400;
  }
  .card-wrapper {
    display: flex;
    width: 100%;
    padding-left: 4px;
    justify-content: space-between;
    border-left-style: solid;
    border-color: #2D3142;
  }
</style>
