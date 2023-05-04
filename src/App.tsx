import { Routes, Route } from 'react-router-dom';

import Main from './components/pages/Main';
import Home from './components/Home/Home';
import OurCoffee from './components/pages/OurCoffee';
import CoffeeItem from './components/CoffeeItem/CoffeeItem';
import Pleasure from './components/pages/Pleasure';

import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<OurCoffee />} />
                    <Route path="about/:id" element={<CoffeeItem />} />
                    <Route path="pleasure" element={<Pleasure />} />
                    <Route path="pleasure/about/:id" element={<CoffeeItem />} />
                    <Route path="*" element={<div>Not Found</div>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
