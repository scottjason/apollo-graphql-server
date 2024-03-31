# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

RUN pnpm prune --prod

# Final stage
FROM node:18-alpine

WORKDIR /app

# Copy only the production dependencies to the final image
COPY --from=builder /app/node_modules ./node_modules

# Copy the built application to the final image
COPY --from=builder /app/dist ./dist

EXPOSE 4000

# Command to start the application
CMD ["node", "dist/index.js"]
