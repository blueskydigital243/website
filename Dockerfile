# Use the official Node.js 20 base image
FROM node:20-alpine

# Set the working directory inside the Docker image
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies
RUN yarn install --frozen-lockfile

# Copy the entire application code to the working directory
COPY . .

# Build the Nuxt.js app
RUN yarn build

# Expose the port that the Nuxt.js app will run on
EXPOSE 3000

# Set the startup command to run the Nuxt.js app
CMD ["yarn", "start"]
