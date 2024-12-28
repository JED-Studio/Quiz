export const rawItems = [
  [
    {
      title: 'как вывести в браузере "Привет мир!"?',
      answer: ['alert()', 'map()', 'if()', 'for()'],
      correct: 0,
    },
    {
      title:
        'Какой из следующих вариантов является правильным способом объявления переменной в JavaScript?',
      answer: [
        'declare myVariable;',
        'let myVariable =;',
        'var myVariable;',
        'const myVariable: 5;',
      ],
      correct: 2,
    },
    {
      title:
        'Какой из следующих вариантов является правильным способом разделения инструкций в JavaScript?',
      answer: [
        'alert("Привет") alert("Мир")',
        'alert("Привет"); alert("Мир");',
        'alert("Привет") alert("Мир");',
        'alert("Привет"): alert("Мир");',
      ],
      correct: 1,
    },
    // Use strict
    {
      title: 'Что делает директива "use strict"?',
      answer: [
        'Включает строгий режим, который помогает избегать ошибок в коде.',
        'Запускает код в режиме отладки.',
        'Отключает все ошибки в коде.',
        'Увеличивает производительность скрипта.',
      ],
      correct: 0,
    },
    {
      title: 'Где должна находиться директива "use strict"?',
      answer: [
        'В конце файла.',
        'В начале файла или функции.',
        'В любом месте кода.',
        'Внутри комментариев.',
      ],
      correct: 1,
    },
    {
      title: 'Можно ли отменить строгий режим после его включения?',
      answer: [
        'Да, с помощью директивы "no use strict".',
        'Нет, строгий режим невозможно отменить.',
        'Да, если код помещён в другую функцию.',
        'Да, если использовать старую версию JavaScript.',
      ],
      correct: 1,
    },

    {
      title:
        'Какой из следующих вариантов является правильным способом включения строгого режима в функции?',
      answer: [
        'function myFunction() { "use strict"; ... }',
        'function myFunction() { ... "use strict"; }',
        'function myFunction() { use strict; ... }',
        'function myFunction() { strict mode; ... }',
      ],
      correct: 0,
    },
    {
      title: 'Что произойдет, если "use strict" не находится в первой строке скрипта?',
      answer: [
        'Строгий режим все равно будет активирован.',
        'Строгий режим не будет активирован.',
        'Код будет выполнен с ошибками.',
        'Код будет выполнен быстрее.',
      ],
      correct: 1,
    },
    {
      title: 'Какое из следующих утверждений верно для строгого режима?',
      answer: [
        'Он позволяет использовать не объявленные переменные.',
        'Он запрещает использование неявного преобразования типов.',
        'Он делает код менее безопасным.',
        'Он позволяет переопределять встроенные функции.',
      ],
      correct: 1,
    },
  ],
  [
    {
      title: 'Что делает функция, объявленная с ключевым словом `async`?',
      answer: [
        'Возвращает значение синхронно.',
        'Всегда возвращает `undefined`.',
        'Позволяет использовать `await` внутри функции.',
        'Преобразует функцию в обычную функцию обратного вызова.',
      ],
      correct: 2,
    },
    {
      title: 'Какой из следующих методов используется для обработки ошибок в промисах?',
      answer: ['finally()', 'catch()', 'handleError()', 'error()'],
      correct: 1,
    },
    {
      title: 'Какой из следующих вариантов кода правильно создает асинхронную функцию?',
      answer: [
        'async function myFunction() { }',
        'function async myFunction() { }',
        'myFunction() async { }',
        'function myFunction() async { }',
      ],
      correct: 0,
    },
    {
      title: 'Что произойдет, если `await` используется с неасинхронным значением?',
      answer: [
        'Возникнет ошибка типа "неверный тип".',
        'Значение будет возвращено немедленно.',
        'Код будет выполняться синхронно.',
        '`await` будет игнорироваться.',
      ],
      correct: 1,
    },
    {
      title: 'Какой из следующих операторов используется для создания промиса?',
      answer: ['Promise.create()', 'new Promise()', 'Promise.resolve()', 'Promise()'],
      correct: 1,
    },
    {
      title: 'Что делает метод `Promise.all()`?',
      answer: [
        'Ожидает завершения одного промиса.',
        'Ожидает завершения всех переданных промисов.',
        'Обрабатывает ошибки в промисах.',
        'Возвращает массив промисов.',
      ],
      correct: 1,
    },
    {
      title: 'Какой метод используется для преобразования значения в промис?',
      answer: ['Promise.wrap()', 'Promise.resolve()', 'Promise.convert()', 'Promise.cast()'],
      correct: 1,
    },
  ],
  [
    {
      title: 'Что делает функция, объявленная с ключевым словом `async`?',
      answer: [
        'Возвращает значение синхронно.',
        'Всегда возвращает `undefined`.',
        'Позволяет использовать `await` внутри функции.',
        'Преобразует функцию в обычную функцию обратного вызова.',
      ],
      correct: 2,
    },
    {
      title: 'Какой из следующих методов используется для обработки ошибок в промисах?',
      answer: ['finally()', 'catch()', 'handleError()', 'error()'],
      correct: 1,
    },
    {
      title: 'Какой из следующих вариантов кода правильно создает асинхронную функцию?',
      answer: [
        'async function myFunction() { }',
        'function async myFunction() { }',
        'myFunction() async { }',
        'function myFunction() async { }',
      ],
      correct: 0,
    },
    {
      title: 'Что произойдет, если `await` используется с неасинхронным значением?',
      answer: [
        'Возникнет ошибка типа "неверный тип".',
        'Значение будет возвращено немедленно.',
        'Код будет выполняться синхронно.',
        '`await` будет игнорироваться.',
      ],
      correct: 1,
    },
    {
      title: 'Какой из следующих операторов используется для создания промиса?',
      answer: ['Promise.create()', 'new Promise()', 'Promise.resolve()', 'Promise()'],
      correct: 1,
    },
    {
      title: 'Что делает метод `Promise.all()`?',
      answer: [
        'Ожидает завершения одного промиса.',
        'Ожидает завершения всех переданных промисов.',
        'Обрабатывает ошибки в промисах.',
        'Возвращает массив промисов.',
      ],
      correct: 1,
    },
    {
      title: 'Какой метод используется для преобразования значения в промис?',
      answer: ['Promise.wrap()', 'Promise.resolve()', 'Promise.convert()', 'Promise.cast()'],
      correct: 1,
    },
  ],
  [
    {
      title: 'Что делает функция, объявленная с ключевым словом `async`?',
      answer: [
        'Возвращает значение синхронно.',
        'Всегда возвращает `undefined`.',
        'Позволяет использовать `await` внутри функции.',
        'Преобразует функцию в обычную функцию обратного вызова.',
      ],
      correct: 2,
    },
    {
      title: 'Какой из следующих методов используется для обработки ошибок в промисах?',
      answer: ['finally()', 'catch()', 'handleError()', 'error()'],
      correct: 1,
    },
    {
      title: 'Какой из следующих вариантов кода правильно создает асинхронную функцию?',
      answer: [
        'async function myFunction() { }',
        'function async myFunction() { }',
        'myFunction() async { }',
        'function myFunction() async { }',
      ],
      correct: 0,
    },
    {
      title: 'Что произойдет, если `await` используется с неасинхронным значением?',
      answer: [
        'Возникнет ошибка типа "неверный тип".',
        'Значение будет возвращено немедленно.',
        'Код будет выполняться синхронно.',
        '`await` будет игнорироваться.',
      ],
      correct: 1,
    },
    {
      title: 'Какой из следующих операторов используется для создания промиса?',
      answer: ['Promise.create()', 'new Promise()', 'Promise.resolve()', 'Promise()'],
      correct: 1,
    },
    {
      title: 'Что делает метод `Promise.all()`?',
      answer: [
        'Ожидает завершения одного промиса.',
        'Ожидает завершения всех переданных промисов.',
        'Обрабатывает ошибки в промисах.',
        'Возвращает массив промисов.',
      ],
      correct: 1,
    },
    {
      title: 'Какой метод используется для преобразования значения в промис?',
      answer: ['Promise.wrap()', 'Promise.resolve()', 'Promise.convert()', 'Promise.cast()'],
      correct: 1,
    },
  ],
  [
    {
      title: 'Что делает функция, объявленная с ключевым словом `async`?',
      answer: [
        'Возвращает значение синхронно.',
        'Всегда возвращает `undefined`.',
        'Позволяет использовать `await` внутри функции.',
        'Преобразует функцию в обычную функцию обратного вызова.',
      ],
      correct: 2,
    },
    {
      title: 'Какой из следующих методов используется для обработки ошибок в промисах?',
      answer: ['finally()', 'catch()', 'handleError()', 'error()'],
      correct: 1,
    },
    {
      title: 'Какой из следующих вариантов кода правильно создает асинхронную функцию?',
      answer: [
        'async function myFunction() { }',
        'function async myFunction() { }',
        'myFunction() async { }',
        'function myFunction() async { }',
      ],
      correct: 0,
    },
    {
      title: 'Что произойдет, если `await` используется с неасинхронным значением?',
      answer: [
        'Возникнет ошибка типа "неверный тип".',
        'Значение будет возвращено немедленно.',
        'Код будет выполняться синхронно.',
        '`await` будет игнорироваться.',
      ],
      correct: 1,
    },
    {
      title: 'Какой из следующих операторов используется для создания промиса?',
      answer: ['Promise.create()', 'new Promise()', 'Promise.resolve()', 'Promise()'],
      correct: 1,
    },
    {
      title: 'Что делает метод `Promise.all()`?',
      answer: [
        'Ожидает завершения одного промиса.',
        'Ожидает завершения всех переданных промисов.',
        'Обрабатывает ошибки в промисах.',
        'Возвращает массив промисов.',
      ],
      correct: 1,
    },
    {
      title: 'Какой метод используется для преобразования значения в промис?',
      answer: ['Promise.wrap()', 'Promise.resolve()', 'Promise.convert()', 'Promise.cast()'],
      correct: 1,
    },
  ],
  [
    {
      title: 'Что делает функция, объявленная с ключевым словом `async`?',
      answer: [
        'Возвращает значение синхронно.',
        'Всегда возвращает `undefined`.',
        'Позволяет использовать `await` внутри функции.',
        'Преобразует функцию в обычную функцию обратного вызова.',
      ],
      correct: 2,
    },
    {
      title: 'Какой из следующих методов используется для обработки ошибок в промисах?',
      answer: ['finally()', 'catch()', 'handleError()', 'error()'],
      correct: 1,
    },
    {
      title: 'Какой из следующих вариантов кода правильно создает асинхронную функцию?',
      answer: [
        'async function myFunction() { }',
        'function async myFunction() { }',
        'myFunction() async { }',
        'function myFunction() async { }',
      ],
      correct: 0,
    },
    {
      title: 'Что произойдет, если `await` используется с неасинхронным значением?',
      answer: [
        'Возникнет ошибка типа "неверный тип".',
        'Значение будет возвращено немедленно.',
        'Код будет выполняться синхронно.',
        '`await` будет игнорироваться.',
      ],
      correct: 1,
    },
    {
      title: 'Какой из следующих операторов используется для создания промиса?',
      answer: ['Promise.create()', 'new Promise()', 'Promise.resolve()', 'Promise()'],
      correct: 1,
    },
    {
      title: 'Что делает метод `Promise.all()`?',
      answer: [
        'Ожидает завершения одного промиса.',
        'Ожидает завершения всех переданных промисов.',
        'Обрабатывает ошибки в промисах.',
        'Возвращает массив промисов.',
      ],
      correct: 1,
    },
    {
      title: 'Какой метод используется для преобразования значения в промис?',
      answer: ['Promise.wrap()', 'Promise.resolve()', 'Promise.convert()', 'Promise.cast()'],
      correct: 1,
    },
  ],
]
