import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Buttons from './components/Buttons'
import Carousels from './components/Carousel'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Navigationbar from './components/Navbar'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Kryptomania</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
       <Navigationbar />
       <Homepage />
       <Buttons />
       <Carousels />
       <Footer />
      </main>

    </div>
  )
}
