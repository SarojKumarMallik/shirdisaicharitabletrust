import React from 'react'
import Herosection from '../Components/Herosection/Herosection'
import Herocounter from '../Components/Herocounter/Herocounter'
import Heroabout from '../Components/Heroabout/Heroabout'
import Herocard from '../Components/Herocard/Herocard'
import Faq from '../Components/Faq/Faq'
import Whychoose from '../Components/Whychoose/Whychoose'
import Cta from '../Components/Cta/Cta'
import Ourwork from '../Components/Ourwork/Ourwork'
import Testimonial from '../Components/Testimonial/Testimonial'

const Hero = () => {
  return (
    <>
    <Herosection/>
    <Herocard/>
    <Heroabout/>
    <Herocounter/>
    <Ourwork/>
    <Testimonial/>
    <Whychoose/>
    
    <Cta/>
    <Faq/>
    </>
  )
}

export default Hero