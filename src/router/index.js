import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Select from '../views/selectMenu.vue'


const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		props: true,
	},
	{
		path: '/select',
		name: 'Select',
		component: Select,
		props: true,
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router