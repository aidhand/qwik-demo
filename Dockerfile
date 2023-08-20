FROM node:alpine

# Create and set working directory
RUN mkdir /srv/app && chown -R node:node /srv/app
WORKDIR /srv/app

# Copy package and lock files
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install dependencies
USER node
RUN npm install -g pnpm
RUN pnpm install

# Copy source code
COPY --chown=node:node . .

# Build app
RUN pnpm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["pnpm", "run", "serve"]
