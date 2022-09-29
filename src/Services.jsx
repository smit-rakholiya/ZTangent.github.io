import React from 'react';
import Card from "./Card";
const cards=[
    {
        imgsrc:"./Images/mobile1.png",
        head:"app developer"
    },
    {
        imgsrc:"./Images/mobile2.webp",
        head:"website developer"

    },
    {
        imgsrc:"./Images/mobile3.jpg",
        head:"React developer"
    },
    {
        imgsrc:"./Images/mobile4.jpg",
        head:"game developer"
    },
    {
        imgsrc:"./Images/mobile5.png",
        head:"fullstack develpoer"
    },
    {
        imgsrc:"./Images/error.webp",
        head:"error solver"
    }
]
const Services=()=>{
    
    return (
        <React.Fragment>
        <div className='m-5'>
        <h1 className='text-center '><span className='hr '>Our Services </span></h1>
        <div className='container-fluid mb-5 '>
        <div className='row '>
        <div className='col-10 mx-auto '>
        <div className='row gy-5'>
        {cards.map((lol)=>{
            return  <Card imgsrc={lol.imgsrc} heading={lol.head}/>
          })}
        </div>
        </div>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Services;