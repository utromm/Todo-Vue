<script setup>
import { ref, onMounted} from 'vue'

const tasks = ref([])

onMounted(() => {
  const sorted = localStorage.getItem('tasks');
  tasks.value = sorted ? JSON.parse(sorted) : [];
});

function toggleDone(task) {
  task.done = !task.done;
  updateStorage()
}

function deleteTask(index) {
  tasks.value.splice(index, 1);
  updateStorage()
}

function updateStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
}
</script>

<template>
<div class="Todo-container">
  <h1>Todo List</h1>
  <ul>
    <li
    v-for="(task , index) in tasks"
    :key="index"
    :style="{color : task.done ? 'green' : ''}"
    >
      {{task.title}} | {{task.Date}} | {{task.Description}}
      <div class="action">
        <button @click="toggleDone(task)" >DONE</button>
        <button @click="deleteTask(indexضضض)">DELETE</button>
      </div>
    </li>
  </ul>
  <router-link to="/create">Go To Create Task</router-link>
</div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background: #f0f4f8;
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

ul{
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
}

li {
  background: white;
  margin-bottom: 10px;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

li[style*="green"] {
  border-left: 5px solid green;
}

button {
  margin-left: 8px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  opacity: 0.9;
}

button:first-of-type {
  background-color: #28a745;
  color: white;
}

button:last-of-type {
  background-color: #dc3545;
  color: white;
}

a {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>