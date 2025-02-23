## Интеллектуальная игра "По волнам с отрядами"

Этот проект я делал для открытия школы вожатых от организации [МосРСО](https://vk.com/mosrso_spo)

## Демонстрация

Игра доступна по [ссылке](https://rso-game.vercel.app/)

## Запуск проекта локально

Для запуска игры, выполните следующие команды в терминале Windows/Linux. Перед этим необходимо установить [Node.js](https://nodejs.org/en) и [Git](https://git-scm.com/downloads)

```bash
git clone https://github.com/PosikBoy/rso-game

cd ./rso-game

npm i

npm run build

npm run start
```

Далее откройте ссылку [http://localhost:3000](http://localhost:3000) в браузере, игра будет доступна локально.

## О проекте

Проект сделан с использованием фреймворка [Next.js](https://nextjs.org/). Это мой любимый фреймворк.

В качестве State-Manager используется Redux-Toolkit. Redux-Persist для сохранения состояния в локальном хранилище.

Для анимаций страниц используется motion.

Верстка сделана только для компа, в частности для большого экрана на сцене Московского Политехнического Университета. Поэтому на телефоне и на 16:9 мониторе открывается достаточно криво. Решение: делайте масштаб браузера 67%

## Спасибо за прочтение!

Пусть ваш сегодняшний день будет наполнен яркими моментами!
