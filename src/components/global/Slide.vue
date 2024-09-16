<template>
  <div class="slide">
    <Transition class="slide">
      <slot />
    </Transition>
  </div>
</template>
<style scoped lang="scss">
.slide {
  animation: rotateTransform 0.3s;
}



@keyframes rotateTransform {
    0% {
        transform: translateX(-100%);
        opacity: 0;
        
    }
     
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
