<template>
  <div>
    <Carousel
      class="carousel"
      :lengthSlide="carouselSliders.length"
      @updateImagesList="updateImagesList"
      v-slot="{ currentNumberSlide }"
    >
    <div class="slide-book">
      <img
        v-for="(carouselSlider, index) in carouselSliderImages"
        :key="index"
        :class="`absolute ${
          index == 0 ? `z-[999] -ml-[10px]` : `z-[${carouselSliderImages.length - index}] ml-[${index}0px]`
        }`"
        :src="require(`@/assets/${carouselSlider}.svg`)"
        alt=""
      />
    </div>
      
      <Slide v-for="(carouselSlider, index) in carouselSliders" :key="index">
        <div
          v-show="currentNumberSlide === index + 1"
          class="slide-info"
          :class="`${
            currentNumberSlide === index + 1
              ? `z-[999]`
              : `z-[${carouselSliders.length - index}]`
          }`"
        >
          <img :src="require(`@/assets/${carouselSlider}.svg`)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>
<script setup lang="ts">
// import libraries and references
import { ref } from "vue";

// import components
import Carousel from "@/components/global/Carousel.vue";
import Slide from "@/components/global/Slide.vue";


const carouselSliders = ["slide1", "slide2", "slide3"];

const [...carouselSliderImage] = carouselSliders;
const carouselSliderImages = ref(carouselSliderImage);

const updateImagesList = () => {
  const firstCarouselSlider = carouselSliderImages.value[0];
  carouselSliderImages.value.shift();
  carouselSliderImages.value.push(firstCarouselSlider);
};
</script>
<style lang="scss">
.carousel {
  width: 100%;
  height: 400px;
  position: relative;

  .slide-info {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    
    img {
      height: 100%;
      width: 100%;
      min-height: max-content;
      object-fit: cover;
    }
  }
  .slide-book {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    margin-left: 20px;

    img {
      height: 100%;
      width: 100%;
      min-height: max-content;
      object-fit: cover;
    }
  }
}
</style>
