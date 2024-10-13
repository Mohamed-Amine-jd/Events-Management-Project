export interface Avis {
    idavis?: number; // L'ID peut être nullable si vous ne l'avez pas encore généré côté client
    emailClient: string;
    message: string;
    idevent:number;
}
