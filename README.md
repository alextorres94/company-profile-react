#Company Profile React

This is a test

## WEB

First download and install repo:

```sh
git company-profile-react
cd company-profile-react
npm install
```

## API

We use json-server to mock api:
First downloadd and install [json-server](https://github.com/typicode/json-server)

```sh
cd company-profile-react/api
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
