import { accountsApiClient, ApiVersion, RecurringInterval } from "../src";
import credentials from './credentials.json'

async function example() {
  const api = accountsApiClient({
    sandbox:true,
    credentials,
    version:ApiVersion.July24
  })
  await api.auth()
  //api.authentication.me().then(v => console.log(v))
  await api.serviceTemplates.create({
    planId:1,
    productId:1,
    
  })
}

example()