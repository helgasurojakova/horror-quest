# Используем официальный образ Node.js 18

FROM node:18-alpine
#FROM mirror.gcr.io/node:18-alpine


# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json (если есть) для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости через npm для PRDO
RUN npm ci --only=production

# Копируем все файлы из текущего каталога (где находится Dockerfile) в рабочую директорию в контейнере
COPY . .

RUN npm run build

# Открываем порт 3000 для веб-приложения
EXPOSE 3000

# Команда для запуска приложения при старте контейнера
CMD [ "npm", "start" ]
