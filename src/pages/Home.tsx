import  Hero  from '../components/Hero'
import { Pricing } from '../components/Pricing'
import  About  from '../components/About'
// import { Services } from '../components/Services'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            {/* <Services /> */}
            <Pricing />
        </>
    )
}

export default Home