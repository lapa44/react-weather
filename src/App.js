import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css';
import Header from './components/header/Header';
import {Container} from "react-bootstrap";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <Container className="weatherApp">
      <Header/>
      <Footer/>
        </Container>
    </div>
  );
}

export default App;
