import React from 'react';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Missiondesc from '../Components/Missiondesc/Missiondesc';
import Cta from '../Components/Cta/Cta';
import Faq from '../Components/Faq/Faq';

const Mission = () => {
  return (
    <>
      <Breadcrum
        title="Our Mission"
        subtitle="Dedicated to serving humanity through selfless love, Annadanam, healthcare, and education."
      />
      <Missiondesc />
      
    </>
  );
};

export default Mission;