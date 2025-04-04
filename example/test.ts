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
  api.activityLogs.list({
    limit:10,
    sorting:'desc',
    after:171
  }).then(v => console.log(v))
}

example()