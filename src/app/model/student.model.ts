export interface IStudent {
    id?: number;
    surname?: string;
    firstname?: string;
    gender?: string;
    promotion?: string;
    birthdate?: string;
    mailIMT?: string;
    mailPersonal?: string;
    phone?: string;
    photoURL?: string;
    companyLogoURL?: string;
}

export class Student implements IStudent {
    constructor(
        public id?: number,
        public surname?: string,
        public firstname?: string,
        public gender?: string,
        public promotion?: string,
        public birthdate?: string ,
        public mailIMT?: string,
        public mailPersonal?: string,
        public phone?: string,
        public photoURL?: string,
        public companyLogoURL?: string
    ) {}
}