import React from "react";
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Book from "../components/book";
import Navar from "../components/navar";
import Psicoanalista from "../components/psicoanalista";
import Psicoanalista2 from "../components/psicoanalista2";
import Tiempo from "../components/tiempo";
import Crazy from "../components/crazy";
import Cyanide from "../components/cyanide";
import Dead from "../components/dead";
import Mouse from "../components/mouse";
import Daugther from "../components/daugther";
import Throne from "../components/throne";
import Testimony from "../components/testimony";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Layout from "../components/Layout";
import NotFound from "../components/notFound";
import Home from "../components/home";

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/Home/Book" component={Book}/>
                    <Route exact path="/Home/Book/Psicoanalista" component={Psicoanalista}/>
                    <Route exact path="/Home/Book/Psicoanalista2" component={Psicoanalista2}/>
                    <Route exact path="/Home/Book/Tiempo" component={Tiempo}/>
                    <Route exact path="/Home/Book/Crazy" component={Crazy}/>
                    <Route exact path="/Home/Book/Cyanide" component={Cyanide}/>
                    <Route exact path="/Home/Book/Dead" component={Dead}/>
                    <Route exact path="/Home/Book/Mouse" component={Mouse}/>
                    <Route exact path="/Home/Book/Daugther" component={Daugther}/>
                    <Route exact path="/Home/Book/Throne" component={Throne}/>
                    <Route exact path="/Home/Book/Daugther" component={Daugther}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>

    );
}
export default App;