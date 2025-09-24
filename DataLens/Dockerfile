# Schritt 1: Build-Stage mit Node.js

# Nutzt Node.js, um das Frontend zu bauen.
FROM node:20 AS build

# Setzt das Arbeitsverzeichnis.
WORKDIR /app

# Kopiert die package.json und die .env
COPY package*.json ./
COPY .env .env

# Installiert die Abhängigkeiten.
RUN npm install

# Kopiert den Quellcode und baut das Projekt.
COPY . .
RUN npm run build

# Schritt 2: Produktions-Stage mit Nginx

# Nutzt Nginx als Webserver für die gebaute App.
FROM nginx:alpine

# Kopiert die gebaute aPP INS Nginx Standardverzeichnis.
COPY --from=build /app/dist /usr/share/nginx/html

# Öffnet Port 80
EXPOSE 80

# Startet Nginx
CMD [ "nginx", "-g", "daemon off;" ]
