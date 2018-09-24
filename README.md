# Colba

This is a test

## WEB

First download and install repo:

```sh
git clone
cd colba
npm install
```

## API

We use json-server to mock api:

```sh
Download and install [json-server](https://github.com/typicode/json-server)
cd colba/api
json-server --watch db.json --routes routes.json --port 3001
```

## Routes

```sh
localhost:3000/profile/1
localhost:3000/profile/2
```

## Test

This repo use Jest to test

```sh
npm jest
```
