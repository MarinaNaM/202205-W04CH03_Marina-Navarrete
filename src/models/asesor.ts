/* eslint-disable no-unused-vars */
import { PersonajeModel } from './personaje';

export class AsesorModel extends PersonajeModel {
    constructor(
        nombre: string,
        familia: string,
        edad: number,
        public jefe: PersonajeModel
    ) {
        super(nombre, familia, edad, 'asesor');
        this.mensaje = 'No se por qué, pero creo que voy a morir pronto';
    }
}
