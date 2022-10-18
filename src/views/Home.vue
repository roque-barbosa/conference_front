<template>
  <div class="container">
    <Header title='Presentations'
      @toggle-add-form="toggleAddPresentation"
      @toggle-import-form="toggleImportData"
    />
    <div class="add-form" v-show="showAddForm">
      <AddPresentation
        @add-presentation="addPresentation"
        @toggle-add-presentation="toggleAddPresentation"
      />
    </div>
    <div class="add-form" v-show="showImportForm">
      <ImportData
        @import-data="handleImportData"
        @toggle-import-data="toggleImportData"
      />
    </div>
    <div class="add-form" v-if="activePresentationId !== null">
      <EditPresentation
        :id="activePresentationId"
        @save-edit-presentation="editPresentation"
        @toggle-edit-presentation="toggleEditPresentation"
      />
    </div>
    <PresentationList :presentations="presentations"
      @delete-presentation="deletePresentation"
      @edit-presentation="startEditingPresentation"
    />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import PresentationList from '../components/PresentationList.vue';
import AddPresentation from '../components/AddPresentation.vue';
import EditPresentation from '../components/EditPresentation.vue';
import ImportData from '../components/ImportData.vue'
import {
  fetchPresentations,
  createPresentation,
  deletePresentation,
  updatePresentation,
} from '../service/PresentationService';
import {sendPresentatiosnFile} from '../service/TracksService'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    PresentationList,
    AddPresentation,
    EditPresentation,
    ImportData,
  },
  data() {
    return {
      presentations: [],
      showAddForm: false,
      showImportForm: false,
      activePresentationId: null,
    }
  },
  methods: {
    addPresentation(newPresentation) {
      createPresentation(newPresentation.name, newPresentation.duration)
      .then(() => this.refreshPresentations());
    },
    deletePresentation(id) {
      if (confirm('Are you sure?')) {
        deletePresentation(id)
        .then(() => this.refreshPresentations());
      }
    },
    startEditingPresentation(presentation) {
      this.activePresentationId = presentation.lecture.id;
      console.log(presentation.lecture.name);
    },
    editPresentation(presentation) {
      updatePresentation(
        presentation.id,
        presentation.name,
        presentation.duration
      )
      .then(() => this.refreshPresentations());
    },
    toggleAddPresentation() {
      this.showAddForm = !this.showAddForm;
    },
    toggleImportData() {
      this.showImportForm = !this.showImportForm;
    },
    toggleEditPresentation() {
      this.activePresentationId = null;
    },
    refreshPresentations() {
      fetchPresentations()
      .then(res => {
        if (res) {
          this.presentations = res.data;
        }
      })
    },
    handleImportData(formData) {
      sendPresentatiosnFile(formData)
      .then((res) => {
        console.log(res)
        this.refreshPresentations()
      });
    }
  },
  created() {
    this.refreshPresentations();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}

.add-form {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: #ADACB5;
}
</style>
