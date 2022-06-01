/* eslint-disable no-unused-vars */
import { PersonajeModel } from './personaje';

export class ReyModel extends PersonajeModel {
    constructor(
        nombre: string,
        familia: string,
        edad: number,
        public añosReinado: number
    ) {
        super(nombre, familia, edad, 'rey');
        this.mensaje = 'Vais a morir todos';
    }
}
