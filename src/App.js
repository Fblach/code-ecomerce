import React from 'react';  
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Cart from './Components/Cart/Cart'
import CartContext from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer/>
          </Route>
          <Route path='/categoria/:id'>
            <ItemListContainer/>
          </Route>
          <Route path='/item/:id'>    
            <ItemDetailContainer/>
          </Route>  
          <Route path='/carrito'>
            <Cart/>
          </Route>  
          <Route path='*' children={<div>404</div>}/>
          </Switch>
      </CartContext>
    </BrowserRouter>
    
  );
}

export default App;
