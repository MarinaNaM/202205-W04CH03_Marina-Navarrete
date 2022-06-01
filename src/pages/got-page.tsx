import React from 'react';
import { List } from '../components/List';
import { PersonajesData } from '../data/personajes-data';

export function GotPage() {
    const personajes = PersonajesData();

    return (
        <>
            <h1>Gome Of Thrones</h1>
            <div className="app container">
                <List personajes={personajes}></List>
            </div>
        </>
    );
}
