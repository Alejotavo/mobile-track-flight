export interface Flight {
  number: string;
  aircraft: {
    model: string;
  };
  airline: {
    name: string;
    iata: string;
    icao: string;
  };
  status: string;
  departure?: {
    airport: any;
    scheduledTime: any;
    terminal: string;
  };
  arrival?: {
    airport: any;
    scheduledTime: any;
    terminal: string;
  };
  isCargo?: boolean;
  lastUpdatedUtc?: string;
}