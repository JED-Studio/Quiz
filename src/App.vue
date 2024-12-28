<script>
import { defineComponent, ref } from 'vue'
import HomePage from './views/HomePage.vue';
import TestPage from './views/TestPage.vue';

export default defineComponent({
  components: {
    HomePage,
    TestPage,
  },
  setup() {
    const blockIndex = ref(0)

    const startQuiz = (index) => {
      blockIndex.value = index
    }
    return {
      blockIndex,
      startQuiz,
    }
  },
})
</script>

<template>
  <HomePage v-if="$route.path === '/'" @start-quiz="startQuiz" />
  <TestPage v-else :blockIndex="blockIndex" />
</template>
