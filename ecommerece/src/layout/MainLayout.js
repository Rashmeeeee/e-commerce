import React from 'react'
import { Outlet } from 'react-router-dom'
import AiChatWidget from '../components/AiChatWidget'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useCheckToken from '../hooks/useCheckToken'

function MainLayout() {
    useCheckToken();
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
        <AiChatWidget />
    </div>
  )
}

export default MainLayout