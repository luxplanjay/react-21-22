# react-21-22

- [Настраиваем линтинг перед коммитом](https://github.com/goitacademy/react-lint-config)
- [Абсолютные импорты](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)
- Распыление пропсов на примере `PaintingList` и `Painting`
- Нормализация стилей:
  - [PostCSS Normalize](https://create-react-app.dev/docs/adding-css-reset)
  - [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- Ванильный CSS и препроцессоры
- Инлайн стили
- CSS-модули
  - Композиция с `composes`
  - Переменные
- CSS in JS
- Про библиотеки компонентов

## Компонент ColorPicker

```html
<div class="ColorPicker">
  <h2 class="ColorPicker__title">Color Picker</h2>
  <div>
    <span class="ColorPicker__option"></span>
  </div>
</div>
```

## Компонент Container

```html
<div class="Container">Дети</div>
```

## Компонент Alert

Свойство `type` может быть только `success`, `warning` или `error`.

```html
<p role="alert" class="Alert">текст</p>
```
