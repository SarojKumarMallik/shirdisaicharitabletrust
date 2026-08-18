import React from 'react'
import Heroabout from '../Components/Heroabout/Heroabout'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import Faq from '../Components/Faq/Faq'
import Abouthero from '../Components/Abouthero/Abouthero'
import Founder from '../Components/Founder/Founder'
import Cta from '../Components/Cta/Cta'
import Whychoose from '../Components/Whychoose/Whychoose'
import Journey from '../Components/Journey/Journey'
import Ourwork from '../Components/Ourwork/Ourwork'
import Testimonial from '../Components/Testimonial/Testimonial'


const About = () => {
  return (
    <>
    <Breadcrum/>
    <Abouthero/>
    <Founder/>
    <Journey/>
    
    <Whychoose/>
    <Ourwork/>
    <Cta/>
    <Faq/>
    </>
  )
}

export default About