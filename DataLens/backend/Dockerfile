# Basis-Image mit Node.js
FROM node:20

# Arbeitsverzeichnis im Container erstellen
WORKDIR /app

# Kopieren der package.json und package-lock.json
COPY package.json ./

# Abhängigkeiten installieren
RUN npm install

# Kopiere den restlichen Code
COPY . . 

# Starte die Anwendung
CMD ["npm", "start"]