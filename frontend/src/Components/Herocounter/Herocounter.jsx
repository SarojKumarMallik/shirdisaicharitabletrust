import React, { useState, useEffect, useRef } from 'react';
import './Herocounter.css';

const Herocounter = () => {
  const [counts, setCounts] = useState({
    welfareInitiatives: 0,
    educationPrograms: 0,
    healthcareServices: 0,
    communityRelief: 0,
  });

  const sectionRef = useRef(null);

  const targets = {
    welfareInitiatives: 10,
    educationPrograms: 8,
    healthcareServices: 6,
    communityRelief: 5,
  };

  // IntersectionObserver to trigger count-up when scrolling into view (up or down)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    // Reset to zero before starting count up
    setCounts({
      welfareInitiatives: 0,
      educationPrograms: 0,
      healthcareServices: 0,
      communityRelief: 0,
    });

    const duration = 1200; // 1.2s count duration
    const steps = 30;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);

      setCounts({
        welfareInitiatives: Math.floor(targets.welfareInitiatives * progress),
        educationPrograms: Math.floor(targets.educationPrograms * progress),
        healthcareServices: Math.floor(targets.healthcareServices * progress),
        communityRelief: Math.floor(targets.communityRelief * progress),
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, intervalTime);
  };

  return (
    <section ref={sectionRef} className="herocounter-section">
      <div className="container">
        {/* Dark Navy & Gold Counter Bar (2 per row on Mobile col-6) */}
        <div className="counter-bar-wrapper">
          <div className="row align-items-center g-2 g-md-0">
            {/* Stat 1: Welfare Initiatives */}
            <div className="col-6 col-lg-3 counter-col">
              <div className="counter-item">
                <div className="counter-icon-circle">
                  <i className="bi bi-heart-fill"></i>
                </div>
                <div>
                  <div className="counter-number">
                    {counts.welfareInitiatives}+
                  </div>
                  <div className="counter-label">Welfare Initiatives</div>
                </div>
              </div>
            </div>

            {/* Stat 2: Education & Support Programs */}
            <div className="col-6 col-lg-3 counter-col">
              <div className="counter-item">
                <div className="counter-icon-circle">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
                <div>
                  <div className="counter-number">
                    {counts.educationPrograms}+
                  </div>
                  <div className="counter-label">Education &amp; Support Programs</div>
                </div>
              </div>
            </div>

            {/* Stat 3: Healthcare & Medical Services */}
            <div className="col-6 col-lg-3 counter-col">
              <div className="counter-item">
                <div className="counter-icon-circle">
                  <i className="bi bi-hospital-fill"></i>
                </div>
                <div>
                  <div className="counter-number">
                    {counts.healthcareServices}+
                  </div>
                  <div className="counter-label">Healthcare &amp; Medical Services</div>
                </div>
              </div>
            </div>

            {/* Stat 4: Community Relief Activities */}
            <div className="col-6 col-lg-3 counter-col">
              <div className="counter-item">
                <div className="counter-icon-circle">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div>
                  <div className="counter-number">
                    {counts.communityRelief}+
                  </div>
                  <div className="counter-label">Community Relief Activities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herocounter;