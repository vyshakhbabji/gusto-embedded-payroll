# OAuth demo
Sample app to show how oauth works for creating access token for Gusto Embedded Payroll API

## Prerequisites
* NPM installed locally
* Node.js installed locally

## Installation
* Clone the repository `git clone [this repository]`
* Install the dependency

```text
cd [this repository]
npm install
```

## Running the app

Copy the sample.env to .env and fill in the values for the following variables:
```text
PORT=8080
CLIENT_ID=[REPLACE WITH CLIENT_ID]
CLIENT_SECRET=[REPLACE WITH CLIENT_SECRET]
BASE_URL=https://api.gusto-demo.com/v1
```
```
cp sample.env .env
node index.js
```


