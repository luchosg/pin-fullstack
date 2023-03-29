import React from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
    return(
        <div>
            <NavBar />
            <Home />
            <About />
            <Products />
            <Services />
            <Contact />
        </div>
    )
}

export default App;