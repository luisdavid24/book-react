import React from "react";
import {BrowserRouter, Switch,Route} from "react-router-dom";
import Book from "../components/book";
// import NotFound from "../components/notFound";

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/Book" component={Book}/>
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