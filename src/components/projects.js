
// import {  } from '@heroicons/react/'
import { data } from "../data"

function individualProject(i) {
    return (
        <div id="projects" class="h-screen bg-gray-100 dark:bg-gray-900"><br />
        <div class="mt-12">
        <div class="p-2 lg:mx-8 text-yellow-400 lg:text-xl font-bold">My Projects.</div>
            <div class="px-8 mr-5 lg:ml-40 font-bold dark:text-white">{i}. {data[i - 1].title}</div>
            <div class="px-8 lg:mr-10 lg:ml-40 my-2 md:flex h-1/3 md:h-3/5 dark:text-white">
                {/* <div class="m-3 md:w-3/5 bg-top bg-contain bg-no-repeat h-2/3 md:h-full " style={{backgroundImage: `url(${data[i-1].image})`}}></div> */}
                <div class=" p-2 m-3 w-6/6 md:w-3/5 h-36 md:h-80 bg-top bg-contain bg-no-repeat opacity-90 hover:opacity-100" style={{backgroundImage: `URL(${data[i-1].image})`}}></div>
                <div class="p-2 text-xs md:text-base m-2 about md:w-2/5">
                    {data[i - 1].description.map((desc) => (
                        <p class="tracking-wider leading-relaxed">{desc}</p>
                    ))}
                    <br></br>
                    <div class="flex flex-wrap">
                        {data[i - 1].tech_stack.map((tech) => (
                            <div class="bg-gray-300 m-1 p-1 md:p-2 tracking-wider dark:bg-gray-800">{tech}</div>
                        ))}
                    </div>

                    <br></br>
                    <div class="uppercase p-2 hover:text-blue-900  text-blue-600 dark:text-blue-400 dark:hover:text-blue-600"><a href={data[i - 1].link} class="flex"><div>View Project</div>
                        <div class="w-2 m-1 transform rotate-45 -translate-y-2.5 lg:-translate-y-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg></div></a></div>

                </div>


            </div>
        </div>


        </div>
    )
}

export default function Projects() {
    return (
        <>
            {individualProject(1)}
        </>

    )
}

export function Projects2() {
    return (
        <>
            {individualProject(2)}
        </>
    )
}

export function Projects3() {
    return (
        <>
            {individualProject(3)}
        </>
    )
}


