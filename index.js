import React from 'react';
import ReactDOM from 'react-dom';

import Navar from "./components/navar";
// import App from "./pages/App";
import 'bootstrap/dist/css/bootstrap.css';
// import NotFound from "./components/notFound";
import Book from "./components/book";
import Psicoanalista from "./components/psicoanalista";
import Psicoanalista2 from "./components/psicoanalista2";
import Tiempo from "./components/tiempo";
import Crazy from "./components/crazy";
const container = document.getElementById('app');

ReactDOM.render(<Crazy/>, container);
