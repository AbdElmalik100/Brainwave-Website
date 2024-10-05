import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
import Benifits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <main className='pt-[4.75rem] overflow-hidden lg:pt-[5.25rem]'>
        <Header></Header>
        <Hero></Hero>
        <Benifits></Benifits>
        <Collaboration></Collaboration>
        <Services></Services>
        <Pricing></Pricing>
        <Roadmap></Roadmap>
        <Footer></Footer>
      </main>
      <ButtonGradient />
    </>
  )
}

export default App
