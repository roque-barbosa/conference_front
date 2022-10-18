<template>
  <button
      class="btn"
      :style="{background: color}"
      @click="onClick()"
    >
      {{title}}
    </button>
</template>

<script>
export default {
  name: "HeaderButton",
  props: {
    title: String,
    color: String,
    onClickFunc: Function,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    }
  }
}
</script>

<style scoped>

div {
  background-color: red;
}
.btn {
  display: flex;
  width: 3rem;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
</style>