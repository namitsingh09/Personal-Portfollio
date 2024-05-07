import Names from "./Componenets/Name";
import Link from "next/link";
import "./globals.css"


import Image from "next/image";
import Socio from "./Componenets/Socio";
import Notification from "./About/Notification";


export default function Home() {
  return (
    <main style={{backgroundColor:'black', color:'white'}} >
     
      

<Names />
<Socio/>



    </main>
  );
}


