<script setup lang="ts">
interface Button {
  showIcon?: boolean;
  buttonText?: string;
  buttonClass?: string;
  border?: boolean;
  disabled?: boolean;
  buttonType: "submit" | "reset" | "button";
}

const props = withDefaults(defineProps<Button>(), {
  showIcon: false,
  buttonClass: "primary",
  buttonText: "button text",
  border: false,
  disabled: false
});
</script>

<template>
  <button class="button" :class="props.buttonClass" :type="props.buttonType">
    <div class="mx-auto flex flex-row items-center">
      <div v-if="props.showIcon" class="mr-2">
        <slot name="icon"></slot>
      </div>
      <div class="items-center">
        {{ props.buttonText }}
      </div>
    </div>
  </button>
</template>

<style scoped>
.button {
  @apply flex flex-row items-center align-middle;
}

.primary {
  @apply w-52 transform rounded-md border border-transparent  bg-green-500 px-3
  text-sm font-medium text-white shadow-md transition duration-500
  focus:outline-none focus:ring-2 focus:ring-indigo-500  focus:ring-offset-2;
}
</style>
