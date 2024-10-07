import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'



const Login = () => {
    const gref = useRef();
    const gref1 = useRef();

    useGSAP(() => {
        gsap.from(gref.current, {
            y: -400,
            opacity: 0,
            rotate: 1440,
            delay: 0.5,
            duration: 2
        })
    })

    useGSAP(() => {
        gsap.from(gref1.current, {
            y: 400,
            opacity: 0,
            rotate: -1440,
            delay: 0.5,
            duration: 2
        })
    })

    return (
        <div className='w-screen flex-col gap-10 h-screen flex justify-center items-center'>
            <div ref={gref} className='border bg-red-300 border-black h-40 w-40 flex justify-center items-center text-2xl rounded-xl shadow-xl'>Hello world</div>
            <div ref={gref1} className='border bg-blue-600 border-black h-40 w-40 flex justify-center items-center text-2xl rounded-xl shadow-xl'>Hello world</div>
        </div>
    )
}

export default Login
