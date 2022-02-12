<template>
	<div class="container">
		<div class="top-content-wrap">
			<h1>{{ msg }}</h1>
			<div class="random-button">おまかせで！</div>
		</div>
		<div class="choice-content-wrap">
			<h2 class="choice-title">食べたいジャンルはありますか？</h2>
			<ui class="choice-genre">
				<li class="genre">魚料理</li>
				<li class="genre">肉料理</li>
				<li class="genre">和食</li>
				<li class="genre">洋食</li>
				<li class="genre">中華料理</li>
				<li class="genre">鍋料理</li>
			</ui>
		</div>
		<selectMenu />
	</div>
</template>

<script>
	import selectMenu from './selectMenu.vue'

	export default {
		props: {
			msg: String
		},
		components: {
			selectMenu
		}
	}
</script>
