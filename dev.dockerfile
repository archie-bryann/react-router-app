FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy app
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]