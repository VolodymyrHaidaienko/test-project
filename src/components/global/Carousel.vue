<template>
  <div class="carousel">
    <slot :currentNumberSlide="currentNumberSlide" />
    <ButtonPagination
      class="carousel-button"
      imgIcon="cursor_arrow"
      @click="nextSlide"
    />
    <div class="carousel-pagination">
      {{ currentNumberSlide }}/{{ lengthSlide }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import ButtonPagination from "@/components/global/ButtonPagination.vue";

const props = withDefaults(
  defineProps<{
    lengthSlide?: number;
  }>(),
  {
    lengthSlide: 0,
  }
);
const emit = defineEmits<{
  (event: "updateImagesList"): void;
}>();

const currentNumberSlide = ref(1);

const nextSlide = () => {
  currentNumberSlide.value += 1;
  if (currentNumberSlide.value > props.lengthSlide) {
    currentNumberSlide.value = 1;
  }
  emit("updateImagesList");
};
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  width: 100%;

  &-button {
    width: 120px;
    height: 120px;
    cursor: pointer;
    position: absolute;
    z-index: 999;
    top: 25%;
    right: 5%;
    color: white;
  }

  &-pagination {
    width: 112px;
    height: 61px;
    display: flex;
    border: solid 2px white;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10%;
    left: 10%;
    color: white;
    z-index: 999;
  }
}
</style>
