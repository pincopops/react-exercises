import React from "react";
import { LanguageContext } from "./LanguageContext";

// DOCUMENTAZIONE:
//Questo oggetto è utile alla configurazione del Context. Esso consente di passare le varie
//variabili lingua tramite i nostri parametri di selezione impostati in App.js.
const WorldLanguages = {
    en: {
        COUNTER: "English Counter:",
    },
    it: {
        COUNTER: "Contatore Italiano:",
    }
}

export class CounterDisplay extends React.Component {

    render() {
        return (
            <div>
                {/* DOCUMENTAZIONE:
                Tramite Context, abbiamo wrappato il tutto all'interno di un consumer ("LanguageContext.Consumer")
                per poi passare all'intreno del return le personalizzazioni inserite nel relativo oggetto "WorldLanguages".
                Così facendo il nostro testo è diventato dinamico, in base alla selezione dell'utente. 
                p.s.: : "language" si riferisce allo state presente in App.js. */}
                <LanguageContext.Consumer>
                    {language => {
                        return (
                            <div>
                                <h1>{WorldLanguages[language].COUNTER} {this.props.count}</h1>

                            </div>
                        )
                    }}

                </LanguageContext.Consumer>
            </div>
        )
    }
}