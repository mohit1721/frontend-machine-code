'use client'
const Bar = ({ data, maxTicketCount })=>{

    // const totalT
    
      const style = {
        height: `${(data.ticketCount / maxTicketCount)*100 }%`,
        backgroundColor:data.colour,
        "--max-bar-height": `${(data.ticketCount / maxTicketCount) * 100}%`,
        
    }
      return(
        <div className='bar' style={style}  >
          <label className='bar-label'> {`${data.name}- ${data.ticketCount} `}</label>
    
        </div>
      )
    }
    export default Bar;