import React from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Members } from '../components/Members'
import { Calendar } from '../components/calendar/Calendar'

export const Home = () => {
  return (
    <div>
       <Navbar />
       <Header />
       <About />
       <Members />
       <Calendar />
    </div>
  )
}
