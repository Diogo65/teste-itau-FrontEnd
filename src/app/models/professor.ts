export class Professor {
    constructor(
        public id: number,
        public nome: string,
    ) { }
}

export class ProfessorResponse {
    constructor(
        public professor: Professor,
    ) { }
}