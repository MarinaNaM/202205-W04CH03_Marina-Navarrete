import React from 'react';

import { PersonajeModel } from '../models/personaje';

export function Card({ personajeModel }: { personajeModel: PersonajeModel }) {
    return (
        <>
            <div className="card character__card">
                <img
                    src={'img/' + personajeModel.nombre.toLowerCase() + '.jpg'}
                    alt={personajeModel.nombre + personajeModel.familia}
                    className="character__picture card-img-top"
                />
                <div className="card-body">
                    <h2 className="character__name card-title h4">
                        {personajeModel.nombre} y {personajeModel.familia}
                    </h2>
                    <div className="character__info">
                        <ul className="list-unstyled">
                            <li>Edad: {personajeModel.edad} años</li>

                            <li>
                                Estado:
                                {personajeModel.estadoVivo ? (
                                    <i className="fas fa-thumbs-up"></i>
                                ) : (
                                    <i className="fas fa-thumbs-down"></i>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
