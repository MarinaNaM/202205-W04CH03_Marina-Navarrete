import { AsesorModel } from '../models/asesor';
import { EscuderoModel } from '../models/escudero';
import { LuchadorModel } from '../models/luchador';
import { ReyModel } from '../models/rey';
import { PersonajeModel } from '../models/personaje';

export function PersonajesData() {
    const data: Array<PersonajeModel> = [
        new ReyModel('Joffrey', 'Baratheon', 33, 2),
        new LuchadorModel('Jaime', 'Lannister', 33, 'espada', 8),
        new LuchadorModel('Daenerys', 'Targaryen', 33, 'dragones', 9),
    ];
    data.push(new AsesorModel('Tyrion', 'Lannister', 33, data[2]));
    data.push(
        new EscuderoModel(
            'Bronn',
            'Aguas Negras',
            33,
            5,
            <LuchadorModel>data[1]
        )
    );

    return data;
}
