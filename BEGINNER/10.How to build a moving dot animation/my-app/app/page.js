import React, {useState,useEffect} from 'react'


const App=()=>{
  const [position, setPosition] = useState ({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove =(event)=>{
      setPosition({x:event.clientX , y:event.clientY})
    }
    window.addEventListener("mousemove" , handleMouseMove);

return ()=>{
  window.removeEventListener("mousemove" , handleMouseMove)
}
  }, [])


  return (
    <main className='container'>
<div 
style={{
top: position.y ,
left: position.x
}}

 className='dot'>
</div>
    </main>
  )
}
export default App;

/*
right aur bottom:

Agar right aur bottom use karte, to positioning ka base container ke bottom-right corner hota.
Yeh calculation complex hoti,
*/