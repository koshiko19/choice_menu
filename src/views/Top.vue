<template>
	<div class="container">
		<div class="top-content-wrap">
			<h1>今日のご飯を探しましょう！</h1>
			<div class="random-button">
				<router-link :to="{name: 'Select', params: {id: 0}}">おまかせ</router-link>
			</div>
		</div>
		<div class="choice-content-wrap">
			<h2 class="choice-title">食べたいジャンルはありますか？</h2>
			<ui class="choice-genre">
				<li class="genre">
					<router-link :to="{name: 'Select', params: {id: 1}}">和食</router-link>
				</li>
				<li class="genre">
					<router-link :to="{name: 'Select', params: {id: 2}}">洋食</router-link>
				</li>
				<li class="genre">
					<router-link :to="{name: 'Select', params: {id: 3}}">イタリアン</router-link>
				</li>
				<li class="genre">
					<router-link :to="{name: 'Select', params: {id: 4}}">中華料理</router-link>
				</li>
				<li class="genre">
					<router-link :to="{name: 'Select', params: {id: 5}}">鍋料理</router-link>
				</li>
				<li class="genre">
					<router-link :to="{name: 'Select', params: {id: 6}}">軽食</router-link>
				</li>
			</ui>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>
