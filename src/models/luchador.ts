/* eslint-disable no-unused-vars */
import { PersonajeModel } from './personaje.js';

export class LuchadorModel extends PersonajeModel {
    constructor(
        nombre: string,
        familia: string,
        edad: number,
        public arma: string,
        public destreza: number
    ) {
        super(nombre, familia, edad, 'luchador');
        this.mensaje = 'Primero pego y luego pregunto';
    }
}
