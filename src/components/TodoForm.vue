<script setup>
import {ref} from "vue";

const label = ref('')

  function onSubmit() {
    if(label.value === '') {
      return;
    }
    const alabel = label.value;
    console.log(`onSubmit label=`, label);
    console.log(`onSubmit alabel=`, alabel);
    label.value = '';
    console.log(`onSubmit label=`, label);
    emit('todo-added', alabel);
  }

  const emit = defineEmits(['todo-added:alabel', 'todo-added'])

  const vFocus = {
  mounted: (el) => el.focus()
}

</script>

<template>
  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input" class="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input
    v-focus
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

