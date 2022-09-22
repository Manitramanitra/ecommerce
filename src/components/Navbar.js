import React from 'react';

const Navbar = () => {
    return (
        <header className="row">
            <div>
                <a className="brand" href="index.html">Vente</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
    );
};

export default Navbar;