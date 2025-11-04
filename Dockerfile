
FROM node:20-bullseye

# Use Debian-based image for broader tool compatibility (pnpm/corepack, native deps)
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy manifest files first to leverage Docker cache
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build the Next.js app
RUN pnpm build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start the production server
CMD ["pnpm", "start"]
