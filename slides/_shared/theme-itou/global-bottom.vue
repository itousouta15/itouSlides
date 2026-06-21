<script setup lang="ts">
import { computed } from "vue";
import { useNav } from "@slidev/client";

const nav = useNav();

const showProgress = computed(() => nav.currentLayout.value !== "cover");
const progress = computed(() => {
	const current = nav.currentPage.value;
	const total = nav.total.value;

	if (!total) return 0;
	return Math.min(100, Math.max(0, (current / total) * 100));
});
</script>

<template>
	<footer v-if="showProgress" class="slide-progress-footer">
		<div class="slide-progress-track">
			<div class="slide-progress-bar" :style="{ width: `${progress}%` }" />
		</div>
		<span class="slide-progress-page">{{ nav.currentPage }} / {{ nav.total }}</span>
	</footer>
</template>

<style scoped>
.slide-progress-footer {
	position: absolute;
	left: 1.5rem;
	right: 1.5rem;
	bottom: 0.8rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	pointer-events: none;
}

.slide-progress-track {
	height: 3px;
	flex: 1;
	background: rgb(255 255 255 / 20%);
	border-radius: 9999px;
	overflow: hidden;
}

.slide-progress-bar {
	height: 100%;
	background: #50fa7b;
	transition: width 220ms ease;
}

.slide-progress-page {
	font-size: 0.7rem;
	opacity: 0.75;
	min-width: 3rem;
	text-align: right;
}
</style>
