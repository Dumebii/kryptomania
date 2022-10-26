import Head from 'next/head'
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
        <meta name="Trade digital currencies" content="Kryptomania is a digital assets brand making the receiving of digital funds easy and without stress." />
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
