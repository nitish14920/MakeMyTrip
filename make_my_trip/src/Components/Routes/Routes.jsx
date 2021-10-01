import React from 'react';
import NavbarSearchItems from '../NavbarSearchItems/NavbarSearchItems';
import {Route} from 'react-router-dom';
import Aeroplane from '../Aeroplane/Aeroplane';


function Routes() {
    return (
        <div>
            <NavbarSearchItems/>
            <Route exact path='/'>
                <h1><Aeroplane /></h1>
            </Route>
            <Route path='/hotels'>
                <h1>aboutpage</h1>
            </Route>
            <Route path='/homestays'>
                <h1>users page</h1>
            </Route>

            
        </div>
    )
}

export default Routes
