// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
// import Learn from './components/homeLearn';
import Home from './components/home';
import About from './components/about';
import Projects, { Projects2, Projects3, Projects4 } from './components/projects';
import Contact from './components/contact';
import { useContext } from 'react/cjs/react.development';
import themeContext from './context/themeContext';
// import { useEffect } from 'react';

function App() {
  const a = useContext(themeContext);
  // useEffect(() => {
  //   console.log(a.mode, "aap.js");
  // })
  return (

      // <div class="m-0 p-0 container">
    <div class={a.mode +" containers"}>
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
