# Stage 1: Build
FROM node:20.16.0 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy project files
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve
FROM node:20.16.0 AS runner

WORKDIR /app

# Install a lightweight HTTP server for static files
RUN npm install -g serve

# Copy build output from builder stage
COPY --from=builder /app/dist ./dist

# Expose port (Vite default preview port is 3004)
EXPOSE 3000

# Run the preview server
CMD ["serve", "-s", "dist", "-l", "3000"]