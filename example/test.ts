import { accountsApiClient, ApiVersion, GraphApiError } from "../src";

const api = accountsApiClient({
  host:'localhost:3000',
  version:ApiVersion.July24
})

/*api.pages.create({
  formatId:1,
  title:'test title',
  description:'test description',
  metafields:[
    {
      key:'year',
      value:'2024'
    },
    {
      key:'model',
      value:'t-shirt'
    }
  ],
  translations:[
    {
      key:'title',
      value:'titolo',
      locale:'it'
    },
    {
      key:'model',
      value:'maglietta',
      locale:'it'
    }
  ]
}).then(v => console.log(v)).catch(e => console.log(e))*/

//api.pages.list().then(v => console.log(v)).catch(e => console.log(e instanceof GraphApiError))