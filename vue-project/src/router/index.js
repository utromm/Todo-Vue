import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '../components/TodoList.vue';
import CreateTask from '../components/CreateTask.vue';

const routes = [
    { path: '/', component: TodoList },
    { path: '/create', component: CreateTask },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
