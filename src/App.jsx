import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Estilos Globales
import GlobalStyles from "@/styles/globalStyles";
// Pages
import Home       from "@/pages/home.jsx";
import Novedades  from "@/pages/novedades.jsx";
import Simulador  from "@/pages/simuladorPage.jsx";
import Envios     from "@/pages/envios.jsx";
import Herrajes   from "@/pages/herrajes.jsx";
import Melaminas  from "@/pages/melaminas.jsx";
import Muebles    from "@/pages/muebles.jsx";
import Contactos  from "@/pages/contactos.jsx";
// Compponents - Politicas
import Cookies    from "@/components/policies/Cookies.jsx";
import Privacidad from "@/components/policies/Privacidad.jsx";
import Terminos   from "@/components/policies/Terminos.jsx";
// Componentes UI
import Footer     from "@/components/layout/Footer.jsx";
import Header     from "@/components/layout/Header.jsx";
import Cursor     from "@/data/cursor.js"

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Cursor />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/envios" element={<Envios />} />
          <Route path="/herrajes" element={<Herrajes />} />
          <Route path="/muebles" element={<Muebles />} />
          <Route path="/melaminas" element={<Melaminas />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
