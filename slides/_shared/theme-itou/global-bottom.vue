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
	left: 2rem;
	right: 2rem;
	bottom: 1.15rem;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	pointer-events: none;
	padding: 0.42rem 0.5rem 0.42rem 0.85rem;
	border: 1px solid var(--border);
	border-radius: 999px;
	background: var(--surface);
	backdrop-filter: blur(20px) saturate(150%);
	box-shadow: 0 8px 22px var(--shadow);
}

.slide-progress-track {
	height: 4px;
	flex: 1;
	background: var(--progress-track);
	border-radius: 9999px;
	overflow: hidden;
	box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}

.slide-progress-bar {
	height: 100%;
	background: var(--accent);
	border-radius: inherit;
	box-shadow: 0 0 10px var(--accent-glow);
	transition: width 420ms cubic-bezier(0.22, 1, 0.36, 1);
}

.slide-progress-page {
	font-size: 0.68rem;
	font-weight: 600;
	letter-spacing: 0.04em;
	color: var(--secondary-label);
	min-width: 3.5rem;
	text-align: right;
}

@media (prefers-reduced-motion: reduce) {
	.slide-progress-bar {
		transition-duration: 1ms;
	}
}
</style>
