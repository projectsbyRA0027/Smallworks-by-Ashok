import {Bars3Icon} from '@heroicons/react/24/solid'
import {useState} from 'react'
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
export default function Header(){
    const [toggleMenu,setToggleMenu] = useState(false);

    return( <header className="flex justify-between px-5 py-2 bg-primary">
        <a className="font-bold text-black" href="#">R.Ashok</a>
        <nav className="hidden md:block">
        < ul className="flex text-white">
            <li><a href="#">Home</a></li>
            <li><a href={Hero}>about</a></li>
            <li><a href={Projects}>projects</a></li>
            <li><a href={Contact}>Contact</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="hidden md:hidden">
        < ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className="text-white h-5"/></button>
    </header>
    );
}