import React from 'react'
import Header from './home/Header'
import SectionView from './home/SectionView'
import Footer from './home/Footer'

export default function HomeLayout() {
  return (
    <div>
        <Header/>
        <SectionView/>
        <Footer/>
    </div>
  )
}
