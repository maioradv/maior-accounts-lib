import { accountsApiClient, ApiVersion } from "../src";
import credentials from './credentials.json'

async function example() {
  const api = accountsApiClient({
    sandbox:true,
    credentials,
    version:ApiVersion.July24
  })
  api.sse.on('message', event => {
    if(event.event === 'dashboardCreated') {
      console.log(event.data)
    }
  })
  .on('error',err => {
    console.log(err)
  })
  await api.auth()
}

example()