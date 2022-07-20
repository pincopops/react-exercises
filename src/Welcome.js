import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component{

    render(){
        //accedendo alle proprietà dell'oggetto 'this.props.name', ci siamo resi conto che ne avesse
        //una chiamata props, la quale aveva come valore il nostro '<strong>nome</strong>'.
        //così facendo abbiamo rintracciato il modo di passare al nostro attributo in App il 
        //tag strong e effettuare una valutazione condizionale, come espresso sotto, sul nome contenuto
        //all'interno del tag stesso. Così facendo abbiamo potuto validare che il nome indicato fosse
        //uguale a quello passato all'interno del tag strong, in App.js.
        //codice utilizzato:
        //if(this.props.name.props.children === 'John' ...)
        
        if(this.props.name === 'John' && this.props.age > 18 && this.props.age <65){
            return <div>
                <p>Hello, {this.props.name}!</p>
                <Age age={this.props.age}/>
                

            </div>
        }
        if(this.props.age <= 18){
            return <p>Hello, {this.props.name}!</p>
        }
        else{
            return 'Hello, User!';
        }
    }
}



