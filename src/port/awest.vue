<script>
import { defineComponent, ref, computed } from 'vue'
import { rawItems } from '../date/questioans'

export default defineComponent({
  setup() {
    const items = ref([])

    const currentIndex = ref(0)
    const score = ref(0)
    const finish = ref(false)
    const result = ref([])

    const currentQpick = computed(() => items.value[currentIndex.value])

    const select = (index) => {
      const isCorrect = index === currentQpick.value.correct
      result.value.push({
        question: currentQpick.value.title,
        selected: currentQpick.value.answer[index],
        correct: isCorrect,
      })

      if (isCorrect) {
        score.value++
      }

      setTimeout(() => {
        currentIndex.value++

        if (currentIndex.value >= items.value.length) {
          finish.value = true
        }
      }, 1000)
    }

    const startQuiz = (blockIndex) => {
      items.value = rawItems[blockIndex]
      currentIndex.value = 0
      score.value = 0
      finish.value = false
      result.value = []
    }

    return {
      startQuiz,
      currentIndex,
      currentQpick,
      items,
      score,
      finish,
      select,
      result,
    }
  },
})
</script>

<template>
  <header>
    <h1>Quiz</h1>
    <div v-if="!finish">
      <div v-if="items.length > 0">
        <h3>{{ currentQpick.title }}</h3>
        <ul>
          <li v-for="(answer, index) in currentQpick.answer" :key="index" @click="select(index)">
            {{ answer }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      правильных ответов {{ score }}/{{ items.length }}
      <div v-for="(results, index) in result" :key="index">
        {{ results.question }} - {{ results.selected }} -
        {{ results.correct ? 'Правильно' : 'Неправильно' }}
      </div>
    </div>
    <RouterLink to="/">Назад</RouterLink>
  </header>
</template>
