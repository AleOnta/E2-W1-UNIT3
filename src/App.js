import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./assets/components/Home";
import NavComponent from "./assets/components/NavComponent";
import FooterComponent from "./assets/components/FooterComponent";

function App() {
  return (
    <>
      <NavComponent />
      <Home />
      <FooterComponent placeholder="email address" />
    </>
  );
}

export default App;
