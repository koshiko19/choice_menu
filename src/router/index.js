import { createRouter, createWebHistory } from 'vue-router'
import Top from '../views/topPage.vue'
import Select from '../views/selectMenu.vue'


const routes = [
	{
		path: '/',
		name: 'Home',
		component: Top,
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