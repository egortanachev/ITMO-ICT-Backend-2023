# ITMO-ICT-Backend-2023
Курс по бэкенд-разработке в среде Node.JS для Университета ИТМО

<!-- [Таблица с баллами](https://docs.google.com/spreadsheets/d/1t52sm9XTGNVjLG-GzBLlFManeq1gZE7NQf1kNQtQIKA/edit?usp=sharing) -->

# 1. Введение в проблематику серверной веб-разработки
## 1.1. Знакомство со средой Node.JS, пакетным менеджером npm

[Вводная презентация](https://docs.google.com/presentation/d/1jPnw4sra6DSnoHs6OIp7LF9t68blBGKu_FKxSyGUX3k/edit?usp=sharing)

**ДЗ1** (срок: 06.03.2023, для 401й группы - 27.02.2023)

Задание:

- Установка npm (8.1.0), node.js (16.13.0)
- Инициализация npm-пакета
- Установка express
- Удаление express/попытка его обновить
- Написание кастомной команды для npm, чтобы можно удалить express командой “npm run rme”

Необходимо сделать отчёт по [шаблону](https://docs.google.com/document/d/1aAUawxv6_5k_Na7bLqrfUFANodyl89uPHXY4IKXS8WE/edit?usp=sharing)

## 1.2. Знакомство с микрофреймворком Express
## 1.3. Знакомство с ORM Sequelize

[Презентация Express + Sequelize](https://docs.google.com/presentation/d/1QAyV4WYFkILzhd-f13J06z94X6vAmWrWlfM6RNvXiGo/edit?usp=sharing)

[Документация Express](http://expressjs.com/en/starter/hello-world.html)
[Документация Sequelize](https://sequelize.org/master/)
[Документация sequelize-cli](https://openbase.com/js/sequelize-cli/documentation)

[Пример, который делали на паре](https://github.com/kantegory/mentoring/tree/master/14_express_example)

**ДЗ2** (срок 13.03.2023)

Задание:

- Продумать свою собственную модель пользователя
- Реализовать набор из CRUD-методов для работы с пользователями средствами Express + Sequelize
- Написать запрос для получения пользователя по id/email

Необходимо сделать отчёт по [шаблону](https://docs.google.com/document/d/1aAUawxv6_5k_Na7bLqrfUFANodyl89uPHXY4IKXS8WE/edit?usp=sharing)

## 1.4. Typescript: основы языка
## 1.5. Автоматизация рутинных действий средствами Makefile

[Презентация "Основы TypeScript, работа с Makefile"](https://docs.google.com/presentation/d/11LDwQ0tV_YmnsBNXtNYqB2yoEwfEK8UkzYIH6r0G3GI/edit?usp=sharing)
[Презентация "Основы TypeScript, Sequelize + TypeScript"](https://docs.google.com/presentation/d/14uSAQEZj6Lk-VC5rmvT0Gi1XWO1EX24g3ljL1u4KECg/edit?usp=sharing)

[Статья по основам синтаксиса на Хабре](https://habr.com/ru/company/nix/blog/301002/)  
[Статья на Nuances of Programming](https://nuancesprog.ru/p/14210/)  
[Карманная книжка по TS](https://typescript-handbook.ru/docs/ts-1/)  
[Видео от Хекслет про утилиту make](https://www.youtube.com/watch?v=pK9mF5aK05Q)  
[Makefile для самых маленьких, но это больше про C](https://habr.com/ru/post/155201/)  
[Введение в make: история](http://pushorigin.ru/bash/make)  

[Пример, который делали на паре](https://github.com/kantegory/mentoring/tree/master/15_express_typescript_example)

Источники по поводу использования typescript в ORM:

[Документация пакета sequelize-typescript](https://www.npmjs.com/package/sequelize-typescript)  
[Мануал по использованию typescript внутри sequelize](https://sequelize.org/master/manual/typescript.html)  
[Документация TypeORM](https://typeorm.io/) (можно использовать в качестве альтернативы Sequelize)  

**ЛР1** (срок: 17.04.2023)

Нужно написать свой boilerplate на express + sequelize / TypeORM + typescript.

Должно быть явное разделение на:
- модели
- контроллеры
- роуты
- сервисы для работы с моделями (реализуем паттерн “репозиторий”)

Пример: https://github.com/kantegory/express-sequelize-boilerplate 

Другие примеры можно поискать на github, набрав в поиске: "express boilerplate".

**ДЗ3** (срок: 17.04.2023)

Составьте Makefile, который будет автоматизировать ваши рутинные действия, такие как:

- запуск приложения;
- установка зависимостей и сборка приложения.

# 2. Тестирование, разработка и документирование RESTful API

## 2.1 REST, RESTful, SOAP, GraphQL

[Презентация: REST, RESTful, SOAP, GraphQL](https://docs.google.com/presentation/d/1ybKVSHdytRT0kugKoyy5t19WOaevwJBxrx7u1hg33NE/edit?usp=sharing)  
[Видео](https://www.youtube.com/watch?v=we4NVJtY_4E)

**ЛР2** (срок: 01.05.2023)

В рамках данной лабораторной работы Вам предложено выбрать один из нескольких вариантов. Выбранный вариант останется единым на весь курс и будет использоваться в последующих лабораторных работах.

По выбранному варианту необходимо будет реализовать RESTful API средствами express + typescript (используя ранее написанный boilerplate).

<details>
  <summary>Доступные варианты</summary>

1) Платформа для проведения онлайн-хакатонов (пример: https://devpost.com)

Есть несколько сущностей: жюри хакатона, участники, главный администратор, кураторы задач. У участников есть возможность выбрать одну из задач (регистрируется и имеет доступ к системе только капитан команды), после выбора задачи капитан может предложить решение, скачать какие-то файлы, которые ему предложены, посмотреть на ссылки, которые есть в задаче.

Ссылки и файлы к задачам добавляют кураторы задач через отдельный админский интерфейс, кроме того у них есть доступ к решениям, как и у членов жюри. Куратор может назначаться только на одну задачу и проводить консультации (например, в Zoom, ссылку на консультацию он крепит к самой задаче и это выводится у команды в ЛК). Жюри может оценивать решения участников, с комментариями, сортировать решения по дате публикации.

Капитан при регистрации заполняет только свои учётные данные, после в кабинете команды — он может заполнить данные по каждому участнику, название команды и какой-нибудь условный девиз/описание.

У главного админа есть доступ ко всему, но он не может добавлять команды и редактировать их решения. Так же, не имеет права оценивать решения участников. Только просматривать. Ещё он может создавать задачи, которые потом будут дополнять кураторы. Ну и назначать кураторов на задачи, разумеется.

***Поскольку этот вариант является довольно объёмным и сложным — для его выполнения можно объединиться в команды по 2-3 человека, но нужно об этом заранее предупредить.***

2) Платформа для поиска профессиональных мероприятий (пример: https://www.meetup.com/ru-RU/)

- Вход

- Регистрация

- Поиск мероприятия (фильтрации по типу мероприятия, месту проведения)

- Календарь ближайших мероприятий

- Промо-страница для организаторов мероприятия

- Личный кабинет пользователя со списком мероприятий, на которые он записывался

3) Сайт криптобиржи (пример: https://www.coinbase.com/ru/)

- Вход

- Регистрация

- Портфель пользователя с указанием различных криптовалют и их количеством

- Графики роста криптовалют

- Поиск по криптовалютам с возможностью фильтрации по дате добавления на биржу

4) Сайт администратора интернет-магазина

- Вход

- Регистрация

- Учёт товара на складе

- Графики по продажам тех или иных товаров, по общей выручке предприятия

- Управление сотрудниками

5) Любое API, которое вам интересно реализовать

Да, всё верно. Вы можете предложить свой вариант, необходимо отдельно его согласовать со мной.

Он **обязательно** должен включать в себя следующий функционал:

- Вход

- Регистрация

- Личный кабинет пользователя

- Поиск с возможностью фильтрации
</details>

## 2.2 Тестирование, документация

[Презентация](https://docs.google.com/presentation/d/1VDH4LND0R4vn0WBGt96XdJfZEH3GxEESnGS0X3KPT9Q/edit?usp=sharing)

**ДЗ4** (срок: 08.05)

Документирование API из ЛР2 средствами Swagger/Postman

**ДЗ5** (срок 08.05)

Тестирование API из ЛР2 средствами Postman

# 3. DI, IoC, Развёртывание, микросервисы, CI/CD

## 3.1 DI, IoC

[Презентация по DI, IoC](https://docs.google.com/presentation/d/1yXC0oczjMlvYeFOKedzOLcct_C1FoLJl1kLXeXAu5DE/edit?usp=sharing)

## 3.2 Микросервисы

[Презентация по микросервисам](https://docs.google.com/presentation/d/1pwV0WHDG2QoV5GK067dd1nbq4_RDQUambryIfVjWQnw/edit?usp=sharing)

**ЛР3** (срок: 15.05.2023)

Необходимо реализовать отдельный микросервис, выполняющий какую-либо содержательную функцию из всего арсенала функций вашего приложения.

## 3.3 Docker, docker compose, docker swarm

[Презентация по docker](https://docs.google.com/presentation/d/1QhqPb2nmiwmzZ_e6pcAHAGHRHlep1i04OEmE8PsKRxA/edit?usp=sharing)

**ЛР4** (срок: 29.05.2023)

Необходимо упаковать ваше приложение в docker-контейнеры и обеспечить сетевое взаимодействие между различными частями вашего приложения. Делать это можно как с помощью docker-compose так и с помощью docker swarm. При разумном использовании swirl вы получите дополнительные баллы.


## 3.4 CI/CD

Вводную информацию по Github Actions и Gitlab CI можно подчерпнуть из документации:

- [Документация по Github Actions](https://docs.github.com/en/actions)
- [Документация по Gitlab CI](https://docs.gitlab.com/ee/ci/)

**ДЗ6** (срок: 18.06.2023)

Необходимо настроить автодеплой (с триггером на обновление кода в вашем репозитории, на определённой ветке) для вашего приложения на удалённый сервер с использованием Github Actions или Gitlab CI (любая другая CI-система также может быть использована). 

В случае, если у вас нет возможности арендовать удалённый сервер, можно воспользоваться временной квотой в Yandex.Cloud, или любым другим аналогичным сервисом, на котором предоставляют бесплатные ресурсы на время тестирования. В том же случае, если у вас все эти квоты уже исчерпаны и нет возможности арендовать удалённый сервер самостоятельно - обратитесь ко мне лично, постараюсь предоставить вам мощности, но не делайте этого в последний момент, так шансов у вас крайне мало.
