import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from './config/particlesConfig'
import HomePage from "../components/pages/HomePage"
import { Link } from "react-scroll"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const ParticlesBackground = () => {

    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])

    return (
        
        <div>
            <Particles id="tsparticles" options={particlesConfig} init={particlesInit} />
            <HomePage/>
            
        </div>
    )
}

export default ParticlesBackground
