import { DashboardAccess } from "../dashboards/types";
import { ApiModule } from "../model";
import { UpdateOwnDashboardAccess } from "./types";

export default class DashboardAccesses extends ApiModule {
  update(id:number,data:UpdateOwnDashboardAccess) {
    return this._call<DashboardAccess>('patch',`/me/dashboard-accesses/${id}`,data)
  }

  remove(id:number) {
    return this._call<DashboardAccess>('delete',`/me/dashboard-accesses/${id}`)
  }
}