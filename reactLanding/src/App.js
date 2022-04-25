import "./App.css"
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <div className="App">
        <Intro/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
