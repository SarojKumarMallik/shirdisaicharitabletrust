import React from 'react';
import './Herocard.css';

const Herocard = () => {
  const cards = [
    {
      id: 1,
      title: 'DONATE NOW!',
      desc: 'Support our noble cause to provide free food, healthcare, and education to the underprivileged communities in Kendrapara, Odisha.',
      btnText: 'DONATE NOW',
      link: '/donate',
      icon: 'bi-heart-fill',
      themeClass: 'herocard-item-navy',
    },
    {
      id: 2,
      title: 'JOIN US NOW',
      desc: 'Become a volunteer or donor and serve humanity with devotion, compassion, and selflessness alongside our trust family.',
      btnText: 'CONTACT US',
      link: '/contact',
      icon: 'bi-envelope-fill',
      themeClass: 'herocard-item-gold',
    },
    {
      id: 3,
      title: 'GET INVOLVED',
      desc: 'Explore our Seva activities, Annadanam programs, free medical check-up camps, and youth empowerment initiatives.',
      btnText: 'GET IN TOUCH',
      link: '/contact',
      icon: 'bi-arrow-right-circle-fill',
      themeClass: 'herocard-item-saffron',
    },
  ];

  return (
    <div className="herocard-wrapper">
      <div className="container">
        <div className="herocard-container">
          <div className="row g-0">
            {cards.map((card) => (
              <div key={card.id} className="col-lg-4 col-md-4 col-12">
                <div className={card.themeClass}>
                  <div>
                    <h3 className="herocard-title">{card.title}</h3>
                    <p className="herocard-desc">{card.desc}</p>
                  </div>
                  <div>
                    <a href={card.link} className="btn btn-herocard-action">
                      <span>{card.btnText}</span>
                      <i className={`bi ${card.icon} ms-1`}></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herocard;