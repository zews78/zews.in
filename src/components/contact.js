import {useEffect, useState} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedinIn } from 'react-icons/fa';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import "./chart.css";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}

export default function Contact() {
  let date = new Date();
  let year = date.getFullYear();
  const { width } = useViewport();
  // const width = 700;
  const breakpoint = 520;
  useEffect(() => {
      AOS.init({
          duration: 1000
      });

  }, [])
  return (
    <div id="contact" class="h-screen overflow-x-hidden relative dark:bg-gray-900 overflow-hidden"><br /><br /><br/>

      <div class="p-2 lg:mx-8 text-yellow-400 lg:text-xl font-bold">Contact.</div>
      <div data-aos={`${(width>breakpoint)? "fade-up" : ""}`} class="px-8 lg:mx-40 my-2 dark:text-white">

        <div class="text-xl md:text-3xl">Let's Talk!</div>
        <br></br>
        <div class="text-sm md:text-base md:w-3/5 tracking-wider leading-relaxed">Feel free to reach out if you want to build something together, have question, share your thoughts or just want to connect.</div>
        <div><br></br></div>
        <a href="mailto:shariquealam52@gmail.com"><button type="button" class="lg:text-lg text-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Ping me</button></a>
        <div><br></br></div>


        <div class="flex">
          <a
            href="https://github.com/zews78"
          >
            <AiFillGithub class="text-4xl mr-2 hover:text-blue-700 text-blue-500" />
          </a>
          <a
            href="https://twitter.com/shariquealam52"
          >
            <AiOutlineTwitter class="text-4xl mr-2 hover:text-blue-700 text-blue-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/sharique-alam-4b0aa0195/"
          >
            <FaLinkedinIn class="text-4xl mr-2 hover:text-blue-700 text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/i_m.sharique/"
          >
            <AiFillInstagram class="text-4xl mr-2 hover:text-blue-700 text-blue-500" />
          </a>
        </div>

      </div>
      
      {/* <div class="path-move2">
        <svg class="stroke-current text-black dark:text-yellow-500" viewBox="0 0 750 363">
          <path class="path2" d="M 800 350 C 700 300 500 350 450 350 C 250 350 350 100 400 300 C 500 150 500 400 200 350 C 150 350 50 300 0 350 " />
        </svg>
      </div> */}

      <div class="text-center text-xs md:text-sm w-full absolute bottom-2 dark:text-white hover:text-gray-800">
        <div>Made with <span class="text-base">♥️</span> by Sharique Alam</div>
        <div>Copyright © {year} zews</div>
      </div>

    </div>

  )
}