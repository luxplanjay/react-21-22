# react-21-22

- Проблема: дублирующиеся и сложные данные
- Решение: нормализация состояния
- Рефакторинг страницы авторов и ответов от бекенда
- Метод `createEntityAdapter`
- Свзка методов `createSlice`, `createAsyncThunk` и `createEntityAdapter`
- Библиотека `normalizr`

## Справочники

- https://redux-toolkit.js.org/api/createEntityAdapter
- https://redux.js.org/tutorials/essentials/part-6-performance-normalization#normalizing-data
- https://redux-toolkit.js.org/usage/usage-guide#using-createentityadapter-with-normalization-libraries

## Нормализация

```js
const books = [
  {
    id: 6,
    imgUrl:
      'https://akniga.org/uploads/media/topic/2020/05/17/16/preview/4ce36fcf26e3be50c3d2_400x.jpg',
    title: 'Хребты безумия',
    genre: 'мистика',
    authorId: 3,
    author: {
      id: 3,
      name: 'Говард Лавкрафт',
    },
  },
  {
    id: 11,
    imgUrl:
      'https://akniga.org/uploads/media/topic/2019/03/22/08/preview/62ca29212117b7bdec0c_400x.jpg',
    title: 'Обратный отсчет',
    genre: 'фантастика',
    authorId: 4,
    author: {
      id: 4,
      name: 'Вячеслав Шалыгин',
    },
  },
];
```

```js
const state = {
  books: {
    ids: [6, 11],
    entities: {
      6: {
        id: 6,
        imgUrl:
          'https://akniga.org/uploads/media/topic/2020/05/17/16/preview/4ce36fcf26e3be50c3d2_400x.jpg',
        title: 'Хребты безумия',
        genre: 'мистика',
        authorId: 3,
        author: 3,
      },
      11: {
        id: 11,
        imgUrl:
          'https://akniga.org/uploads/media/topic/2019/03/22/08/preview/62ca29212117b7bdec0c_400x.jpg',
        title: 'Обратный отсчет',
        genre: 'фантастика',
        authorId: 4,
        author: 4,
      },
    },
  },
  authors: {
    ids: [3, 4],
    entities: {
      3: {
        id: 3,
        name: 'Говард Лавкрафт',
      },
      4: {
        id: 4,
        name: 'Вячеслав Шалыгин',
      },
    },
  },
};
```
