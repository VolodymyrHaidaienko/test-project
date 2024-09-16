<template>
  <div>
    <label
      :for="id"
      class="flex items-center"
      :class="disabled ? ' cursor-not-allowed opacity-50' : 'cursor-pointer'"
    >
      <input
        :type="type"
        :class="inputClass"
        :disabled="disabled"
        :name="name"
        :value="value"
        :id="id"
        @change="onChange"
      />

      <span
        v-if="label"
        :class="`text-black-N600 pb-0.5 text-[16px] leading-6 max-w-[710px] ml-3 ${labelClass}`"
      >
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    name?: string;
    type?: string;
    inputClass?: string;
    value: string | number;
    label?: string;
    id?: string;
    labelClass?: string;
  }>(),
  {
    disabled: false,
    name: "checkbox",
    type: "checkbox",
    inputClass: "",
    label: "",
    id: "",
    labelClass: "",
  }
);

const emit = defineEmits<{
  (event: "update:modelValue", value: number | string): void;
}>();

const onChange = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
