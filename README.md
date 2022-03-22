Basic Nest RESTApi Application with JWT authentication and basic NESTJS concepts.

## TechStack
-- NestJS
-- Prisma (ORM for Database)
-- Passport (JWT authentication)
-- argon2 (Password Hashing)
-- pactum (e2e Testing)
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Running Database

```bash
# runs postgress sql in background
$ docker compose up dev-db -d
```
## Tutorial

https://www.youtube.com/watch?v=GHTA143_b-s

## License

Nest is [MIT licensed](LICENSE).
