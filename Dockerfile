# Stage 1: Build the Angular app
FROM node:20.10.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --prod

# Stage 2: Set up Nginx
FROM nginx:alpine

# Copy the Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the Angular app build from the previous stage
COPY --from=build /app/dist/ipwrc-frontend /usr/share/nginx/html

# Expose ports for HTTP and HTTPS
EXPOSE 80
EXPOSE 443

# Install Certbot and Certbot Nginx plugin
RUN apk add --no-cache certbot certbot-nginx

# Start Nginx and obtain SSL certificate
CMD ["sh", "-c", "nginx -g 'daemon off;' & certbot --nginx -n -d plsvoldoende.nl --agree-tos --email davidvdw02@gmail.com && wait"]
