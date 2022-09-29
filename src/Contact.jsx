import React, { useState } from 'react';

const Contact=()=>{
    
    const [name,upname]=useState({
        fullname:"",
        email:"",
        phone:"",
        message:""
    });
const inputEvent=(event)=>{
    const {name,value}=event.target;
    upname((prevalue)=>{
        console.log(prevalue)
        return{
            ...prevalue,
            [name]:value,
        }
    })
}
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`my name is ${name.fullname}. my mobile no is ${name.phone} and my email is ${name.email}`)
    }
    return (
        <React.Fragment>
        <div className='my-5'>
        <h1 className='text-center'><span className='hr'>contact us</span></h1>
        <div className='container contact_div'>
        <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
        <form onSubmit={formSubmit}>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">fullname</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={inputEvent} name="fullname" value={name.fullname} placeholder="enter your fullname"  required/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" onChange={inputEvent} name="email" value={name.email} placeholder="name@example.com" required/>
        </div>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">number</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" onChange={inputEvent} name="phone" value={name.number} placeholder="mobile number" required/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={inputEvent} name="message" value={name.msg}></textarea>
        </div>
        <div className='col-12'>
        <button className='btn btn-outline-primary' type="submit">submit</button>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Contact;