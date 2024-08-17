import React, {useEffect} from 'react';
import Aos from "aos"
import {Routes, Route} from "react-router-dom";
import Nav from './component/nav';
import Company from './component/company';
import Cards from './component/cards';
import Footer from './component/footer';

function App(props) {

    useEffect(() => {
        Aos.init()
    }, []);
    return (
        <div >
            <Nav/>
            <Routes>
                <Route path='/Nav' element={<Nav/>}/>
                <Route path='/Company' element={<Company/>}/>
                <Route path='/Cards' element={<Cards/>}/>
                <Route path='/Footer' element={<Footer/>}/>
            </Routes>

        </div>
    );
}

export default App;