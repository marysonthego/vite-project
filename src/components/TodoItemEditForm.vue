<template>
  <form class="stack-small" @submit.prevent="onSubmit">
    <div>
      <label class="edit-label">Edit Name for &quot;{{label}}&quot;</label>
      <input :id="id" type="text" v-focus autocomplete="off" v-model.lazy.trim="newLabel" />
    </div>
    <div class="btn-group">
      <button type="button" class="btn" @click="onCancel">
        Cancel
        <span class="visually-hidden">editing {{label}}</span>
      </button>
      <button type="submit" class="btn btn__primary">
        Save
        <span class="visually-hidden">edit for {{label}}</span>
      </button>
    </div>
  </form>
</template>

<script setup>
  import {ref} from "vue";

  const props = defineProps({
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  });

  const newLabel = ref(props.label);

    defineExpose({ newLabel })

    const emit = defineEmits(['item-edited:newLabel', 'item-edited',  'edit-cancelled'])

    const onSubmit = () => {
      if (newLabel && newLabel !== props.label) {
        emit("item-edited", newLabel);
      }
    };

    const onCancel = () => {
      emit("edit-cancelled");
    }

    const vFocus = {
  mounted: (el) => el.focus()
}


</script>

<style scoped>
.edit-label {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0b0c0c;
  display: block;
  margin-bottom: 5px;
}
input {
  display: inline-block;
  margin-top: 0.4rem;
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
form > * {
  flex: 0 0 100%;
}
</style>
