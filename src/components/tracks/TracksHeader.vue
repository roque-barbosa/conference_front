<template>
  <header>
    <div class="header-wrapper">
      <h1>{{title}}</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TracksHeader',
  props: {
    title: String
  },
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #2D3142;
    justify-content: center;
  }
  .header-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 50rem;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 1rem;
  }

  .group-btn {
    display: flex;
    gap: 4px;
  }

  h1 {
    color: white;
  }
  
</style>