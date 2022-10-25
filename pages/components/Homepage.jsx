import Image from 'next/image'
import krypto from '../../public/krpto1.jpg'

function Homepage() {
    return(
    <div className="">
     <Image src={krypto} />
    </div>
    )
} 

export default Homepage;