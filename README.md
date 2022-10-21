# react-21-22

- Зачем нужны JS-фреймворки?
- [Концепция Virtual DOM](https://illustrated.dev/react-vdom)
- [create-react-app](https://create-react-app.dev/)
  - webpack
  - babel
  - eslint
  - react
  - react-dom
- React-элементы и `React.createElement()`
  - Тип элемента
  - Пропсы
  - children
- JSX как шаблонизатор
  - [Новый трансформ](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
  - Выражения в JSX.
  - Рендер по условию с `&&` и `?`
- Компоненты-функции
  - Имя маленькой в JSX - строка, с большой - имя переменной.
- Передача данных через Props
  - Значения пропсов по умолчанию
  - Дефолтные локальные изображения.
- [Инструменты разработчика - React DevTools](http://fecore.net.ua/books/rq7s2k-react/lesson-01/#react-devtools)
- [Пакет prop-types](https://www.npmjs.com/package/prop-types)
- Свойство `propTypes`
- Работа с коллекциями, ключи
- Основы композиции компонентов, потомки (props.children). Делаем панель.
- [Строгий режим](https://ru.reactjs.org/docs/strict-mode.html)

## Компонент `Painting`

```html
<div>
  <img src="" alt="" width="480" />
  <h2></h2>
  <p>Автор: <a href=""></a></p>
  <p>Цена: кредитов</p>
  <p>Доступность: заканчивается или есть в наличии}</p>
  <button type="button">Добавить в корзину</button>
</div>
```

## Компонент `PaintingList`

```html
<ul>
  <li>Painting</li>
  ...
</ul>
```

## Компонент `Section`

```html
<div style="outline: 1px solid tomato;">
  <h2></h2>
  Контент
</div>
```
