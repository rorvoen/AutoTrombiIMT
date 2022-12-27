export interface IStudent {
    id?: number;
    surname?: string | null;
    firstname?: string | null;
    gender?: string | null;
    promotion?: number | null;
    birthdate?: string | null;
    mailIMT?: string | null;
    mailPersonal?: string | null;
    phone?: string | null;
    photoURL?: string | null;
    companyLogoURL?: string | null;
}

export class Student implements IStudent {
    constructor(
        public id?: number,
        public surname?: string | null,
        public firstname?: string | null,
        public gender?: string | null,
        public promotion?: number | null,
        public birthdate?: string | null,
        public mailIMT?: string | null,
        public mailPersonal?: string | null,
        public phone?: string | null,
        public urlPhoto?: string | null,
        public companyLogoURL?: string | null
    ) {}
}