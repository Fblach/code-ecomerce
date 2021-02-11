import React from 'react';  
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
    <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
    
  );
}

export default App;
