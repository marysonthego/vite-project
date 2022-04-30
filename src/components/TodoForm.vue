<script setup>
import {ref} from "vue";
//import {reactive} from "vue";

const label = ref('')

  function onSubmit() {
    const alabel = label.value;
    console.log(`onSubmit label=`, label);
    console.log(`onSubmit alabel=`, alabel);
    emit('todo-added', alabel);
  }

  const emit = defineEmits(['onSubmit:label', 'onSubmit', 'todo-added:alabel', 'todo-added'])

  defineExpose({ label })
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model.lazy.trim="label"
      class="input__lg"
    />
    <button type="submit" class="btn btn__primary btn">
      Add
    </button>
  </form>
</template>

