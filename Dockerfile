# Stage 1: Build the Angular app
FROM node:20.10.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --prod

# Stage 2: Set up Nginx and obtain SSL certificate
FROM nginx:alpine

# Copy the Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the Angular app build from the previous stage
COPY --from=build /app/dist/ipwrc-frontend /usr/share/nginx/html

# Expose ports for HTTP and HTTPS
EXPOSE 80
EXPOSE 443  # Expose port for SSL

# Install Certbot
RUN apk add --no-cache certbot

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
