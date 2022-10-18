<template>
  <header>
    <div class="header-wrapper">
      <h1>{{title}}</h1>
      <div class="group-btn">
        <HeaderButton title="Add" color="#2D3142" @btn-click="$emit('toggle-add-form')" />
        <HeaderButton title="Import" color="#2D3142" @btn-click="$emit('toggle-import-form')" />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderButton from "./HeaderButton.vue"
export default {
  name: 'Header',
  props: {
    title: String
  },
  components: {
    HeaderButton
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