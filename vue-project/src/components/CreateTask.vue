<script setup >
</script>

<template>
  <div class="create-container">
    <h1>Create New Task</h1>
    <form>
      <label >Title</label>
      <input type="text"  placeholder="Enter Title"  required>

      <label >Date</label>
      <input type="date" placeholder="Enter Date" required>

      <label >Description</label>
      <textarea placeholder="Enter Description" required></textarea>

      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<style scoped>
</style>