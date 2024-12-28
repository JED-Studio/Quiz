<script>
import { defineComponent, ref, computed } from 'vue'
import { rawItems } from '../date/questions'

export default defineComponent({
  props: {
    blockIndex: Number,
  },
  setup(props) {
    const items = ref(rawItems[props.blockIndex])

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
      <h3 class="quiz__question">{{ currentQpick.title }}</h3>
      <ul>
        <li v-for="(answer, index) in currentQpick.answer" :key="index" @click="select(index)">
          {{ answer }}
        </li>
      </ul>
    </div>
    <div v-else>
      правильных ответов {{ score }}/{{ items.length }}
      <div v-for="(results, index) in result" :key="index">
        {{ results.question }} - {{ results.selected }} -
        {{ results.correct ? 'Правильно' : 'Неправильно' }}
      </div>
    </div>
    <RouterLink to="/" class="quiz__back">Назад</RouterLink>
  </header>
</template>

<style>
.quiz__question {
  color: var(--text-color);
}

.quiz__back {
  color: var(--text-color);
}

ul {
  padding: 0;
}

li {
  padding: 20px;
  color: var(--text-color);
  list-style: none;
  background-color: var(--background-color-primary);
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid rgba(128, 128, 128, 0.26);
  cursor: pointer;
  transition:
    background-color 0.2s linear,
    color 0.2s linear,
    fill 0.2s linear;
}

li:hover {
  background-color: var(--background-color-ul);
}

header {
  widows: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
