import React from 'react';
import Footer from './components/Footer.js';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen.js';
import HomeScreen from './screens/HomeScreen.js';


const App = () => {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">Vente</a>
                    </div>
                    <div>
                        <a href="/cart">Cart</a>
                        <a href="/signin">Sign In</a>
                    </div>
                </header>
                <main>
                    <Routes>
                        <Route path='/product/:id' element={<ProductScreen/>}/>
                        <Route path='/' element={<HomeScreen/>} exact/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
