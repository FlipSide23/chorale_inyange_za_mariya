import React from 'react'
import Header from '../components/Header'
import { About } from '../components/About'
import { Members } from '../components/Members'
import { Calendar } from '../components/Calendar'

export const Home = () => {
  return (
    <>
       <Header />
       <About />
       <Members />
       <Calendar />
    </>
  )
}
