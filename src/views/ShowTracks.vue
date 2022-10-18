<template>
  <div class="container">
    <TracksHeader title="Tracks" />
    <ListTracks :tracks="tracks" />
    <TracksFooter  />
  </div>
</template>

<script>
  import TracksHeader from '../components/tracks/TracksHeader.vue'
  import TracksFooter from '../components/tracks/TracksFooter.vue'
  import ListTracks from '../components/tracks/ListTracks.vue'
  import { fetchTracks } from '../service/TracksService'

  export default {
    name: "ShowTracks",
    components: {
      TracksHeader,
      TracksFooter,
      ListTracks,
    },
    data() {
      return {
        tracks: [],
      }
    },
    methods: {
      refreshTracks() {
        fetchTracks()
        .then(res => {
          if (res) {
            this.tracks = res.data;
            console.log(res.data)
          }
        })
      }
    },
    created() {
      this.refreshTracks();
    }
  }
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: #ADACB5;
}
</style>