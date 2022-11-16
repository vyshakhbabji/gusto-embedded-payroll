# Gusto Webhooks Basic Sample App

This application is built to help provide developers with a clear understanding of how to utilize Gusto Embedded Payroll 
Webhook Subscriptions API

In this app we are
* Creating a ngrok tunnel and return webhook url
* Creating a Gusto Webhook Subscription to webhooks url
* Listening to Webhook events


## Prerequisites
* NPM installed locally
* Node.js installed locally
* ngrok or a web server which supports SSL/TLS v1.1 / v1.2

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
TOKEN=[REPLACE WITH TOKEN]
BASE_URL=https://api.gusto-demo.com/v1
```
```
cp sample.env .env
node index.js
```

## Configuring Webhook URL on Gusto API setting
When you run the app you will see instructions on the terminal/console as below. Please follow the instructions
as mentioned:

```text
Starting ngrok . Please wait ...
Now you should be able to recieve all the notification events to your locally setup webhook url
You can also inspect webhook events via ngrok WebInterface inspector on url : http://localhost:4040
```
## Testing

As you have now subscribed to `Events(Company, Employee ... etc )` ,  you should be able to see incoming notifications by just
running a sample transaction.



# Issues and Improvements

* If you want me to improve this demo or if you find any issues , please open issue on the issue section
* I am open to improving and keeping this demo up to date to best of my knowledge
* This code is for demo purposes only. DONOT use this in production apps
* Feel free to send PRs if you want to make any changes to this repo.

***
# About ngrok

## _What is ngrok?_

The **_official_ description**
on the website https://ngrok.com/product is:

> "_**`ngrok`** exposes **`local`** servers behind NATs and firewalls
to the **`public`** internet over secure tunnels_."

In _**plain** (beginner friendly) **English**_:

> _**`ngrok`** is a small piece of software
that lets you **run** a **web application** <br />
on your **`local` computer**
and (securely) **share it** with the world
on a **`public` address** ("URL")_.

## How it works?

```npm install``` downloads the ngrok binary for your platform from the official ngrok hosting. To host binaries yourself set the `NGROK_CDN_URL` environment variable before installing ngrok. To force specific platform set `NGROK_ARCH`, eg `NGROK_ARCH=freebsdia32`.

The first time you create a tunnel the ngrok process is spawned and runs until you disconnect or when the parent process is killed. All further tunnels are connected or disconnected through the internal ngrok API which usually runs on http://127.0.0.1:4040.


## ngrok installation

#### Via homebrew formula

```bash
brew install --cask ngrok
```

#### Via npm
Install the package with npm:

```bash
npm install ngrok -g
```

For global installation on Linux, you might need to run `sudo npm install --unsafe-perm -g ngrok` due to the [nature](https://github.com/bubenshchykov/ngrok/issues/115#issuecomment-380927124) of npm postinstall script.

### Running ngrok locally
```bash
ngrok http [port] 
eg. ngrok http 8080
```



## To know more about ngrok
[**How it works?**](https://ngrok.com/product)

[**Learn more**](https://github.com/dwyl/learn-ngrok)


## _Why use ngrok?_

You are working on a Web App/Site on your **`localhost`**,
but it's "not yet ready" to be "deployed"

> _**Note**: once you are **ready**
to make your App/MVP "**official**",
you should consider using **Heroku**
as it does not require you to have your `localhost` running_
(_and it has good logging, "monitoring", "free tier", etc._). <br />
See:
[github.com/dwyl/**learn-heroku**](https://github.com/dwyl/learn-heroku)


