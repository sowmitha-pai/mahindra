# Use the official Node.js image with version 16
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port your app is running on
EXPOSE 3003

# Command to run your application
CMD ["node", "index.js"]
