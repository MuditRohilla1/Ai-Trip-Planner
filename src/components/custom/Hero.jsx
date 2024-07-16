import React from 'react'
import { Button } from '../ui/button'

function Hero() {
    return (
        <div className='flex items-center mx-56 gap-9 flex-col'>
            <h1 className='font-extrabold text-[45px] text-center mt-16'>
            <span className='text-[blue]'>Our AI-Enabled Trip Planner is a revolutionary travel assistant designed to simplify and enhance your travel experience.</span>
            </h1>
            <p className='font-sans text-gray-600 text-center'>By leveraging advanced artificial intelligence, this tool offers personalized trip planning, ensuring every journey is perfectly tailored to your preferences and needs.</p>
            <Button>Get Started</Button>
        </div>
    )
}

export default Hero