'use client';

const sections = [
  {
    id: '01',
    title: 'Fitness',
    content: `Our tours, treks, and expeditions can vary from easy to challenging, however, a certain level of fitness is essential for most trips in Nepal. Any traveler with pre-existing health conditions, including but not limited to knee, ankle, heart, or lungs, should seek medical advice and doctor approval prior to booking a trip with Nepal Himal Adventures. It shall be the traveler's responsibility to properly inform Nepal Himal Adventures of any health concerns, conditions, and/or doctor's approval in advance of booking a trip.`,
  },
  {
    id: '02',
    title: 'Bookings',
    content: `In order to secure a booking with Nepal Himal Adventures, each traveler shall deposit a non-refundable $200 (USD) payment as follows: 1) Bank wire transfer into account of Nepal Himal Adventures at Mega Bank Nepal Limited in Kathmandu; and 2) Deposit shall be made a minimum of sixty (60) days in advance of trip. This deposit will be applied to the trip's remaining balance due. You may pay your remaining balance via cash, credit card (Visa or MasterCard only) or wire transfer. Please note: banks may charge 4% extra for any bank card payment.`,
  },
  {
    id: '03',
    title: 'Complaints',
    content: `Nepal's rural, agricultural, and mountainous regions may be lacking or not be at a standard that you may be accustomed to in terms of infrastructure, accommodation, transportation, communication, medical facilities, etc. Nepal Himal Adventures may not have recourse in these situations and cannot rectify any deficiencies encountered during your trip.`,
  },
  {
    id: '04',
    title: 'Delays & Cancellations',
    content: `Nepal Himal Adventures shall not be held responsible for any departure delays or cancellations imposed by any government agency, or any situation out of our control. In cases of cancellation due to force majeure, Nepal Himal Adventures shall not be held responsible for any unforeseeable and unavoidable conditions or catastrophes that interrupt, modify, or prevent Nepal Himal from fulfilling its contract obligations, including but not limited to weather conditions, earthquakes, natural disasters, riots, sickness or any other interventions. Nepal Himal Adventures will attempt to create an alternative, at no charge, such as modifying the destination route. Your trips are subject to change and modification without any prior notice.`,
  },
  {
    id: '05',
    title: 'Itinerary Change',
    content: `The itinerary provided by Nepal Himal Adventures can be altered by the Group Leader contingent on mitigating factors that best serve the group. The modification can be contingent upon the group's fitness levels, weather, accessibility, etc. However, the Group Leader will consult his guests prior to making any changes to the itinerary.`,
  },
  {
    id: '06',
    title: 'Risks',
    content: `Explorers understand the hazards of being in remote mountain environments. The hazards include accidents and/or illnesses without accessible medical facilities, possible political instability, and the forces of nature. You agree to accept all the risks associated with the trip, trek or tour. Nepal Himal Adventures and its employees shall not be held responsible for personal injury, loss or damage of your property, delays, cancellations, or death.`,
  },
  {
    id: '07',
    title: 'Insurance',
    content: `Nepal Himal Adventures requires all travelers to have all-inclusive insurance coverage, which must include cancellation, accidents, health, emergency evacuation, loss, or damage of personal belongings. Insurance bought in Kathmandu may not be valid due to its unpredictability. All costs for emergency evacuation must be paid in cash up front in Nepal prior to the agreement of payment by your insurance company on your behalf.`,
  },
  {
    id: '08',
    title: 'Refunds',
    content: `Upon arrival to Kathmandu, if anyone voluntarily or involuntarily leaves the trip group, no refund shall be made by Nepal Himal Adventures. The claim may be in regards to whichever unused services provided.`,
  },
  {
    id: '09',
    title: 'Nepal Himal Adventures Privileges',
    points: [
      'Nepal Himal Adventures reserves the right to cancel and discontinue a trip under certain circumstances, such as unruly, disruptive, harassing, threatening behavior from a customer.',
      'Nepal Himal Adventures will not be liable for any emergency medical expenses while on trip. Traveler\'s Insurance policy shall be utilized to cover any incurred expenses, including emergency evacuation.',
      'Travelers are required to have valid passports and valid tourist visas. Certain permits may be required for treks and expeditions.',
      'Nepal Himal Adventures shall not be held responsible for any failure to obtain required permits due to traveler\'s possessing valid documents.',
      'Nepal Himal Adventures has the right to terminate anyone of their involvement in the trip considering their health issues that would adversely affect the trip.',
    ],
  },
  {
    id: '10',
    title: 'Withdrawal',
    content: `Travelers shall promptly notify Nepal Himal Adventures in case of an emergency trip cancellation. Under such circumstances, your prepaid, non-refundable deposit will be retained and applied to any incurred cancellation charges for pre-booked hotels, transportation, etc.`,
  },
  {
    id: '11',
    title: 'Domestic Flights',
    content: `In cases of cancelled domestic flights to/from Kathmandu, Nepal Himal Adventures will provide hotel accommodations. Flight cancellations in remote mountain airports (i.e. Lukla), Nepal Himal Adventures shall provide local lodging accommodations, including meals, until flights resume. Please note: if your trip exceeds the Nepal Himal Adventures itinerary dates as defined in our package, then you, the traveler, shall be responsible for any and all extra expenses incurred for accommodation, food, chartered helicopter, etc.`,
  },
  {
    id: '12',
    title: 'Group Leader Authority',
    content: `With Nepal Himal Adventures you agree to accept the authority of your Group Leader. A Group Leader is responsible for the enjoyment of your trip, which includes an emphasis on your health, safety, group harmony, teamwork, and changes in the itinerary, if deemed necessary.`,
  },
  {
    id: '13',
    title: 'Equipment',
    content: `Travelers agree to treat and care for all equipment provided by Nepal Himal Adventures in a manner that shall not result in damage or destruction due to recklessness or malicious intent. Any damage or destruction resulting from the direct action(s) of an individual shall result in a replacement charge for a new item to be charged to their account.`,
  },
];

