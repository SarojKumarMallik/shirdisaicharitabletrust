import React from 'react'
import Herosection from '../Components/Herosection/Herosection'
import Herocounter from '../Components/Herocounter/Herocounter'
import Heroabout from '../Components/Heroabout/Heroabout'
import Herocard from '../Components/Herocard/Herocard'
import Faq from '../Components/Faq/Faq'

const Hero = () => {
  return (
    <>
    <Herosection/>
    <Herocard/>
    <Heroabout/>
    <Herocounter/>
    <Faq/>
    </>
  )
}

export default Hero