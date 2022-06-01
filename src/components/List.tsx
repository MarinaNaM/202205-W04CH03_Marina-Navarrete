import React from 'react';
import { PersonajeModel } from '../models/personaje';
import { Card } from './Card';
export function List({ personajes }: { personajes: Array<PersonajeModel> }) {
    return (
        <ul className="characters-list row list-unstyled">
            {personajes.map((personaje) => (
                <li key={personaje.nombre} className="character col">
                    <Card personajeModel={personaje}></Card>
                </li>
            ))}
        </ul>
    );
}
