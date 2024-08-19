import logo from "./logo.svg";
import "./App.css";

import MainContent from "./component/Main";
import Footer from "./component/Footer";
import Navigation from "./component/NavbarPage";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