export default function TermsAndConditions() {
  return (
    <main id="terms">
      <style>{`
        #terms {
          background-color: #0a0a0a;
          color: #f5f0e8;
          min-height: 100vh;
        }

        /* Hero */
        .tc-hero {
          position: relative;
          padding: 10rem 1.5rem 6rem;
          text-align: center;
          overflow: hidden;
          border-bottom: 1px solid #1a1a1a;
        }

        .tc-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(circle, #c9a84c 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .tc-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .tc-eyebrow-line {
          display: block;
          height: 1px;
          width: 3rem;
          background-color: #c9a84c;
        }

        .tc-eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .tc-hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 0.95;
          margin: 0 0 2rem;
        }

        .tc-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        .tc-hero-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.55);
          line-height: 1.9;
          letter-spacing: 0.03em;
          max-width: 48rem;
          margin: 0 auto;
        }

        /* Sections */
        .tc-sections {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .tc-block {
          display: grid;
          grid-template-columns: 1fr 2.5fr;
          gap: 4rem;
          padding: 4rem 0;
          border-bottom: 1px solid #1a1a1a;
          align-items: start;
        }

        @media (max-width: 768px) {
          .tc-block { grid-template-columns: 1fr; gap: 1.5rem; padding: 3rem 0; }
        }

        .tc-block-label {
          position: sticky;
          top: 6rem;
        }

        .tc-block-number {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: rgba(201, 168, 76, 0.4);
          margin-bottom: 0.6rem;
        }

        .tc-block-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.25rem, 2.5vw, 1.75rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.2;
          margin: 0;
        }

        .tc-block-content {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.825rem;
          color: rgba(245, 240, 232, 0.55);
          line-height: 1.9;
          letter-spacing: 0.02em;
        }

        .tc-points {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tc-point {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.825rem;
          color: rgba(245, 240, 232, 0.55);
          line-height: 1.7;
        }

        .tc-point-num {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          color: #c9a84c;
          letter-spacing: 0.1em;
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* Footer note */
        .tc-footer-note {
          max-width: 72rem;
          margin: 0 auto;
          padding: 4rem 1.5rem 6rem;
          text-align: center;
        }

        .tc-footer-note p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 300;
          font-style: italic;
          color: rgba(245, 240, 232, 0.5);
          line-height: 1.7;
          margin: 0 0 0.5rem;
        }

        .tc-footer-note span {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
        }
      `}</style>

      <div className="tc-hero">
        <div className="tc-eyebrow">
          <span className="tc-eyebrow-line" />
          <span className="tc-eyebrow-text">Legal</span>
          <span className="tc-eyebrow-line" />
        </div>
        <h1 className="tc-hero-heading">
          Terms &amp; <em className="tc-gold">Conditions</em>
        </h1>
        <p className="tc-hero-text">
          Please review our terms and conditions carefully. It sets forth the relationship and a legally binding
          agreement between you and Nepal Himal Adventures Pvt. Ltd. Even with the implementation of the highest
          safety standards, issues can arise — therefore, all travelers are subject to our terms and conditions
          as outlined below.
        </p>
      </div>

      {/* Sections */}
      <div className="tc-sections">
        {sections.map((s) => (
          <div key={s.id} className="tc-block">
            <div className="tc-block-label">
              <div className="tc-block-number">{s.id}</div>
              <h2 className="tc-block-title">{s.title}</h2>
            </div>
            <div className="tc-block-content">
              {s.content && <p>{s.content}</p>}
              {s.points && (
                <ul className="tc-points">
                  {s.points.map((p, i) => (
                    <li key={i} className="tc-point">
                      <span className="tc-point-num">{String(i + 1).padStart(2, '0')}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

        {/* Closing note */}
        <div className="tc-footer-note">
          <p>
            &ldquo;Travelers are to make sure and comprehend the nature of trekking or traveling to Nepal or being
            in high altitude environments. We will at all times give our best to make sure that you have a
            wonderful trip.&rdquo;
          </p>
          <span>We wish you all the best — Nepal Himal Adventures</span>
        </div>
      </div>
    </main>
  );
}