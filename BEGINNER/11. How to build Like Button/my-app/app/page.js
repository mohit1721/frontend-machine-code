'use client'
import { FaRegHeart, FaHeart, FaShareAlt } from 'react-icons/fa';
import { useState } from 'react';
const GRAPHIC = 'https://react.semantic-ui.com/images/avatar/large/matthew.png';

export default function App() {
const [isLiked , setIsLiked]= useState(false);
  const handleLike=()=>{
    setIsLiked((prev)=> !prev);
  }

  return (
    <div className="card">
      <img
        src={GRAPHIC}
        alt="Person Image"
      />
      <div className="actions">
        <button 
        onClick={handleLike}
        
        className="action-button">
     
          {isLiked ? <FaHeart  className='liked' /> : <FaRegHeart className='idle'/> }
        </button>
        <button className="action-button share-button">
          <FaShareAlt />
        </button>
      </div>
    </div>
  );
}
