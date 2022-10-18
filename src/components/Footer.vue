<template>
  <footer>
    <div class="footer-wrapper">
      <h2>Consult tracks</h2>
      <router-link to="/tracks">
        <i class="fas fa-arrow-circle-right fa-2xl" />
      </router-link>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
  }
</script>

<style scoped>
  footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #2D3142;
    justify-content: center;
    height: 8rem;
  }

  h2 {
    color: whitesmoke;
  }

  i {
    color: #e3c624;
    transition: 0.2s opacity;
  }

  i:hover {
    opacity: 0.8;
  }

  .footer-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 50rem;
    justify-content: flex-end;
    align-items: center;
    padding-left: 2rem;
    padding-right: 1rem;
    gap: 1rem;
  }
</style>