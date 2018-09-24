# Colba

This is a test

## WEB

First download and install repo:

```sh
git clone
cd colba
npm install
```

## Routes

```sh
localhost:3000/profile/1
localhost:3000/profile/2
```

## API

We use json-server to mock api:
First downloadd and install [json-server](https://github.com/typicode/json-server)

```sh
cd colba/api
json-server --watch db.json --routes routes.json --port 3001
```

## Test

This repo use Jest to test

```sh
npm jest
```
