# Индивидуальная Работа №2

## Инструкции по Запуску Проекта
1. Склонируйте репозиторий на свой локальный компьютер.
2. Откройте файл `index.html` в вашем браузере.

## Описание Индивидуальной Работы
Проект полностью разработан индивидуально. Работа включает создание HTML и CSS для структуры и стиля страницы, а также написание JavaScript для интерактивности.

### Краткая Документация к Методам в Файле `activity.js`
#### `displayActivity(newActivityContent)`
- **Описание**: Функция отображает переданное содержимое активности в элементе с идентификатором `activity` на веб-странице.
- **Параметры**:
  - `newActivityContent`: строка, содержание активности, которое будет отображено пользователю.
- **Возвращает**: Ничего (void).

#### `displayErrorMessage()`
- **Описание**: Функция отображает сообщение об ошибке в элементе с идентификатором `error-message` на веб-странице.
- **Параметры**: Нет.
- **Возвращает**: Ничего (void).

#### `getRandomActivity()`
- **Описание**: Асинхронная функция, выполняющая запрос к внешнему API (`https://www.boredapi.com/api/activity/`) для получения случайной активности. Возвращает содержимое активности, полученное от API.
- **Параметры**: Нет.
- **Возвращает**: Промис, который разрешается со строкой содержания активности.

#### `updateActivity()`
- **Описание**: Асинхронная функция, которая использует `getRandomActivity()` для получения новой активности и отображения её на странице. После успешного выполнения, функция планирует следующий вызов `updateActivity()` через 60 секунд.
- **Параметры**: Нет.
- **Возвращает**: Промис, который разрешается с `void`.


## Примеры Использования Проекта
- **Отображение Активности**: При каждом обновлении страницы или по таймеру каждую минуту на странице отображается новая активность.
<img width="547" alt="Снимок экрана 2024-04-15 в 20 43 02" src="https://github.com/svetlanov/svetlanov-js-individual2/assets/166555611/ca229e2a-8ed2-4f86-8830-50fc2d42c71f">


- **Обработка Ошибок**: В случае ошибки в запросе на странице появится сообщение "К сожалению, произошла ошибка".
<img width="487" alt="Снимок экрана 2024-04-15 в 20 43 58" src="https://github.com/svetlanov/svetlanov-js-individual2/assets/166555611/5621d51d-6079-4777-96fe-955f760330d3">


## Ответы на Контрольные Вопросы

1. **Какое значение возвращает функция `fetch`?**
   Функция `fetch` возвращает `Promise`, который разрешается с объектом `Response` после завершения HTTP-запроса. Объект `Response` предоставляет доступ к заголовкам, статусу и телу ответа.

2. **Что представляет собой `Promise`?**
   `Promise` представляет собой объект, используемый для отложенных и асинхронных вычислений. `Promise` может находиться в одном из трёх состояний: ожидание (`pending`), выполнено (`fulfilled`) или отклонено (`rejected`).

3. **Какие методы доступны у объекта `Promise`?**
   Основные методы объекта `Promise` включают:
   - `then()`: добавляет обработчики выполнения и отказа к промису.
   - `catch()`: добавляет обработчик отказа промиса.
   - `finally()`: добавляет обработчик, который будет выполнен вне зависимости от того, был промис выполнен успешно или был отклонён.
   - `Promise.all()`: возвращает промис, который выполнится, когда все промисы в итерируемом объекте будут успешно выполнены, или отклонится, если хотя бы один из промисов будет отклонён.
   - `Promise.race()`: возвращает промис, который выполнится или отклонится, как только один из промисов в итерируемом объекте выполнится или отклонится.
   - `Promise.resolve()`: возвращает промис, который уже выполнен с заданным значением.
   - `Promise.reject()`: возвращает промис, который уже отклонён с заданной причиной.

4. **Каковы основные различия между использованием `async` / `await` и `Promise`?**
   - `Async` / `await` позволяет писать асинхронный код, который выглядит как синхронный, что упрощает его чтение и понимание.
   - При использовании `async` / `await`, `async` функция всегда возвращает `Promise`. Ключевое слово `await` используется для ожидания результата промиса, что делает код чище и избавляет от необходимости использования `then()` и `catch()` для управления цепочками промисов.
   - В то время как `Promise` использует `.then()` и `.catch()` для обработки результатов или ошибок, `async` / `await` позволяет использовать стандартные конструкции языка, такие как `try` и `catch`, для обработки исключений.


## Список Использованных Источников
https://learn.javascript.ru/async

## Дополнительные Важные Аспекты
- Проект предназначен для демонстрации работы с внешними API и обработки асинхронных запросов в JavaScript.
