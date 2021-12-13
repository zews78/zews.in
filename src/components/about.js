
export default function About() {
    const intrests = ["Problem Solving","AI", "Autonomy", "Self-Driving", "Robotics","WEB3"];
    const backImg = "https://raw.githubusercontent.com/zews78/zews.in/master/public/profile_img.jpg?token=ANLZMGXRE3U37PAYCQI6LTLBUZ3JK";
    return (
        <div id="about" class="h-screen bg-gray-100 dark:bg-gray-900"><br /><br /><br />
            <div class="p-2 lg:mx-8 text-yellow-400 lg:text-xl font-bold">About Me.</div>
            <div class="px-8 text-sm md:text-base lg:mx-40 my-2 md:flex dark:text-white">
                {/* <div class="semicircle"></div>
                <div class="cyclender"></div> */}
                <div class="p-2 m-2 about md:w-2/4">
                    <div class="text-left"><p class="my-2">A prefinal-year Electonics and Comm. Engg. undergrad student at NIT Kurukshetra.</p>
                        <p class="my-2">I am Web Developer and Artificial Intelligence enthusiast who is open to collaborate and work on cool ideas.</p>
                        <p class="my-2">I like working with Web Technologies and Autonomy and I enjoy innovating and building new things.</p>        
                        </div>

                    <div class="my-2 lg:my-4 bg-black w-1/4 h-2 dark:bg-white"></div>
                    <div><p>More over you can also find me in playing badminton or football.</p>
                    <div class="hidden md:block"><br/></div>
                    <div class="-ml-2 md:flex md:flex-wrap hidden">
                        {intrests.map((tech) => (
                            <div class="bg-gray-300 m-1 p-1 md:p-2 tracking-wider dark:bg-gray-800">{tech}</div>
                        ))}
                    </div>

                    </div>

                </div>
                
                <div class="relative p-2 m-2 h-36 md:h-96 opacity-80 hover:opacity-100 bg-cover bg-center  md:w-2/4 bg-black transform translate-x-3 translate-y-3 " >
                    <div class="absolute p-2 m-2 h-full w-full bg-gray-500 bg-cover bg-center md:w-full md:h-full transform translate-x-3 translate-y-3" style={{backgroundImage: `url(${backImg})`}}></div>
                </div>
                

                {/* <div class="circle1"></div>
                <div class="rectangle"></div>
                <br/>
                <div class="triangle"></div> */}

            </div>

        </div>

    )
}