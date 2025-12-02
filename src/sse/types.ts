export type ServerSentEvents = {
  dashboardUpdated: ServerSentEventPayload<{
    id: number;
  }>;
}

export type ServerSentEventPayload<T extends object> =  {
  event: keyof T;
  data: T,
  timestamp: number;
}