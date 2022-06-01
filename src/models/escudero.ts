/* eslint-disable no-unused-vars */
import { LuchadorModel } from './luchador';
import { PersonajeModel } from './personaje';

export class EscuderoModel extends PersonajeModel {
    constructor(
        nombre: string,
        familia: string,
        edad: number,
        public sumision: number,
        public amo: LuchadorModel
    ) {
        super(nombre, familia, edad, 'escudero');
        this.mensaje = 'Soy un looser';
    }
}
