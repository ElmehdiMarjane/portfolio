import React,{useState}  from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
import Logo from '../assets/Logo.png'









const Navbar=()=>{
    const [nav, setNav]=useState(false)
    const handlClick=()=>setNav(!nav)


return(
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300" >
        <div>
                <img  src={Logo} alt="Logo Image" style={{width:'100px',margin:'0 100px 0 0'}}/>
        </div>   

{/*PC */}

    <div >
        <ul className="hidden md:flex">
            <li className="py-6 text-xl">Home</li>
            <li className="py-6 text-xl">About</li>
            <li className="py-6 text-xl">Skills</li>
            <li className="py-6 text-xl">Projects</li>
            <li className="py-6 text-xl">Contact me</li>
        </ul>

    </div>


    {/*Mobile */}

<div onClick={handlClick} className="md:hidden z-10">
    

    {!nav ? <FaBars size={25}/> :<FaTimes size={25}/>}
</div>


        <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className="py-6 text-4xl">Home</li>
            <li className="py-6 text-4xl">About</li>
            <li className="py-6 text-4xl">Skills</li>
            <li className="py-6 text-4xl">Projects</li>
            <li className="py-6 text-4xl">Contact me</li>
        </ul>

{/*Social Media*/}
<div className="hidden">



</div>









    </div>
)




}
export default Navbar;