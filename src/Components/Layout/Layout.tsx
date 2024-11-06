import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function
    () {
    return (
        <div>
            <NavBar />
            <div className='py-24'>
                <Outlet />
            </div>
        </div>
    )
}
