<script setup lang="ts">
interface Copyright {
  version?: string;
}

const props = withDefaults(defineProps<Copyright>(), {
  version: ""
});
</script>

<template>
  <div class="group relative flex flex-col items-start">
    <p class="font-sans text-xs text-gray-500" title="">&copy; Dave Fravel</p>

    <div class="absolute bottom-0 mb-6 flex hidden flex-col items-center group-hover:flex">
      <span class="relative z-10 whitespace-nowrap bg-black p-2 text-xs leading-none text-white shadow-lg"
        >(v{{ props.version }})</span
      >
      <div class="-mt-2 h-3 w-3 rotate-45 bg-black"></div>
    </div>
  </div>
  <div></div>
</template>
