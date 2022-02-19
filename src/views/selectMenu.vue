<template>
	<div class="container">
		<div class="select-choice-wrap">
			<h2 class="choice-title">今日のご飯は</h2>
			<img class="select-menu-image" :src="image">
			<div class="select-menu">{{ title }}</div>
			<div class="select-button">
				<router-link to="/">選びなおす！</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				id: "",
				title: "",
				image: "",
				detailData: [
					{ id: 1, title: '焼き魚', image: require('@/assets/img/yakisakana.jpg') },
					{ id: 2, title: 'ハンバーグ', image: require('@/assets/img/hamburger.jpg') },
					{ id: 3, title: 'ピザ', image: require('@/assets/img/pizza.jpg') },
					{ id: 4, title: '餃子', image: require('@/assets/img/gyouza.jpg') },
					{ id: 5, title: 'チゲ鍋', image: require('@/assets/img/tigenabe.jpg') },
					{ id: 6, title: 'サンドイッチ', image: require('@/assets/img/sandwich.jpg') },
				],
			}
		},
		created () {
			this.id = this.$route.params.id;
			if(this.id != 0) {
				let i = this.id - 1;
				this.title = this.detailData[i].title;
				this.image = this.detailData[i].image;
			}
			if(this.id == 0) {
				const get = this.detailData[Math.floor(Math.random() * this.detailData.length)];
				this.title = get.title;
				this.image = get.image;
			}
		},
	}
</script>