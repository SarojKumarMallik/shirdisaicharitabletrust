import React, { useState, useEffect, useRef } from 'react';
import './Herocounter.css';

const Herocounter = () => {
  const [counts, setCounts] = useState({
    livesTouched: 0,
    mealsServed: 0,
    medicalCamps: 0,
    studentsSupported: 0,
  });

  const sectionRef = useRef(null);

  const targets = {
    livesTouched: 10000,
    mealsServed: 50000,
    medicalCamps: 200,
    studentsSupported: 500,
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
      livesTouched: 0,
      mealsServed: 0,
      medicalCamps: 0,
      studentsSupported: 0,
    });

    const duration = 2000; // 2 Seconds count duration
    const steps = 50;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        livesTouched: Math.floor(targets.livesTouched * progress),
        mealsServed: Math.floor(targets.mealsServed * progress),
        medicalCamps: Math.floor(targets.medicalCamps * progress),
        studentsSupported: Math.floor(targets.studentsSupported * progress),
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, intervalTime);
  };

  const featureCards = [
    {
      id: 1,
      title: 'ANNADANAM SEVA',
      desc: 'Providing free meals to the needy and spreading happiness in society.',
      icon: 'bi-heart-pulse-fill',
    },
    {
      id: 2,
      title: 'EDUCATION SUPPORT',
      desc: 'Supporting students with education, books, and brightening their future.',
      icon: 'bi-mortarboard-fill',
    },
    {
      id: 3,
      title: 'HEALTHCARE SEVA',
      desc: 'Organizing medical camps and providing healthcare support to the underprivileged.',
      icon: 'bi-hospital-fill',
    },
    {
      id: 4,
      title: 'COMMUNITY WELFARE',
      desc: 'Working for the upliftment of society through various charitable activities.',
      icon: 'bi-people-fill',
    },
  ];

  return (
    <section ref={sectionRef} className="herocounter-section">
      <div className="container">
       

        {/* Bottom Row: Dark Navy & Gold Counter Bar (2 per row on Mobile col-6) */}
        <div className="counter-bar-wrapper">
          <div className="row align-items-center g-2 g-md-0">
            {/* Stat 1: Lives Touched */}
            <div className="col-6 col-lg-3 counter-col">
              <div className="counter-item">
                <div className="counter-icon-circle">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div>
                  <div className="counter-number">
                    {counts.livesTouched.toLocaleString()}+
                  </div>
                  <div className="counter-label">Lives Touched</div>
                </div>
              </div>
            </div>

            {/* Stat 2: Meals Served */}
            <div className="col-6 col-lg-3 counter-col">
              <div className="counter-item">
                <div className="counter-icon-circle">
                  <i className="bi bi-heart-pulse-fill"></i>
                </div>
                <div>
                  <div className="counter-number">
                    {counts.mealsServed.toLocaleString()}+
                  </div>
                  <div className="counter-label">Meals Served</div>
                </div>
              </div>
            </div>

            {/* Stat 3: Medical Camps */}
            <div className="col-6 col-lg-3 counter-col">
              <div className="counter-item">
                <div className="counter-icon-circle">
                  <i className="bi bi-hospital-fill"></i>
                </div>
                <div>
                  <div className="counter-number">
                    {counts.medicalCamps.toLocaleString()}+
                  </div>
                  <div className="counter-label">Medical Camps</div>
                </div>
              </div>
            </div>

            {/* Stat 4: Students Supported */}
            <div className="col-6 col-lg-3 counter-col">
              <div className="counter-item">
                <div className="counter-icon-circle">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
                <div>
                  <div className="counter-number">
                    {counts.studentsSupported.toLocaleString()}+
                  </div>
                  <div className="counter-label">Students Supported</div>
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