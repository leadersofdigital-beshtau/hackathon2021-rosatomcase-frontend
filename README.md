## Основной стек технологий
* HTML, CSS, JavaScript
* SASS, PostCSS
* Webpack, Babel
* Vue
* Git

## Демо
Демо сервиса доступно по адресу: http://217.13.223.130:3389

## Среда запуска
Для запуска frontend-части требуется установленный web-сервер (apache, nginx) и программная платформа NodeJS.


## Установка

### Определение переменных окружения

Необходимо в корне проекта создать файл окружения (.env, .env.local) и в нем определить следующее содержимое:

~~~
VUE_APP_API_HOST=http://217.13.223.130:3389/Hakaton_09_2021_odata/odata/standard.odata/
VUE_APP_DATA_SOURCE=1C
~~~

### Установка зависимостей проекта

Установка зависимостей осуществляется с помощью [NPM](https://www.npmjs.com/) и [NodeJS](https://nodejs.org/en/).

После этого необходимо выполнить команду в директории проекта:
~~~
npm install
~~~

Для запуска локального dev-сервера необходимо выполнить команду:
~~~
npm run serve
~~~

Для сборки frontend-приложения в режиме production следует выполнить:
~~~
npm run build
~~~
Дистрибутив собирается в папку dist. Содержимое папки следует разместить на web-сервере

## Разработчики

* Соколов Артем, fullstack-разработчик https://t.me/artyomsklv
* Нагорняк Вадим, front-end-разработчик https://t.me/vdmngrnk