import React from 'react';
import { Hello } from './Hello';
import { Welcome } from './Welcome';
import { Counter } from './Counter';
import { ClickCounter } from './ClickCounter';
import { ClickTracker } from './ClickTracker';
import { InteractiveWelcome } from './InteractiveWelcome';
import { Login } from './Login';
import { UncontrolledLogin } from './UncontrolledLogin';
import { Todolist } from './TodoList';
import { Container } from './Container';
import { LanguageContext } from './LanguageContext';

export class App extends React.Component {

    state = {
        language: "en",
    }

    onLogin = (data) => {
        this.setState({
            username: data.username,
            password: data.password,
        })
    }

    handleLanguageChoose = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {

        return (
            <div>
                <Container title="My Awesome Application">
                    <Hello />
                    <Welcome />
                    {/* DOCUMENTAZIONE:
                    Seleione della lingua per il componente "CounterDisplay", localizzato dentro "Counter":
                    in questa sezione abbiamo impostato, tramite un context chiamato LanguageContext, una
                    lingua di default e la possibilità di sceglierne un'altra in base alle preferenze
                    dell'utente. Abbiamo aggiunto una select per far si che tramite un menù a tendina si
                    potesse selezionare la lingua ed abbiamo wrappato tutto ciò che aveva la necessità di raggiungere
                    il context definito, all'interno di un provider (LanguageContext.Provider).
                    Al variare della selezione, viene richiamata la relativa funzione in "onChange" che aggiorna
                    lo stato in base al consumer. */}
                    <select value={this.state.language} onChange={this.handleLanguageChoose}>
                        <option value="en">ENGLISH</option>
                        <option value="it">ITALIAN</option>
                    </select>
                    <LanguageContext.Provider value={this.state.language}>
                        <Counter initialStateValue={0} incrementedBy={1} updateTime={1000} />
                    </LanguageContext.Provider>
                    
                    <ClickCounter />
                    <ClickTracker />
                    <InteractiveWelcome />
                    <Login onLogin={this.onLogin} />
                    <UncontrolledLogin />
                    <Todolist render={(arr, deleteItem) => {
                        return (
                            <ul>
                                {arr.map((item, index) => {
                                    return (
                                        <div key={item + index}>
                                            <li>
                                                {item}
                                                <button onClick={() => deleteItem(arr, index)}
                                                >{`Remove ${item}`}</button>
                                            </li>
                                        </div>
                                    )
                                })}
                            </ul>
                        )
                    }} />
                </Container>
            </div>
        )
    }
}





