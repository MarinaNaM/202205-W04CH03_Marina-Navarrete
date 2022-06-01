import { AsesorModel } from '../models/asesor';
import { EscuderoModel } from '../models/escudero';
import { LuchadorModel } from '../models/luchador';
import { PersonajeModel } from '../models/personaje';
import { ReyModel } from '../models/rey';
import React from 'react';

export function CardOverly({ personaje }: { personaje: PersonajeModel }) {
    function selectPersonaje() {
        let template;
        if (personaje instanceof ReyModel) {
            template = (
                <>
                    <li>Años de reinado: {personaje.añosReinado}</li>
                </>
            );
        } else if (personaje instanceof LuchadorModel) {
            template = (
                <>
                    <li>Arma: {personaje.arma}</li>
                    <li>Destreza: {personaje.destreza}</li>
                </>
            );
        } else if (personaje instanceof AsesorModel) {
            template = (
                <>
                    <li>Asesora a: {personaje.jefe.nombre}</li>
                </>
            );
        } else if (personaje instanceof EscuderoModel) {
            template = (
                <>
                    <li>Peloteo: {personaje.sumision}</li>
                    <li>Sirve a: {personaje.amo.nombre}</li>
                </>
            );
        }

        return template;
    }
    return (
        <>
            <div className="character__overlay">
                <ul className="list-unstyled">{selectPersonaje()}</ul>
                <div className="character__actions">
                    <button className="character__action btn">habla</button>
                    <button className="character__action btn">muere</button>
                </div>
            </div>
            <i className="emoji"></i>
        </>
    );
}
