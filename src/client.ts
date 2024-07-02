import axios, { Axios } from "axios";
import { ApiConfigs, RenovatioAppApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./types";
import { RenovatioAppApiI } from "./model";
import Pages from "./pages";
import Languages from "./languages";
import Settings from "./settings";
import Formats from "./formats";
import Pageblocks from "./pageblocks";
import Layouts from "./layouts";

export default class RenovatioAppApi implements RenovatioAppApiI
{
  protected client:Axios;
  protected configApi:ApiConfigs
  pages:Pages;
  languages:Languages;
  settings:Settings;
  formats:Formats;
  pageblocks:Pageblocks;
  layouts:Layouts;

  constructor(protected config: RenovatioAppApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()

    this.pages = new Pages(this.client)
    this.languages = new Languages(this.client)
    this.settings = new Settings(this.client)
    this.formats = new Formats(this.client)
    this.pageblocks = new Pageblocks(this.client)
    this.layouts = new Layouts(this.client)
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