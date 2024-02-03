# Stage 1: Build the Angular app
FROM node:20.10.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --prod

# Stage 2: Set up Nginx
FROM nginx:alpine

# Install SCP (Secure Copy)
RUN apk add --no-cache openssh-client

# Create directory for SSL certificates
RUN mkdir -p /etc/letsencrypt/live/plsvoldoende.nl/

# Copy SSL certificates from GitHub Actions workspace during the build
COPY ssl-certificates/* /etc/letsencrypt/live/plsvoldoende.nl/

# Copy the Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the Angular app build from the previous stage
COPY --from=build /app/dist/ipwrc-frontend /usr/share/nginx/html

# Expose ports for HTTP and HTTPS
EXPOSE 80
EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
