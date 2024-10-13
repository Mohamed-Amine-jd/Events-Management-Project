export interface Reservation {
    idReservation?: number; // L'ID peut être nullable si vous ne l'avez pas encore généré côté client
    dateReser?: Date;
    price: number;
    nbrPerson: number;
    emailClient: string;
    titlereserv: string;
    idevent:number;
  }
  