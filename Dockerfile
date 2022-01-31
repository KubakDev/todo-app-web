# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16 as build

# Set the working directory
WORKDIR /usr/local/app

COPY package*.json .

# Install all the dependencies
RUN npm ci

# Add the source code to app
COPY ./ /usr/local/app/

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.20-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/todo-app-web /usr/share/nginx/html

