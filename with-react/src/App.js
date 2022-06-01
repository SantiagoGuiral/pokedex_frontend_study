import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const charizard_info = {
  ndd: "006",
  level: "100",
  type: "FIRE",
  hability: "FLAMES",
  height: "1,7m",
  weight: "90,5 Kg"
}


function App() {

  return (
    <div className="App">
      <Header />
      <Main {...charizard_info}/>
      <Footer /> 
    </div>
  );
}

export default App;
