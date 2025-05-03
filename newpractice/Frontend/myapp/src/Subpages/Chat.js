import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Chat = () => {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[phone,setPhone]=useState()
    const[value,setValue]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/applicationpath',{name,email,password,phone})
        .then((result)=>{
            console.log(result)
            toast.success("registered successfully")  
        })
        .catch(err=>console.log(err))
        }

            
    const[email1,setEmail1]=useState()
    const[password1,setPassword1]=useState()
    
    const handleSubmit1=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/v1/login',{email:email1,password:password1})
        .then((result)=>{
            console.log(result)
            setValue(result.data)
            if(result.data==="success"){
                toast.success("login successfully")
                setValue('')
                window.location.href="https://wa.me/918884011518"
            }
        })
        .catch(err=>console.log(err))
    }

return (
    <div class='chat mt-5 pt-5'>
        <h3 class='chat-h3 mt-5'>Join Us Today!</h3>
        <p class='chat-p pt-3'>Elevate your skills and career with our expert-led courses. Enroll now to start your journey with CodeTech Learn.</p>
        <div class='d-flex justify-content-center py-3'>
            <button class='chat-btn'data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                <p>Contact Us</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                </svg>
            </button>
        </div>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Login</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form onSubmit={handleSubmit1}>
                        <span class='text-danger'>{value}</span>
                        <div className='mb-3'>
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input type='text' required={true} placeholder='enter Email' autoComplete='off' name='email' className='form-control rounded-0' value={email1} onChange={(e)=>setEmail1(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password">
                                <strong>Password</strong>
                            </label>
                            <input type='text' required={true} placeholder='enter Password' autoComplete='off' name='password' className='form-control rounded-0' value={password1} onChange={(e)=>setPassword1(e.target.value)} />
                        </div>
                        <button type='submit' class="btn btn-primary w-100">Login</button>
                    </form>
                    </div>
                    <div class="modal-footer">
                        <a class='me-auto text-secondary text-decoration-none' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" href='##'>create new account</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className='mb-3'>
                                <label htmlFor="name">
                                    <strong>Username</strong>
                                </label>
                                <input type='text' required={true} placeholder='enter Name' autoComplete='off' name='name' className='form-control rounded-0' value={name} onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="email">
                                    <strong>Email</strong>
                                </label>
                                <input type='text' required={true} placeholder='enter Email' autoComplete='off' name='email' className='form-control rounded-0' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="password">
                                    <strong>Password</strong>
                                </label>
                                <input type='text' required={true} placeholder='enter Password' autoComplete='off' name='password' className='form-control rounded-0' value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="phone">
                                    <strong>Phone Number</strong>
                                </label>
                                <input type='text' required={true} placeholder='enter phone number' autoComplete='off' name='phone' className='form-control rounded-0' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <button type='submit' className='btn btn-success rounded'>Register</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <Link to='/login'>
                            <button className='btn btn-default rounded w-100 bg-secondary text-decoration-none'>Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Chat