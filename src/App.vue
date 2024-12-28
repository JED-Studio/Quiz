<script>
import { defineComponent, ref } from 'vue'
import home from './views/home.vue'
import Test from './views/Test.vue'

export default defineComponent({
  components: {
    home,
    Test,
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
  <home v-if="$route.path === '/'" @start-quiz="startQuiz" />
  <Test v-else :blockIndex="blockIndex" />
</template>
