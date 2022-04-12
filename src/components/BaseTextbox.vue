<script setup lang="ts">
import { useField } from "vee-validate";
import { computed, onMounted, watch } from "vue";

interface Textbox {
  labelText?: string;
  type?: string;
  showLabel?: boolean;
  required?: boolean;
  labelClass?: string;
  placeholder?: string;
  modelValue?: string;
  fieldName?: string;
  fieldId?: string;
  successMessage?: string;
}

const props = withDefaults(defineProps<Textbox>(), {
  label: "Label Text",
  type: "text",
  showLabel: false,
  required: false,
  labelClass: "",
  placeholder: "",
  modelValue: "",
  fieldName: "",
  fieldId: ""
});

// define the emits to go back up
const emit = defineEmits(["update:modelValue"]);

const {
  value: inputValue,
  errorMessage,
  handleChange,
  meta
} = useField(props.fieldName, undefined, {
  initialValue: props.modelValue
});

const value = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    handleChange(value);
    inputValue.value = value;
  }
});

function onInput(event) {
  value.value = event.target.value;
}

onMounted(() => {
  value.value = props.modelValue;
});

watch(inputValue, (newVal) => {
  emit("update:modelValue", newVal);
});

watch(
  () => props.modelValue,
  (newModel) => {
    inputValue.value = newModel;
  }
);
</script>

<template>
  <div class="text-input flex flex-col" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <label v-if="props.showLabel" class="label" :class="props.labelClass" :for="props.fieldId">
      {{ props.labelText }}
      <span v-if="props.required" class="required">*</span>
    </label>
    <input
      :type="props.type"
      :name="props.fieldName"
      :id="props.fieldId"
      class
      :placeholder="props.placeholder"
      @input="onInput"
      :value="value"
    />
    <slot name="description"></slot>
    <p class="help-message" v-show="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.text-input {
  @apply w-full;
}

.text-input input {
  @apply block w-full rounded-xl border-gray-300 shadow focus:border-cardHeader focus:ring-cardHeader sm:text-sm;
}

.text-input.has-error input {
  @apply border border-red-500 bg-red-200;
}

.text-input.has-error .help-message {
  @apply mt-2 text-sm text-red-600;
}
</style>
