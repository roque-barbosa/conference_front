<template>
  <div class="form-wrapper">
    <form class="add-form" @submit="onSubmit">
      <i class="fas fa-times" @click="closeForm" />
      <div class="form-control">
        <label for="">Arquivo</label>
        <input
          type="file"
          ref="file"
          @change="handleFileUpload( $event )"
        >
      </div>
      <input type="submit" value="Save Presentation" class="btn btn-block">
    </form>
  </div>
</template>

<script>
  export default {
    name: "AddPresentation",
    data() {
      return {
        file: '',
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append('file', this.file);
        
        this.$emit("import-data", formData);

        this.closeForm();
      },
      closeForm() {
        this.$emit("toggle-import-data")
      },
      handleFileUpload() {
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

<style scoped>

  .form-wrapper {
    background-color: rgb(64, 64, 66, 0.5);
    position: absolute;
    display: flex;
    width: inherit;
    height: inherit;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  .add-form {
    position: relative;
    background-color: #ADACB5;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 30rem;
    height: fit-content;
    padding: 1rem;
    gap: 0.5rem;
    align-items: center;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
  }

  label {
    font-size: large;
  }

  .form-control input {
    outline: none;
    border: none;
    padding: 4px;
    width: 100%;
    height: 30px;
    border-radius: 8px;
    background-color: whitesmoke;
  }

  .btn {
    width: 100%;
    background-color: #2D3142;
    height: 2rem;
    border-radius: 8px;
    color: whitesmoke;
    max-width: 20rem;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: 0.2s opacity;
  }

  .btn:hover {
    opacity: 0.7;
  }

  i {
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;
    transition: 0.2s color;
  }

  i:hover {
    color: red
  }
</style>
