'use client'

import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

 
export default function Home() {
const[loading,setLoading] = useState(true);

useEffect(()=>{

    setTimeout(()=>{
      setLoading(false)
    }, 3000)

},[])


  return (
    <main>
    {loading ? <Loader /> : <div>Content is loaded!</div> }
  </main>
  );
}
