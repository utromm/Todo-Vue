<script setup >
import { ref } from 'vue'

const newTask = ref('')
const newDate = ref('')
const Description = ref('')

function createTask() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [] ;
  tasks.push({title: newTask.value, newDate: newDate.value , Description: Description.value , done: false })
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
</script>

<template>
  <div class="create-container">
    <h1>Create New Task</h1>
    <form @submit.prevent="createTask">
      <label >Title</label>
      <input type="text" v-model="newTask" placeholder="Enter Title"  required>

      <label >Date</label>
      <input type="date" v-model="newDate" placeholder="Enter Date" required>

      <label >Description</label>
      <textarea v-model="Description" placeholder="Enter Description" required></textarea>

      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<style scoped>
</style>