export class Materia {
    constructor(
        public id: number,
        public nome: string,

    ) { }
}


export class MateriaResponse {
    constructor(
        public materia: Materia,
    ) { }
}