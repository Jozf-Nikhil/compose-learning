# Docker Compose – Node.js and Redis

A beginner-friendly project demonstrating how to run a Node.js Express application and Redis using Docker Compose.

## Technologies Used

- Node.js 18
- Express.js
- Redis
- Docker
- Docker Compose

## Project Structure

```text
compose-learning/
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── compose.yaml
└── .dockerignore
```

## Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

Verify the installations:

```bash
node -v
npm -v
docker -v
docker compose version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

Navigate into the project:

```bash
cd compose-learning
```

### 2. Build and Start Containers

Run:

```bash
docker compose up -d
```

This command builds the application image if required and starts the services in detached mode.

### 3. Check Running Containers

```bash
docker compose ps
```

### 4. View Application Logs

```bash
docker compose logs -f
```

### 5. Access the Application

Open your browser:

```text
http://localhost:3000
```

### 6. Stop Containers

```bash
docker compose down
```

This stops and removes the containers and the Compose network.

## Understanding Docker Compose

Docker Compose allows multiple services to run together using a single YAML configuration file.

In this project, we have two services:

| Service | Description |
|---|---|
| web | Node.js Express application |
| redis | Redis database/cache service |

### Service Communication

The Node.js application connects to Redis using the hostname:

```text
redis:6379
```

Docker Compose automatically creates a network and provides DNS resolution using service names.

**Important:**

- When Node.js runs inside Docker Compose, use `redis` as the hostname.
- When Node.js runs directly on Windows, use `localhost` as the hostname, provided Redis port 6379 is published.

## Useful Docker Compose Commands

| Command | Description |
|---|---|
| `docker compose up -d` | Start services in background |
| `docker compose up --build -d` | Rebuild image and start services |
| `docker compose ps` | List Compose containers |
| `docker compose logs -f` | Follow service logs |
| `docker compose stop` | Stop services without removing containers |
| `docker compose start` | Start stopped containers |
| `docker compose restart` | Restart services |
| `docker compose down` | Stop and remove containers and network |
| `docker compose down -v` | Remove containers, network and named volumes |

## Important Docker Concepts Learned

1. Docker Image – A packaged template used to create containers.
2. Docker Container – A running instance of an image.
3. Dockerfile – Instructions for building a Docker image.
4. Docker Compose – A tool for managing multiple related containers.
5. Docker Network – Allows containers to communicate with each other.
6. Service Discovery – Containers can communicate using Compose service names.
7. Detached Mode – Running containers in the background using `-d`.

## Troubleshooting

### Error: Cannot find module 'express'

Install project dependencies:

```bash
npm install
```

### Error: getaddrinfo ENOTFOUND redis

This happens when the Node.js application runs directly on Windows and tries to connect using the Docker service hostname `redis`.

Solution:

- Run Node.js and Redis together using Docker Compose, or
- Change the Redis hostname to `localhost` when running Node.js locally.

## Learning Objective

The objective of this project is to understand how Docker Compose manages multiple services, how Node.js communicates with Redis, and how container networking works in a development environment.

---

**Author:** Jozf-Nikhil

**Project:** Docker Compose Learning