<script>
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},

  setup() {
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
        <div
          v-for="chapter in chapters"
          :key="chapter.id"
          class="quiz__chapter bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          @click="startQuiz(chapter.id - 1)"
        >
          <RouterLink to="/test">{{ chapter.title }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
