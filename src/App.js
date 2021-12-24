// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home';
import About from './components/about';
import Projects, { Projects2, Projects3, Projects4 } from './components/projects';
import Contact from './components/contact';
function App() {
  const a = "dark";

  return (
    <div class={a +" containers"}>
      <Navbar />
      <section class="child"><Home /></section>
      <section class="child"><About /></section>

    <section class="projCont">
      <section class="child"><Projects /></section>
      <section class="child"><Projects2 /></section>
      <section class="child"><Projects3 /></section>
      <section class="child"><Projects4 /></section>
    </section>
    <section class="child"><Contact /></section>

      {/* </div> */}
      {/* <Learn /> */}
    </div>

  );
}

export default App;
