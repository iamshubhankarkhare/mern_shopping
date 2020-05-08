import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'


function App() {
    return (<div className="App" >
        <AppNavbar></AppNavbar>
        <ShoppingList></ShoppingList>
    </div>);
}

export default App;