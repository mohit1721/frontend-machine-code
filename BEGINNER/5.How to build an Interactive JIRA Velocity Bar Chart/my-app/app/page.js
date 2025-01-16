 'use client'

import { useState } from "react";
import CHART_DATA from './data.js';
import Chart from "@/components/Chart.jsx";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = ()=>{
    setIsVisible(!isVisible)
  }
  return (
    <main className='container'>
<button 
className='button'
onClick={handleClick}>Toggle Chart</button>
{
        isVisible && <Chart chartData={CHART_DATA} />

}
    </main>
  );
}
