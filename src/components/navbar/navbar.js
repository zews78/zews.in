// import { Fragment } from 'react'
// import {useParams} from "react-router-dom"
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { Switch } from '@headlessui/react'
// import { useContext } from 'react'
// import themeContext from '../../context/themeContext'
// import themeState from '../../context/themeState'
import "./navbar.css";
// import logo from "/main_icon.png"
const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'About Me', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]
// const { userparams } = useParams();
// const queryString = window.location.search;

// console.log(userparams);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}





function Toggle() {
  // const a = useContext(themeContext);
  // console.log(a.mode, "navbart_galsj")
  const [enabled, setEnabled] = useState(true)
  // enabled ? a.setmode("dark") : a.setmode("light"); 

  return (
    <>

    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-yellow-300' : 'bg-gray-200'
        } relative py-2 inline-flex flex-shrink-0 items-center h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${enabled ? 'translate-x-5' : 'translate-x-0'
          }  py-2 pointer-events-none inline-block h-6 w-6 transform bg-white rounded-full shadow-lg transition ease-in-out duration-200`}
      />
    </Switch>
    </>
  )
}



export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-10 dark:bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-14">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://raw.githubusercontent.com/zews78/zews.in/recovery/public/header_icon.png"
                    alt="Workflow"
                  />
                  <div class="flex self-center cursor-pointer">
                  <img
                    className="hidden lg:block h-6 w-auto self-center"
                    src="https://raw.githubusercontent.com/zews78/zews.in/recovery/public/header_icon.png"
                    alt="Workflow"
                  />
                  <div class="hidden lg:block font-extrabold text-3xl ml-4 dark:text-white" style={{lineHeight:"64%"}}>zews</div>

                  </div>


                </div>
                {/* fix here by defining different classname */}
                <div className="hidden sm:block sm:ml-6 lg:ml-1/2 navbarItems">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                        
                      </a>
                    ))}
                    {/* dark/light mode toggle */}
                    <div className="place-self-end" >{Toggle()}</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              </div>
            </div>
          </div>






          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {/* <div class="px-3 py-2">{Toggle()}</div> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}