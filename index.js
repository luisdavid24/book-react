import React from 'react';
import ReactDOM from 'react-dom';

import Navar from "./components/navar";
import App from "./pages/App";
import 'bootstrap/dist/css/bootstrap.css';
import NotFound from "./components/notFound";
import Book from "./components/book";
import Psicoanalista from "./components/psicoanalista";
import Psicoanalista2 from "./components/psicoanalista2";
import Tiempo from "./components/tiempo";
import Crazy from "./components/crazy";
import Cyanide from "./components/cyanide";
import Dead from "./components/dead";
import Mouse from "./components/mouse";
import Daugther from "./components/daugther";
import Throne from "./components/throne";
import Testimony from "./components/testimony";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Home from "./components/home";
import Loading from "./spinner/loading";
const container = document.getElementById('app');

ReactDOM.render(<Loading/>, container);
