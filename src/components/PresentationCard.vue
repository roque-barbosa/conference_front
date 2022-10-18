<template>
  <div class="card-wrapper">
    <div>
      <h3>{{presentation.name}}</h3>
      <h6>{{presentation.duration == 5? 'lightning' : `${presentation.duration} min`}}</h6>
    </div>
    <div class="button-group">
      <button class="btn btn-warning"
        @click="onEdit(presentation)"
      >
        <i class="fas fa-pencil-alt"></i>
      </button>
      <button class="btn btn-danger"
        @click="onDelete(presentation.id)"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PresentationCard",
    props: {
      presentation: Object,
    },
    methods: {
      onDelete(id) {
        this.$emit('delete-presentation', id);
      },
      onEdit(presentation) {
        this.$emit('edit-presentation', presentation);
      }
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

  .button-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 0.5rem;
    gap: 8px;
  }

  .btn {
    display: flex;
    width: 3rem;
    max-height: 2rem;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #000;
    border: none;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
    border-radius: 3px;
    padding: 1px;
    transition: 0.2s opacity;
  }

  i {
    color: #2D3142;
  }

  .btn-warning {
    background-color: #e3c624;
  }

  .btn-danger {
    background-color: #f17d7d;
  }

  .btn:hover {
    opacity: 0.8;
  }
  
  .btn:focus {
    outline: none;
  }
</style>
