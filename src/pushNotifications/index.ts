import { ApiModule } from "@maioradv/client-core";
import { SendDashboardPushNotificationDto } from "./types";

export default class PushNotifications extends ApiModule {
  sendToDashboards(args:SendDashboardPushNotificationDto): Promise<void> {
    return this._call('post','/push-notifications/dashboards',args)
  }
}