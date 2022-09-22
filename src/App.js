import React from 'react';
import data from './data.js'
import './style.css'

const App = () => {
    console.log(data.products);
    return (
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
                <div  className="row center">
                    {data.products.map((product) => {
                        return   <div key={product._id} className="card">
                                    <a href="product.html">
                                        <img className="medium img-fluid" src={product.image} alt="product" />
                                    </a>
                                    <div className="card-body">
                                        <a href="product.html">
                                            <h2>{product.name}</h2>
                                        </a>
                                        <div className="rating">
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star"></i></span>
                                            <span><i className="fa fa-star-o"></i></span>
                                        </div>
                                        <div className="price">$ {product.price}</div>
                                    </div>
                                </div>
                            })}   
                        </div>
                

            </main>
            <footer className="row center">
                All right reserve
            </footer>
        </div>
    );
};

export default App;
