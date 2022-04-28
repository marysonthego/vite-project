<script setup>
import {ref, computed} from "vue";

const props = defineProps({
  label: {
    type: "String",
  }
})

let label = computed({
  get() {
    console.log(`get label=`, label);
    return props.label
  },
  set(value) {
    console.log(`set label=`, label);
    emit("onSubmit:label", value)
  }
})

  function onSubmit() {
    console.log(`onSubmit 1 label=`, label);
    emit('todo-added', label);
    console.log(`onSubmit 2 label=`, label);
    label = "";
  }

  const emit = defineEmits(['onSubmit:label', 'onSubmit', 'todo-added:label', 'todo-added'])
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

