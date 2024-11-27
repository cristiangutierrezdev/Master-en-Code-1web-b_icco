# Usar la imagen oficial de Node como base (versión compatible con structuredClone)
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Usar Nginx para servir el contenido estático
FROM nginx:alpine

# Copiar los archivos construidos desde la imagen anterior
COPY --from=0 /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
