const Gusto =  require('../../gusto-js-sdk');
const {Server} = require("../../gusto-js-sdk");

console.log(Gusto)

const SDK = new Gusto.SDK({
    GustoToken:"UFSA82Dea3nTxUb-lbZn9lSyj_3VsUJDg46TqdUpzTA",
    Server:Server.Sandbox
});

const platform = SDK.platform();

platform.get('/v1/me').then((res) => {
    console.log(res);
});