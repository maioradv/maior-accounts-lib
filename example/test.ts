import { accountsApiClient, ApiVersion } from "../src";

async function example() {
  const api = accountsApiClient({
    sandbox:true,
    credentials:{
      signIn:{
        email:'test@test.it',
        password:'Cavalli1!'
      },
    },
    version:ApiVersion.July24
  })
  await api.auth()
  /*await api.customers.create({
    email:'test@test.it',
    password:'Cavalli1!'
  })*/
  /*api.dashboards.create({
    dashboardTypeId:1,
    masterToken:'851e98a6-1a2f-461f-961e-d09b1877f3ee',
    name:'CapriBlu',
    plan:'pro'
  }).then(v => console.log(v))*/
  /*api.dashboardAccesses.create({
    customerId:1,
    dashboardId:1,
    roleId:1
  })*/
  //api.customers.findAll().then(v => console.log(v)).catch(e => console.log(e))
  api.authentication.me().then(v => console.log(v.Customer?.DashboardAccess)).catch(e => console.log(e))
}

example()