# Development

Create and adjust `dev.dockerfile`.

Created `docker-compose.dev.yml`

```bash
# Does both in one command:
docker-compose -f docker-compose.dev.yml up --build

###################

# Stop everything first
docker-compose -f docker-compose.dev.yml down -v

# Rebuild without cache
docker-compose -f docker-compose.dev.yml build --no-cache

# Start fresh
docker-compose -f docker-compose.dev.yml up
```

# Production

```bash
docker-compose build && docker-compose up
# or
docker-compose up --build
```
