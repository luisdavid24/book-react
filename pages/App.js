import React from "react";
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Navar from "../components/navar.js";
import Home from "../components/ice.js";
import Cream from "../components/cream.js";
import Milk from "../components/milk.js";
import Water from "../components/water.js";
import NotFound from "../components/notFound";
import Layout from "../components/layout";
function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/Home/Cream" component={Cream}/>
                    <Route exact path="/Home/Milk" component={Milk}/>
                    <Route exact path="/Home/Water" component={Water}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>

    );
}
export default App;