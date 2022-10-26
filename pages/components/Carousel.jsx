import React from 'react'
import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../public/krpto.jpg'
import img2 from '../../public/krpto2.jpg'
import img3 from '../../public/krpto5.jpg'
import img4 from '../../public/krptomania1.jpg'
import img5 from '../../public/krptomania2.jpg'
import img6 from '../../public/krptomaniaa.jpg'
import img7 from '../../public/navbrand.jpg'



const Carousels = () => {
  return (
    <div><Carousel indicators={false} controls={false} >
    <Carousel.Item interval={600}>
      <Image
        src={img1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={600}>
      <Image
        src={img2}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={600}>
      <Image
        src={img3}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={600}>
      <Image
        src={img4}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={600}>
      <Image
        src={img5}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={600}>
      <Image
        src={img6}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={600}>
      <Image
        src={img7}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Carousels
