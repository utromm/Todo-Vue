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
</template>

<style scoped>
</style>