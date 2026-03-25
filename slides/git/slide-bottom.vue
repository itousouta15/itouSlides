<template>
  <footer
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-3 right-6 text-xs opacity-60"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>