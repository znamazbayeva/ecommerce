import React from 'react';
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
          <Routes>
            <Route path='/' exact element={<HomeScreen />} />
            <Route path='/product' element={<ProductScreen />} > 
              <Route path=':id' element={<ProductScreen />}></Route>
            </Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
