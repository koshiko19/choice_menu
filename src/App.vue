<template>
	<div>
		<Header/>
		<router-view/>
	</div>
</template>

<script>
	import Header from './components/globalHeader.vue'
	export default {
		components: {
			Header,
		}
	}
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/main.css";
</style>
