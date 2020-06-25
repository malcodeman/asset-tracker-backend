# Asset tracker backend

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Simple REST API.

## Usage

.env:

```
DB_URL="mysql://root:toor@localhost:3306/asset_tracker"
PORT=4000
PRIVATE_KEY="fakepassword1"
NODE_ENV="development"
```

```
yarn install
yarn start
```

Database commands:

```
yarn run db:seed
```
