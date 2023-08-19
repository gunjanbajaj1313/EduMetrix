import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./components/Team/Team";
import About from "./components/about/About";
import Clone from "./components/clone/Clone";
import Connect from "./components/connect/Connect";
import Custom from "./components/customsolutions/Custom";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Technology from "./components/technology/Technology";
import Build from "./components/build/Build";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <About />
      <Team />
      <Build />
      <Technology />
      <Clone />
      <Projects />
      <Services />
      <Custom />
      <Connect />
    </div>
  );
}

export default App;
