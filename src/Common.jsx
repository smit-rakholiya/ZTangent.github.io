import React from "react";
import { NavLink } from 'react-router-dom';

const Common=(props)=>{
    return (
        <React.Fragment>
        <section id="header" className='d-flex align-items-center'>
        <div className='container-fluid nav_bg '>
        <div className="row ">
        <div className='col-10 mx-auto d-flex align-items-center justify-content-center'>
        <div className='row '>
        <div className='col-md-6 pt-5 pt-lg-z-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
        <h1 className=''>{props.name}<br/><strong className='brand_name '>Z-Tangent</strong></h1>
        <h2 className='my-3 line1'>
        We Are the team of talented devloper making websites
        </h2>
        <div className='mt-3'>
        <NavLink href='' className='btn-get-started' to={props.visit}>{props.buttonheading}</NavLink>
        </div>
        </div>
        <div className='col-lg-6 order-1 order-lg-2 header_img'>
        <img src={props.imgsrc} className='img-fluids animated' alt="img"/>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </React.Fragment>
    )
}

export default Common;