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
					[
						{ id: 1, title: '焼き魚', image: require('@/assets/img/yakisakana.jpg') },
						{ id: 1, title: 'うどん', image: require('@/assets/img/udon.jpg') },
						{ id: 1, title: '寿司', image: require('@/assets/img/sushi.jpg') },
					],
					[
						{ id: 2, title: 'ハンバーグ', image: require('@/assets/img/hamburger.jpg') },
						{ id: 2, title: 'オムライス', image: require('@/assets/img/omuraisu.jpg') },
						{ id: 2, title: 'カレーライス', image: require('@/assets/img/curry.jpg') },
					],
					[
						{ id: 3, title: 'ピザ', image: require('@/assets/img/pizza.jpg') },
						{ id: 3, title: 'スパゲッティ', image: require('@/assets/img/pasta.jpg') },
						{ id: 3, title: 'フレンチ', image: require('@/assets/img/pasta.jpg') },
					],
					[
						{ id: 4, title: '餃子', image: require('@/assets/img/gyouza.jpg') },
						{ id: 4, title: 'ラーメン', image: require('@/assets/img/ramen.jpg') },
						{ id: 4, title: '肉まん', image: require('@/assets/img/nikuman.jpg') },
					],
					[
						{ id: 5, title: 'チゲ鍋', image: require('@/assets/img/tigenabe.jpg') },
						{ id: 5, title: '鍋焼きうどん', image: require('@/assets/img/nabeyaki.jpg') },
						{ id: 5, title: 'すきやき', image: require('@/assets/img/sukiyaki.jpg') },
					],
					[
						{ id: 6, title: 'サンドイッチ', image: require('@/assets/img/sandwich.jpg') },
						{ id: 6, title: 'パン', image: require('@/assets/img/pan.jpg') },
						{ id: 6, title: 'おにぎり', image: require('@/assets/img/onigiri.jpg') },
					]
				],
			}
		},
		created () {
			this.id = this.$route.params.id;
			if(this.id != 0) {
				let i = this.id - 1;
				const get = this.detailData[i][Math.floor(Math.random() * this.detailData[i].length)];
				this.title = get.title;
				this.image = get.image;
			}
			if(this.id == 0) {
				const array = this.detailData[Math.floor(Math.random() * this.detailData.length)];
				const get = array[Math.floor(Math.random() * array.length)];
				this.title = get.title;
				this.image = get.image;
			}
		},
	}
</script>