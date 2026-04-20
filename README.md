# Reverse-proxy на Nginx + Node.js приложение

## Как запустить проект

1. Убедиться в установке docker:
  ```bash
  docker --version
  ```

2. Склонировать репозиторий и перейти в папку проекта:
  ```bash
   git clone https://github.com/Vitaliy-Yashin/task.git
   cd task
  ```

3. Перейти в папку backend и собрать Docker-образ:        
  ```bash
  cd backend
  docker build -t backend .
  ```

4. Вернуться в корень проекта и запустить контейнеры:
  ```bash
  cd ..
  docker compose up -d
  ```

## Как проверить результат
1. Посмотреть логи приложения   
  ```bash
  docker logs backend
  # Ожидаемый вывод: сервер запущен на порту 5000
  ```
2. Посмотреть логи nginx
  ```bash
  docker logs nginx
  # Ожидаемый вывод: ошибок нет
  ```
3. Проверить резултат работы  
  ```bash
  curl http://localhost (или ip адрес сервера)
  # Ожидаемый вывод: текст приветствия
  ```


## Как работает схема  
1. Nginx слушает порт 80 на хосте.

2. При запросе nginx перенаправляет (proxy_pass) трафик на контейнер backend по порту 5000 внутри Docker-сети.

3. Backend обрабатывает запрос и возвращает ответ через nginx клиенту.

