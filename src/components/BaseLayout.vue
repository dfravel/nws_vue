<script setup lang="ts">
import { useHead } from "@vueuse/head";

const props = defineProps<{
  title?: string;
  isAdmin?: boolean;
}>();

useHead({
  bodyAttrs: {
    class: "bg-pageBackground"
  },
  meta: [
    {
      property: "og:title",
      content: props.title
    }
  ]
});
</script>

<template>
  <main class="mb-auto">
    <div class="mx-auto max-w-full py-4 sm:px-6 lg:px-8">
      <slot></slot>
    </div>
  </main>

  <footer class="h-10 w-full py-4 text-sm"></footer>
</template>

<style></style>
