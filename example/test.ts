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
  await api.products.create({
    name:'Test',
    price:10,
    recurringInterval:RecurringInterval.week,
    slug:'T.1'
  })
}

example()