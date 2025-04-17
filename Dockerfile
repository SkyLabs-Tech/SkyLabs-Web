# Stage 1: Build the React application
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the production-ready React app
RUN npm run build

# Stage 2: Serve the built application with Nginx
FROM nginx:alpine

# Set environment variable for the default port
ENV PORT=8080

# Copy the built React app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Ensure the required port is exposed
EXPOSE 8080

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
