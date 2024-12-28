<script>
import { defineComponent, ref } from 'vue'
import HomePage from './views/home.vue'
import TestPage from './views/Test.vue'
import Switch from './views/Switch.vue'

export default defineComponent({
  components: {
    HomePage,
    TestPage,
    Switch,
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
  <Switch />
  <home v-if="$route.path === '/'" @start-quiz="startQuiz" />
  <Test v-else :blockIndex="blockIndex" />
</template>

<style>
:root {
  --background-color-primary: #202020;
  --background-color-secondary: #090b16;
  --background-color-luna: #ffffff;
  --background-color-ul: rgb(29, 29, 29);
  --text-primary-color: white;
  --text-color: white;
  --element-size: 4rem;
}

:root.dark-theme {
  --background-color-primary: #ffffff;
  --background-color-secondary: #2d2d30;
  --background-color-luna: #000000;
  --background-color-ul: rgb(214, 214, 214);
  --text-primary-color: #ddd;
  --text-color: black;
}
</style>
