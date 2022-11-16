//create a webhook url with ngrok
require('dotenv').config();
const ngrok = require('ngrok');
const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

const BASE_URL = process.env.BASE_URL;
let webhookUrl = '';

/*
 * Init ngrok and get the webhook url
 */

async function init(options) {
    console.log('Starting ngrok . Please wait ...');
    const url = await ngrok.connect(process.env.PORT);
    webhookUrl = url + '/webhook';
    console.log('Webhook url is ready to use. Your webhook url is : ', webhookUrl);
    console.log(
        ' Now you should be able to recieve all the notification events to your locally setup webhook url\n' +
        ' You can also inspect webhook events via ngrok WebInterface inspector on url : http://localhost:4040\n' +
        ' ');
    console.log('\n\n\nStarting express server....');
}

/*
Start the express server
 */

function startNodeServer() {
    const app = express();
    const port = process.env.PORT;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.post('/webhook', (req, res) => {

        console.log('\n\nWebhook event received =========================>');
        let responseBody = req.body;
        // console.log('Webhook Raw Event ',responseBody);
        switch (responseBody.event) {
        //     case 'batch_created':
        //         //write your code here
        //         break;

            default:
                console.log('Default Respomse body', responseBody);
                makeGustoPutRequest('/webhook_subscriptions/'+uuid, responseBody);

        }
        // console.log(req.body);
        console.log('Webhook event  =========================>\n\n');
        res.send('OK');
    });

    app.listen(port, () => {
        console.log(`App is listening at http://localhost:${port}`);
    });
}

/**
 * Quick function to make POST request to Gusto API
 */

let uuid;

function makeGustoPostRequest(endpoint, data) {
    const url = BASE_URL + endpoint;
    const options = {
        url: url,
        headers: {
            'Authorization': 'Token '+process.env.TOKEN,
            'Accept': 'application/json'
        },
        body: data,
        json: true
    };

    request.post(options, function (error, response, body) {

        if (!error) {
            console.log('Successful Response Body for API Call :'+options.url +' is :', response.statusCode, body);
            uuid = body.uuid;
        } else {
            console.log('Error Response Code is : ',response.statusCode);
            console.log('Error: ', error);
        }
    });
}

function makeGustoPutRequest(endpoint, data) {
    const url = BASE_URL + endpoint;
    const options = {
        url: url,
        headers: {
            'Authorization': 'Token '+process.env.TOKEN,
            'Accept': 'application/json'
        },
        body: data,
        json: true
    };

    request.put(options, function (error, response, body) {
        if (!error) {
            console.log('Successful Webhook verification :'+options.url +' is :', response.statusCode, body);
        } else {
            console.log('Error Response Code is : ',response.statusCode);
            console.log('Error: ', error);
        }
    });
}

function createWebhook() {
    console.log('\n\n\nCreating webhook for Gusto API');
    const webhookBody = {
        "url": webhookUrl,
        "subscription_types": [
            "Company",
            "Employee",
        ]
    };
    makeGustoPostRequest('/webhook_subscriptions', webhookBody);
}


function makeAPICall(){
    console.log('\n\n\nCreating API Call for Gusto API');
    const body = {

    };
    makeGustoPostRequest('/{endpoint}', body);
}

async function start() {
    await init();
    startNodeServer();
    console.log('Your webhookURL is: ', webhookUrl);


    createWebhook();
    // makeAPICall();

}

start().then(r => {
    console.log('Started Server.... ');
});