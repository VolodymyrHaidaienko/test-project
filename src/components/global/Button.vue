<template>
  <button
    v-if="!div && !href"
    :disabled="isDisabled"
    class="btn inline-flex justify-center"
    :class="`
    ${isLoading ? ' pointer-events-none' : ''}
    ${isDisabled ? ' opacity-40 cursor-not-allowed' : ''}
    ${btnClass}
    `"
    :type="type"
    v-bind="$attrs"
  >
    <template v-if="!isLoading && !$slots.default">
      <span :class="btnTitleClass" class="flex items-center">
        <span
          v-if="icon"
          :class="`
          ${iconPosition === 'right' ? 'order-1 ltr:ml-2 rtl:mr-2' : ' '}
          ${text && iconPosition === 'left' ? 'ltr:mr-2 rtl:ml-2' : ''}
          
          ${iconClass}
          
          `"
        >
          <Icon :icon="icon" :rotate="iconRotate" />
        </span>
        <span v-if="text">{{ text }}</span>
      </span>
    </template>
    <template v-if="isLoading">
      <svg
        class="animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        :class="loadingClass"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </template>
    <div v-if="$slots.default && !isLoading">
      <slot></slot>
    </div>
  </button>

  <button
    v-if="href"
    :disabled="isDisabled"
    class="btn inline-flex justify-center"
    :class="`
    ${isLoading ? ' pointer-events-none' : ''}
    ${isDisabled ? ' opacity-40 cursor-not-allowed' : ''}
    ${btnClass}
    `"
    v-bind="$attrs"
  >
    <template v-if="!isLoading && !$slots.default">
      <span :class="btnTitleClass" class="flex items-center">
        <a :href="apiUrl + href" target="_blank">
          <span
            v-if="icon"
            :class="`
            ${iconPosition === 'right' ? 'order-1 ltr:ml-2 rtl:mr-2' : ' '}
            ${text && iconPosition === 'left' ? 'ltr:mr-2 rtl:ml-2' : ''}
            ${iconClass}
            `"
          >
            <Icon :icon="icon" :rotate="iconRotate" />
          </span>
          <span v-if="text">{{ text }}</span>
        </a>
      </span>
    </template>

    <div v-if="$slots.default && !isLoading">
      <slot></slot>
    </div>
  </button>

  <div
    v-if="div"
    class="btn inline-flex justify-center"
    :class="`
    ${isLoading ? ' pointer-events-none' : ''}
    ${isDisabled ? ' opacity-40 cursor-not-allowed' : ''}
    ${btnClass}
    `"
  >
    <template v-if="!isLoading && !$slots.default">
      <span :class="btnTitleClass" class="flex items-center">
        <span
          v-if="icon"
          :class="`
          ${iconPosition === 'right' ? 'order-1 ltr:ml-2 rtl:mr-2' : ' '}
          ${text && iconPosition === 'left' ? 'ltr:mr-2 rtl:ml-2' : ''}
          
          ${iconClass}
          
          `"
        >
          <Icon :icon="icon" :rotate="iconRotate" />
        </span>
        <span v-if="text">{{ text }}</span>
      </span>
    </template>
    <template v-if="isLoading">
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        :class="loadingClass"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </template>
    <div v-if="$slots.default && !isLoading">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import Icon from "./Icon.vue";

withDefaults(
  defineProps<{
    text?: string;
    type?: "button" | "submit" | "reset";
    isDisabled?: boolean;
    isLoading?: boolean;
    btnClass?: string;
    btnTitleClass?: string;
    icon?: string;
    iconRotate?: number;
    iconPosition?: string;
    iconClass?: string;
    loadingClass?: string;
    div?: boolean;
    href?: string;
    apiUrl?: string;
    loadingText?: string;
  }>(),
  {
    text: "",
    type: "button",
    isDisabled: false,
    isLoading: false,
    btnClass: "bg-primary-500 text-white",
    btnTitleClass: "",
    icon: "",
    iconRotate: 0,
    iconPosition: "left",
    iconClass: "text-[20px]",
    loadingClass: "",
    div: false,
    href: "",
    loadingText: "multiple.loading",
  }
);
</script>
