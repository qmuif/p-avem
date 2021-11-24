# Avem (avem-player-frontend)

Плеер для музыки Вконтакте

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```


# Структура проекта

```
+-- deployment - конфигурация деплоя для CI/CD
+-- public - базовое наполнение
|   +-- icons - иконки для PWA
|   +-- robots.txt - можно добавить для работы индексации
+-- src
|   +-- assets - вспомогательные файлы картинки/иконки/...
|   +-- boot - файлы запускаемые до инициализции приложения
|   | +-- axios.js - конфигурация axios
|   | +-- dexie.js - конфигурация библиотеки для работы с indexBD
|   | +-- sentry.js - конфигурация для монтиоринга ошибок
|   +-- components
|   | +-- layouts - Переисользуемые или вспомогательные vue компоненты
|   | +-- services - Переиспользуемые сервисы с использованием Composition API
|   | | +-- initAudio.js - инициализация модуля для работы с аудиозаписями
|   | | +-- initAudioLoader.js - инициализация модуля загруки аудиозаписей
|   | | +-- initMediaSession.js - инициализация модуля для Media Session API
|   | | +-- initPlayer.js - инициализация модуля для работы плеера
|   | | +-- initSettings.js - инициализация модуля настроек
|   | | +-- useAudio.js - сервис работы с аудиозаписями
|   | | +-- useAudioLoader.js - сервис загрузки аудиозаписей
|   | | +-- useAuth.js - сервис для работы с авторизацией и JWT
|   | | +-- usePlayer.js - сервис для работы с плеером
|   | | +-- usePlaylist.js - сервис для работы с плейлистами
|   | | +-- useSettings.js - сервис для работы с настройками приложения
|   +-- config - парсинг env конфигурации
|   +-- layouts - обертки для страниц или компонентов
|   +-- pages - страницы приложения
|   +-- plugins - вспомогательные функции для упрощения разработки
|   +-- router - роутинг приложения,
|   | +-- middlewares - промежуточные функции для проверки доступов
|   | +-- index.js - логика роутинга
|   | +-- routes.js - карта роутинга
|   +-- store - хранилище, структура из базового Quasar store
|   +-- css - CSS/SSAS стили проекта
+-- src-pwa - кастомная конфигурация PWA
... Вспомогателньая конфигурация проекта
```
