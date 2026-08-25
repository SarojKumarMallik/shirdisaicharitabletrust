import React from 'react';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import Visiondesc from '../Components/Visiondesc/Visiondesc';
import Cta from '../Components/Cta/Cta';
import Faq from '../Components/Faq/Faq';

const Vision = () => {
  return (
    <>
      <Breadcrum
        title="Our Vision"
        subtitle="Envisioning a compassionate society rooted in love, faith, harmony, and spiritual upliftment."
      />
      <Visiondesc />
      
    </>
  );
};

export default Vision;