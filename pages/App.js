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
                    <Route exact path="/Book" component={Home}/>
                    <Route exact path="/Book/Cream" component={Cream}/>
                    <Route exact path="/Book/Milk" component={Milk}/>
                    <Route exact path="/Book/Water" component={Water}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>

    );
}
export default App;