import { accountsApiClient, ApiVersion } from "../src";
import credentials from './credentials.json'

async function example() {
  const api = accountsApiClient({
    sandbox:true,
    credentials,
    version:ApiVersion.July24
  })
  await api.auth()
  //api.authentication.me().then(v => console.log(v))
  //await api.me.dashboardAccesses.findAll().then(v => console.log(v))
  api.orders.create({
    customerId:3,
    purchaseMethodId:1,
    companyId:1,
    request:{
      type:'CreateDashboard',
      dashboard:{
        name:'tesone',
        planId:1
      }
    },
  })
}

example()