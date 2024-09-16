<template>
  <div>
    <SliderComponent />
    <FormComponent />

    <div class="flex justify-center">
      <div>
        <Radio
          v-for="(option, index) in sortMovieListTitle"
          :key="index"
          v-model="positionBlock"
          type="radio"
          :value="option.title"
          classInput="w-5 mb-1 border-2 border-black flex items-center"
          :id="option.title"
          label-class=""
          input-class="w-5 h-5"
          :label="option.label"
        />
      </div>
    </div>
    <div
      v-for="(movie, index) in moviesSortList"
      :key="index"
      class="flex p-5 gap-5 my-5 bg-slate-300"
    >
      <div
        v-if="
          positionBlock === 'left' ||
          (positionBlock === 'random' && index % 2 == 0)
        "
        class="flex flex-wrap items-center justify-start text-left"
      >
        <div class="text-xl font-bold">{{ movie.title }}</div>
        <div>{{ movie.overview }}</div>
      </div>
      <img
        :src="`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`"
        alt="pic"
      />
      <div
        v-if="
          positionBlock === 'right' ||
          (positionBlock === 'random' && index % 2 > 0) ||
          positionBlock === 'sort'
        "
        class="flex flex-wrap items-center justify-start text-left"
      >
        <div class="text-xl font-bold">{{ movie.title }}</div>
        <div>{{ movie.overview }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import libraries and references
import { onMounted, ref, computed } from "vue";

// import stores
import { UserDataService } from "@/api/userDataService";

// import components
import SliderComponent from "@/components/SliderComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import Radio from "@/components/global/Radio.vue";

const moviesList = ref<any[]>([]);
const sortMovieListTitle = [
  {
    title: "right",
    label: "Вивести всі блоки у форматі зображення - зліва, текст - справа",
  },
  {
    title: "left",
    label: "Вивести всі блоки у форматі зображення - справа, текст - зліва",
  },
  { title: "random", label: "Вивести всі блоки у шахматному форматі" },
  { title: "sort", label: "Сортувути по aлфавіту" },
];
const positionBlock = ref<string>("right");
const moviesSortList = computed<any[]>(() => {
  if (positionBlock.value === "sort") {
    return JSON.parse(JSON.stringify(moviesList.value)).sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }
  return moviesList.value;
});

const getAllMovies = async (): Promise<void> => {
  const response = await UserDataService.getAll({});
  
  
  moviesList.value = response.results;
};

onMounted(async () => {
  getAllMovies();
});
</script>
