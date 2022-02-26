<template>
	<div class="container">
		<div class="select-choice-wrap">
			<h2 class="choice-title">今日のご飯は</h2>
			<img class="select-menu-image" :src="require('@/assets/img/' + image)">
			<div class="select-menu">{{ title }}</div>
			<div class="select-button">
				<router-link to="/">選びなおす！</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import menu from '../assets/menuData.json'
	export default {
		data () {
			return {
				detailData: menu,
				id: "",
				title: "",
				image: "",
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
