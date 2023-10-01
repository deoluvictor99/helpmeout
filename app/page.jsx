import Navbar from './components/Navbar'
import Header from './components/Header'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <main className='bg-[#F4F6F8]'>
        <Navbar/>
        <Header/>
        <Features/>
        <HowItWorks/>
        <Footer/>
      </main>
    </>
  )
}
