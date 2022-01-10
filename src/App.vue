<template>
	<div id="app">
		<choiceTop msg="今日のご飯を探しましょう！"/>
	</div>
</template>

<script>
import choiceTop from './components/choiceTop.vue' //ここでchoiceTop.vueを呼び出す

export default {
	name: 'App',
	components: {
		choiceTop
	}
}
</script>

<style>
@import "./assets/css/style.css"
</style>