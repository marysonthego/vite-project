<template>
  <input type="checkbox" id="todo-item" />
  <label for="todo-item">{{label}}</label>
</template>

<script>
  export default {
    props: {
      label:{required: true, default: "Learn Vue", type: String},
      done:{default: false, type: Boolean}
    }
  };
</script>

