import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "components/Nav/Nav";
import Container from "components/Container/Container";
import Footer from "components/Footer/Footer";

import AboutPage from "pages/About/AboutPage";
import CatalogPage from "pages/Catalog/CatalogPage";

import { Provider } from "react-redux";
import store from "./store/store";
import HomeContainer from "container/HomeContainer";


function App() {
    return (
        <Provider store={store}>


            <Router>
                <>
                   <Nav />
                   <Container>
                    <Route exact path="/" component={HomeContainer} />
                     {/*<Route path="/catalog" component={CatalogPage} />*/}
                     <Route path="/about" component={AboutPage} />
                   </Container>
                   <Footer />
                </>
               </Router>
        </Provider>
    );
}

export default App;

