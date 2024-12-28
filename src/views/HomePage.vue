<script>
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},

  setup(_, { emit }) {
    const startQuiz = (blockIndex) => {
      emit('start-quiz', blockIndex)
    }

    const chapters = [
      {
        id: 1,
        title: 'Основы JS',
      },
      {
        id: 2,
        title: 'Объекты: основы',
      },
      {
        id: 3,
        title: 'Типы данных',
      },
      {
        id: 4,
        title: 'Продвинутая работа с функциями',
      },
      {
        id: 5,
        title: 'Свойства объекта, их конфигурация',
      },
      {
        id: 6,
        title: 'Свойства объекта, их конфигурация',
      },
    ]

    return {
      startQuiz,
      chapters,
    }
  },
})
</script>

<template>
  <div class="body">
    <div class="container">
      <h1>А ты знаешь JavaScript?</h1>
      <p>Изучаете JS?</p>
      <div class="quiz__chapters-grid">
        <RouterLink
          v-for="(chapter, index) in chapters"
          :key="index"
          class="quiz__chapter bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          to="/test"
          @click="startQuiz(index)"
        >
          {{ chapter.title }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  padding: 20px 0px;
}

p {
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 40px;
}

.quiz__chapters-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
}

.quiz__chapter {
  text-align: center;
  padding: 40px 20px;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
}

.container {
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 0 10px;
}
</style>
