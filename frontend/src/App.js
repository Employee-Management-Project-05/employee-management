import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import AddEmployee from "./components/AddEmployee";
import ViewEmployee from "./components/ViewEmployee";
import SingleView from "./components/SingleView";
import UpdateEmployee from "./components/UpdateEmployee";


const App = () => {
  return (
    <div>
      <Router>
      <Header/> 
        <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path="/create" element={<AddEmployee />} />
        <Route path="/display" element={<ViewEmployee />} />
        <Route path="/edit/:id" element={<UpdateEmployee />} />
        <Route path="/view/:id" element={<SingleView />} />
        </Routes>
        
        </Router>
    </div>
  )
}

export default App