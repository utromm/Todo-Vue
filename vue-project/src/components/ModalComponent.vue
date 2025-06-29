<script setup>
import { ref , watch} from "vue";


const editTitle = ref('')
const editDate = ref('')
const editDescription = ref('')
 const properties = defineProps({
  isOpen: Boolean,
  editIndex: Number
});

const emit = defineEmits(["modal-close"]);

const target = ref(null)


watch(() => properties.editIndex, (newIndex) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[newIndex];

    if (task) {
      editTitle.value = task.title;
      editDate.value = task.Date;
      editDescription.value = task.Description;
    }
});
function onSave() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks[properties.editIndex] = {
      title: editTitle.value,
      Date: editDate.value,
      Description: editDescription.value
    };
    localStorage.setItem('tasks', JSON.stringify(tasks));
  emit('modal-close');
}
</script>

<template>
  <div v-if="isOpen" class="modal-open">
        <div class="modal-container" ref="target">
          <h1>Edit Task</h1>
          <div class="modal-header">
            <label>Edit Title</label>
            <input type="text" v-model="editTitle">
          </div>
          <div class="modal-body">
            <label>Edit Date</label>
            <input type="date" v-model="editDate">
          </div>
          <div class="modal-footer">
            <label>Edit Description</label>
            <textarea v-model="editDescription" ></textarea>
          </div>
          <div>
          <button @click="onSave">Save</button>
          </div>
        </div>
  </div>
</template>

<style scoped>
.modal-open {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  max-width: 500px;
  margin: 40px auto;
  background: white;
  padding: 24px 32px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
body {
  font-family: Arial, sans-serif;
  background: #eef2f7;
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}
label {
  display: block;
  margin-top: 20px;
  font-weight: bold;
  color: #444;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  background-color: #fafafa;
  transition: border-color 0.3s;
}

input:focus, textarea:focus {
  border-color: #007bff;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

button {
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

</style>