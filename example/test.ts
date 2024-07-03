import { accountsApiClient, ApiVersion, GraphApiError } from "../src";

async function example() {
  const api = accountsApiClient({
    host:'localhost:3000',
    credentials:{
      apiToken:''
    },
    version:ApiVersion.July24
  })
  await api.auth()
  await api.customers.create({
    email:'test@test.it',
    password:'Cavalli1!'
  })
  api.customers.findAll().then(v => console.log(v))
}

example()

//api.pages.list().then(v => console.log(v)).catch(e => console.log(e instanceof GraphApiError))