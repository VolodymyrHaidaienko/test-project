<template>
  <div>
    <img v-if="imgIcon" :src="require(`@/assets/${imgIcon}.svg`)" alt="" />
    <button v-else>{{ text }}</button>
  </div>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    text?: string;
    imgIcon?: string;
  }>(),
  {
    text: "Send",
    imgIcon: "",
  }
);
</script>
