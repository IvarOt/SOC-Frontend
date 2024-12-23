# Use the specified Node.js version as the base image
FROM node:22.12.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set build argument for environment
ARG ENVIRONMENT=production

# Set environment variables (customize as needed)
ENV NODE_ENV=${ENVIRONMENT}

# Copy the appropriate .env file based on the environment
COPY .env.${ENVIRONMENT} .env

# Build the application (assuming you have a build script in package.json)
RUN npm run build

# Expose the port (customize as needed)
EXPOSE 4173

# Start the application (assuming you have a start script in package.json)
CMD ["npm", "start"]