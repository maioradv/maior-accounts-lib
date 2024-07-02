import axios, { Axios } from "axios";
import { ValidatedApiConfigs, ApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./types";
import { ClientApiI } from "./model";
import Languages from "./languages";

export class AccountsApiClient implements ClientApiI
{
  protected client:Axios;
  protected configApi:ValidatedApiConfigs
  languages:Languages;

  constructor(protected config: ApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()

    this.languages = new Languages(this.client)
  }

  protected _initClient(): Axios {
    axios.defaults.baseURL = 'http://' + this.configApi.host;
    axios.defaults.headers.common[ApiHeader.Authorization] = 'Bearer ';
    axios.defaults.headers.common[ApiHeader.ApiVersion] = this.configApi.version
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    return axios
  }

  auth() {}
}