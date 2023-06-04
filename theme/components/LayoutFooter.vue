<template>
  <footer
    v-if="website || handle"
    class="mt-auto grid grid-cols-3 justify-between w-full text-gray-500 dark:text-white"
  >
    <small>webinale, 25. Mai 2023</small>
    <small class="text-center">
      <span class="flex gap-2">
        <kol-link
          _icon="codicon codicon-inspect"
          _href="https://public-ui.github.io"
          _label="public-ui.github.io"
        />
        <span class="text-gray font-mono">// follow us</span>
      </span>
    </small>
    <small class="text-right">{{ handle }}</small>
  </footer>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  website: {
    type: String,
  },
  middle: {
    type: String,
  },
  handle: {
    type: String,
  },
});
</script>
