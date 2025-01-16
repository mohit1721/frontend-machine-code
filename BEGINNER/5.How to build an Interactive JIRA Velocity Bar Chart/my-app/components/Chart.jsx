'use client'

import Bar from "./Bar"

const Chart = ({chartData})=>{

// const maxTicketCount = chartData.reduce((acc, item)=>{
//   // acc+=item.ticketCount;
//   acc= Math.max(acc, item.ticketCount)
//   return acc;
// }, 0);

// The spread operator (...) breaks the array into separate values, allowing Math.max to find the largest number.
const maxTicketCount= Math.max(...chartData.map(item => item.ticketCount))

// console.log(totalTicketCounts)
  return (
    <div className='chart-container'>
    <span className='labelY' >No of Tickets</span>
    <span className='labelX' >Departments </span>
    {
      chartData && 
        
        chartData.map((item,idx)=>{
          return (
            <Bar 
            key={idx}
            
            data={item} maxTicketCount={maxTicketCount} />
          )
        })
       
      
    }
    </div>
  )
}
export default Chart;