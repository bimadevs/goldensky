import { Hero } from '../components/Hero'
import { Pricing } from '../components/Pricing'
import { About } from './About'
import { Services } from './Services'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Pricing />
        </>
    )
}

export default Home