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



### Modify the configuration to run the demo

Copy content of .sample.env to .env

```bash
    $ cp  .sample.env .env
    $ nano .env
```
Place your Client ID and Client Secret in the .env file.

In ``public/index.html`` you will need to replace ```<CLIENT_ID>``` with your ClientID here:
```
<script>
    // PLACE YOUR Gusto CLIENT_ID HERE
    const client_id = '<CLIENT_ID>';
    ...
</script>
```

## Running the app
```
cp sample.env .env
node index.js
```

On the browser navigate to 

```js
http:localhost:8080
```
