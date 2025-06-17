# Bookshelf

Приложение для поиска и просмотра электронных книг, интегрированное с [Google Books API](https://developers.google.com/books).

## Deployment

[Deploy](https://bookshelfsearch.netlify.app/)

<img src='./src/assets/images/bookshelf_preview.png' alt="preview">

## Technologies

- Typescript
- React
- React-Redux, Redux Toolkit (createAsyncThunk для асинхронных запросов, redux-persist для сохранения состояния)
- SCSS (Sass)
- Custom React Hooks
- React-router-dom
- Vite
- ESLint, Prettier
- Netlify

## Features

- Поиск книг по названию, автору или ключевым словам
- Сортировка результатов по языку, релевантности, цене, полноте текста
- Просмотр информации о книге (автор, издательство, описание)
- Предпросмотр книги
- Переход на страницу книги на сервисе Google Books
- Пагинация
- Сохранение книг в список избранного (localStorage)
- Подсчёт стоимости книг в списке избранного
- Кастомный хук useFavorites для управления списком избранного

## More details

### Routing

- Главная страница с результатами поиска
- Страница "Favorites"
- Страница "Not found"

### State Management

- slices для организации состояний
- createAsyncThunk для запросов к API
- redux-persist для сохранения состояния и списка избранного

### Loading & Error Handling

- Скелетон при загрузке книг
- Спиннер при загрузке списка избранного и предпросмотра книги
- Сообщение, если книги не найдены
- Сообщение, если книги по запросу закончились

### Performance Optimizations

- Lazy Loading страниц
- useMemo для мемоизации обложек (thumbnails) книг

### Styling and Responsiveness

- Адаптивная вёрстка до 360px ширины экрана (SCSS-модули)
- Адаптив для модальных окон

### Error Handling in API

- **API возвращает дубликаты книг**. Реализована фильтрация книг с одинаковым id на уровне редьюсера.

- **API исключает массив items из ответа, если книги заканчиваются**. Добавлен дополнительный статус 'NO_MORE_BOOKS' для обработки этого случая.

## How to start project

in the project directory enter:

```bash
npm install
```

create .env file in the root directory and specify:

```
VITE_GOOGLE_BOOKS_API_KEY=your_api_key
```

and then run in dev mode:

```bash
npm run dev
```

build the project:

```bash
npm run build
```

production mode:

```bash
npm run serve
```
