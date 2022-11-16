# SDK Usage Demo

This demo shows how to use the SDK to create a simple application that uses the SDK to create a new user and then log in as that user.

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

Replace GustoToken with your Gusto API token.

```text
node index.js
```

## SDK Usage

### Import the SDK

```javascript
const Gusto =  require('../../gusto-js-sdk');
const {Server} = require("../../gusto-js-sdk");
```

### Create SDK instance

```javascript
const SDK = new Gusto.SDK({
GustoToken:"<Access Token>",
Server:Server.Sandbox // Sandbox or Production , default is Sandbox https://api.gusto-demo.com
});
```

# GET call
    
    ```javascript
    const response = await SDK.get("/v1/companies");
    console.log(response);
    ```

# POST call

    ```javascript
    const response = await SDK.post("/v1/companies", {
    company: {
    name: "Test Company",
    ein: "123456789",
    }
    });
    console.log(response);
    ```

# PUT call

    ```javascript
    const response = await SDK.put("/v1/companies/123456789", {
    company: {
    name: "Test Company",
    ein: "123456789",
    }
    });
    console.log(response);
    ```

# DELETE call

    ```javascript
    const response = await SDK.delete("/v1/companies/123456789");
    console.log(response);
    ```

# GET call with query params

    ```javascript
    const response = await SDK.get("/v1/companies", {
    query: {
    page: 1,
    per_page: 10,
    }
    });
    console.log(response);
    ```

# POST call with query params

    ```javascript
    const response = await SDK.post("/v1/companies", {
    company: {
    name: "Test Company",
    ein: "123456789",
    },
    query: {
    page: 1,
    per_page: 10,
    }
    });

    console.log(response);
    ```

# PUT call with query params

    ```javascript
    const response = await SDK.put("/v1/companies/123456789", {
    company: {
    name: "Test Company",
    ein: "123456789",
    },
    query: {
    page: 1,
    per_page: 10,
    }
    });

    console.log(response);
    ```

# DELETE call with query params

    ```javascript
    const response = await SDK.delete("/v1/companies/123456789", {
    query: {
    page: 1,
    per_page: 10,
    }
    }); 
    console.log(response);
    ```

