# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app
# ENV CHOKIDAR_USEPOLLING=true

# Copy package.json and package-lock.json to /app
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . /app/

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3001

# Start the application
CMD ["npm", "run", "start"]
