<template>
  <div
    class="form-group relative"
    :class="`${error ? 'has-error' : ''}  ${horizontal ? 'flex' : ''}  ${
      validate ? 'is-valid' : ''
    }`"
  >
    <label
      v-if="label"
      :class="`${classLabel} ${
        horizontal ? 'flex-0 mr-6 md:w-[100px] w-[60px] break-words' : ''
      }  ltr:inline-block rtl:block input-label `"
      :for="name"
    >
      {{ label }}
    </label>
    <div
      class="relative w-full flex gap-1 items-center"
      :class="`horizontal ? 'flex-1' : '' ${generalClass}`"
    >
      <input
        v-if="!isMask"
        :id="name"
        :type="types"
        :name="name"
         autocomplete="off"
        :placeholder="placeholder"
        :class="`${classInput} input-control w-full block focus:outline-none h-[27pt] ${
          hasIcon ? 'ltr:pr-10 rtl:pl-10' : ''
        } `"
        :value="modelValue"
        :error="error"
        :readonly="isReadonly"
        :disabled="disabled"
        :validate="validate"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <cleave
        v-if="isMask"
        :id="name"
        :class="`${classInput} cleave input-control block w-full focus:outline-none h-[27pt] `"
        :name="name"
        :placeholder="placeholder"
        :value="modelValue"
        :error="error"
        :readonly="isReadonly"
        :disabled="disabled"
        :validate="validate"
        :options="options"
        model-value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <div v-if="labelRadio" class="uppercase">{{ labelRadio }}</div>
      <slot name="actionButtons"></slot>

      <div
        class="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2"
      >
        <slot name="icon">
          <span
            v-if="hasIcon"
            class="cursor-pointer text-secondary-500"
            @click="toggleType"
          >
            <Icon v-if="types === 'password'" icon="heroicons-outline:eye" />
            <Icon v-else icon="heroicons-outline:eye-off" />
          </span>
        </slot>
        <span v-if="validate" class="text-success-500">
          <Icon icon="bi:check-lg" />
        </span>
      </div>
    </div>

    <span
      v-if="error"
      :class="
        msgTooltip
          ? ' inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded'
          : ' text-red-700 block text-sm'
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
      class="block text-secondary-500 font-light leading-4 text-sm uppercase mt-2"
    >
      {{ description }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits } from "vue";
import Cleave from "vue-cleave-component";
import Icon from "./Icon.vue";

type Options = {
  creditCard: boolean;
  delimiter: string;
};

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    label: string;
    classLabel?: string;
    classInput?: string;
    type?: string;
    name: string;
    modelValue?: string | number;
    error?: string;
    hasIcon?: boolean;
    isReadonly?: boolean;
    disabled?: boolean;
    horizontal?: boolean;
    validate?: string;
    msgTooltip?: boolean;
    description?: string;
    isMask?: boolean;
    options?: Options;
    labelRadio?: string;
    generalClass?: string;
  }>(),
  {
    placeholder: "Search",
    classLabel: " ",
    classInput: "classinput",
    type: "text",
    modelValue: "",
    error: "",
    hasIcon: false,
    isReadonly: false,
    disabled: false,
    horizontal: false,
    validate: "",
    msgTooltip: false,
    description: "",
    isMask: false,
    options: () => ({
      creditCard: true,
      delimiter: "-",
    }),
    labelRadio: "",
    generalClass: "",
  }
);

defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

//Refs
const types = ref(props.type);

const toggleType = () => {
  // toggle the type of the password input field
  types.value = types.value === "text" ? "password" : "text";
};
</script>
<style lang="scss"></style>
