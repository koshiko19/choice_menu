<template>
	<div class="container">
		<h1>{{ msg }}</h1>
		<div class="random-button">おまかせで！</div>
		<h2 class="choice-title">食べたいジャンルはありますか？</h2>
		<ui class="choice-genre">
			<li class="genre">魚料理</li>
			<li class="genre">肉料理</li>
			<li class="genre">和食</li>
			<li class="genre">洋食</li>
			<li class="genre">中華料理</li>
			<li class="genre">鍋料理</li>
		</ui>
		<h2 class="choice-title">今日のご飯は</h2>
		<img class="select-menu-image" src="../assets/img/udon.jpg">
		<div class="select-menu">ラーメン</div>
		<div class="select-button">選びなおす！</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
}
</script>
