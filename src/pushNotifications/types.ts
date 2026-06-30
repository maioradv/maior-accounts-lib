import { DashboardType } from "@maioradv/types";

export type ContentPushDto = {
  title: string;
  body: string;
  data?: Record<string, unknown>;
  subtitle?: string;
  ttl?: number;
  expiration?: number;
  priority?: "default" | "normal" | "high";
  interruptionLevel?: "active" | "critical" | "passive" | "time-sensitive";
  badge?: number;
  channelId?: string;
  icon?: string;
  categoryId?: string;
  mutableContent?: boolean;
  collapseId?: string;
  tag?: string;
}

export type SendDashboardPushNotificationDto = {
  dashboardType?: DashboardType;
  ids?:number[]
  content: ContentPushDto;
}
