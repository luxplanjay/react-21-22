# react-21-22

- Концепция SPA (Single Page Application) и CSR (Client Side Rendering).
- HTML5 History API
- Компонент `BrowserRouter`
- Меню навигации
  - Компонент `Link`
  - Компонент `NavLink`
  - Оформление и проп `exact`
- Компонент `Route`
- Обработка 404
- Компонент `Switch`
- Динамические URL-параметры
  - Делаем вложенную навигацию c `useRouteMatch`
  - Свойство `match.url`
  - Маршрут одной книги с `useParams`
- Вложенные маршруты
  - Вложенная навигация по авторам
  - Вложенный маршрут автора с `match.path`

## Маршруты

- `/` - приветственная страница
- `/authors` - все авторы
- `/authors/:authorId` - автор и его книги
- `/books` - все книги
- `/books/:bookId` - одна книга
