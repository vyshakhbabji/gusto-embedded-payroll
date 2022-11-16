// Fill in your client ID and client secret that you obtained
// while registering the application
const clientID = '86AS7WMGfcYAHzbJCM4NSRF-EzC8ZcKVW5ZkdDaLSg0'
const clientSecret = '5E83TJO4Zp6eDDfh9DrzjcmKZBTHsynSmMNQOqMXaPM'
const redirect_url = 'http://localhost:8080/oauth/redirect'
//
const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const route = require('koa-route');
const axios = require('axios');

const app = new Koa();

const main = serve(path.join(__dirname + '/public'));

const oauth = async ctx => {
    const requestToken = ctx.request.query.code;
    console.log('authorization code:', requestToken);

    const tokenResponse = await axios({
        method: 'post',
        url: 'https://api.gusto-demo.com/oauth/authorize?' +
        `client_id=${clientID}&` +
        `client_secret=${clientSecret}&` +
        `code=${requestToken}`,
        headers: {
        accept: 'application/json'
        }
    });

    const accessToken = tokenResponse.data.access_token;
    console.log(`access token: ${accessToken}`);

    const result = await axios({
        method: 'get',
        url: `https://api.gusto-demo.com/me`,
        headers: {
        accept: 'application/json',
        Authorization: `token ${accessToken}`
        }
    });
    console.log(result.data);
    const name = result.data.name;

    ctx.response.redirect(`/welcome.html?name=${name}`);
    };

app.use(main);
app.use(route.get('/oauth/redirect', oauth));

app.listen(8080);

