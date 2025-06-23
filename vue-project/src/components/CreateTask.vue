<script setup >
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter('');
const newTask = ref('')
const newDate = ref('')
const Description = ref('')

function createTask() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [] ;
  tasks.push({title: newTask.value, Date: newDate.value , Description: Description.value , done: false })
  localStorage.setItem('tasks', JSON.stringify(tasks));
  router.push('/')
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

form {
  max-width: 500px;
  margin: 40px auto;
  background: white;
  padding: 24px 32px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
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