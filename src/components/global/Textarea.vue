<template>
  <div
    class="form-group relative"
    :class="`${error ? 'has-error' : ''}  ${horizontal ? 'flex' : ''} ${
      validate ? 'is-valid' : ''
    } `"
  >
    <label
      v-if="label"
      :class="`${classLabel}  ${
        horizontal ? 'flex-0 mr-6 md:w-[100px] w-[60px] break-words' : ''
      }  ltr:inline-block rtl:block  input-label `"
      :for="name"
    >
      {{ label }}
    </label>
    <div class="relative" :class="horizontal ? 'flex-1' : ''">
      <textarea
        :id="name"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :class="`${classInput} input-control block w-full focus:outline-none pt-3 `"
        :value="modelValue"
        :error="error"
        :readonly="isReadonly"
        :disabled="disabled"
        :rows="rows"
        :validate="validate"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      ></textarea>

      <div
        class="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2"
      >
        <span v-if="validate" class="text-success-500">
          <Icon icon="bi:check-lg" />
        </span>
      </div>
    </div>

    <span
      v-if="error"
      class="mt-2"
      :class="
        msgTooltip
          ? ' inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded'
          : ' text-red-500 block text-sm'
      "
    >
      {{ error }}
    </span>
    <span
      v-if="validate"
      class="mt-2"
      :class="
        msgTooltip
          ? ' inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded'
          : ' text-success-500 block text-sm'
      "
    >
      {{ validate }}
    </span>
    <span
      v-if="description"
      class="block text-secondary-500 font-light leading-4 text-xs mt-2"
    >
      {{ description }}
    </span>
  </div>
</template>
<script setup lang="ts">
import Icon from "./Icon.vue";

withDefaults(
  defineProps<{
    placeholder?: string;
    label?: string;
    type?: string;
    classLabel?: string;
    classInput?: string;
    name?: string;
    modelValue?: string;
    error?: string;
    isReadonly?: boolean;
    disabled?: boolean;
    rows?: number;
    horizontal?: boolean;
    validate?: string;
    msgTooltip?: boolean;
    description?: string;
  }>(),
  {
    placeholder: "message",
    label: "",
    type: "text",
    classLabel: " ",
    classInput: "classinput",
    name: "textarea_",
    modelValue: "",
    error: "",
    isReadonly: false,
    disabled: false,
    rows: 3,
    horizontal: false,
    validate: "",
    msgTooltip: false,
    description: "",
  }
);
defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();
</script>
<style lang="scss"></style>
