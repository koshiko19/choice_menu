<template>
	<div class="select-choice-wrap">
			<h2 class="choice-title">今日のご飯は</h2>
			<img class="select-menu-image" src="../assets/img/udon.jpg">
			<div class="select-menu">ラーメン</div>
			<div class="select-button">選びなおす！</div>
	</div>
</template>

<script>
	export default {
		props: {
			msg: String
		}
	}
</script>