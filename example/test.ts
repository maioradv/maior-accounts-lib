import { accountsApiClient, ApiVersion } from "../src";
import credentials from './credentials.json'

async function example() {
  const api = accountsApiClient({
    sandbox:true,
    credentials,
    version:ApiVersion.July24
  })
  await api.auth()
  api.authentication.me().then(v => console.log(v))
  /*await api.products.create({
    name:'Abbonamento Premium Ti Delizio',
    price:29.90,
    slug:'SUB1.3',
    recurringInterval: RecurringInterval.month,
  })*/
  
}

example()