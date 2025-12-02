export type ServerSentEvents = {
  dashboardCreated: ServerSentEventPayload<{
    id: number;
  }>;
  dashboardUpdated: ServerSentEventPayload<{
    id: number;
  }>;
  dashboardRemoved: ServerSentEventPayload<{
    id: number;
  }>;
}

export type ServerSentEventPayload<T extends object> =  {
  event: keyof T;
  data: T,
  timestamp: number;
}