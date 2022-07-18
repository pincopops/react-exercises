// vecchio metodo - fino a react 17 ⬇️
// import ReactDOM from 'react-dom';

// da react 18 ⬇️
import {createRoot} from 'react-dom/client';

import { Hello } from './Hello';

const hello = <Hello/>;

// vecchio metodo - fino a react 17 ⬇️
// const root = document.querySelector('#root');

// da react 18 ⬇️
const root = createRoot(document.querySelector('#root'));

// vecchio metodo - fino a react 17 ⬇️
// ReactDOM.render(hello, root)

// da react 18 ⬇️
root.render(<Hello />);