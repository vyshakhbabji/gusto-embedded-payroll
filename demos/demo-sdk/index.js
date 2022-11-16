const Gusto =  require('../../gusto-js-sdk');
const {Server} = require("../../gusto-js-sdk");

console.log(Gusto)

const SDK = new Gusto.SDK({
    GustoToken:"UFSA82Dea3nTxUb-lbZn9lSyj_3VsUJDg46TqdUpzTA",
    Server:Server.Sandbox
});

const platform = SDK.platform();

//Get all employees via platform.get()
platform.get('/v1/me').then((res) => {
    console.log(res);
});


const employee = {
    "first_name": "Alexander",
    "middle_initial": "B",
    "last_name": "Hamilton",
    "date_of_birth": "1979-06-011",
    "email": "sonofanorphan@example.com",
    "ssn": "123451779"
}

// Create an employee via the platform.post()
platform.post('/v1/companies/7756341741162292/employees', {}, employee)
    .then((res) => {
        console.log(res);
    });

const employeeUpdate= {
    "version": "5c7295455038a2263a7b4d7e523906bc",
    "first_name": "Alexander",
    "middle_initial": "B",
    "last_name": "Hamilton",
    "date_of_birth": "1979-06-01"
}

// Update an employee via platform.put()
platform.put('/v1/companies/7756341741162292/employees/{EmpId}', {}, employeeUpdate)
    .then((res) => {
        console.log(res);
    });

// Delete an employee via platform.delete()
platform.delete('/v1/companies/7756341741162292/employees/{EmpId}', {}, {})
    .then((res) => {
        console.log(res);
    });