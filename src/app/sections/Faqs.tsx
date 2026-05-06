'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Who will be leading my journey?',
    a: 'You will be guided by a 100% Nepali team born and raised in the shadow of these peaks. Our experts don\'t just know the trails; they know the stories, the people, and the hidden weather patterns of the Himalayas. You aren\'t just hiring a guide — you are traveling with a local friend who has a deep, lifelong connection to the land.',
  },
  {
    q: 'How do you ensure my safety in remote areas?',
    a: 'Safety isn\'t just a word to us; it\'s a science. We use a 3x3 Daily Protocol (monitoring vitals three times a day) and provide a dedicated Medical Liaison for every group. Our "Soft Landing" strategy ensures your body is ready before the climb begins, and we have 24/7 communication with our Kathmandu HQ for emergency coordination.',
  },
  {
    q: 'Why is your pricing considered a "best value" choice?',
    a: 'We cut out the middleman. Because we are a local operator based in Nepal, your money goes directly into high-quality gear, professional medical support, and fair wages for our staff — not into international commissions. You get a premium, safe, and medically-backed experience at local prices.',
  },
  {
    q: 'I have specific needs. Can you customize my trek?',
    a: 'Absolutely. We do not believe in "one-size-fits-all" tourism. Whether you need a slower pace for health reasons, specific dietary accommodations, or a private itinerary for your family, we tailor every aspect of the journey to fit your physical comfort and personal goals.',
  },
  {
    q: 'Will I get to experience the real Nepal?',
    a: 'Yes. Our local roots allow us to take you beyond the "tourist bubbles." You\'ll stay in authentic teahouses, visit local monasteries, and engage with mountain communities in a way that is respectful and genuine. We help you bridge the gap between being a tourist and being a guest.',
  },
  {
    q: 'How can I reach you if I have a problem?',
    a: 'From the moment you inquire until you board your flight home, we are available 24/7. Whether it\'s a flight delay, a gear question, or a health concern during the trek, our team is just a WhatsApp message or a satellite call away. Your family back home can also reach our HQ at any time for updates.',
  },
  {
    q: 'How do you protect the environment and local communities?',
    a: 'Nepal is our home, and we protect it fiercely. We practice "Leave No Trace" trekking, reduce plastic waste, and ensure our porters and guides are paid above industry standards. By booking with us, you are directly supporting the local economy and helping preserve the Himalayas for future generations.',
  },
  {
    q: 'What is the food like during the trek?',
    a: 'We prioritize nutrition that fuels your climb. You will enjoy a mix of traditional Nepali "Dal Bhat" (perfect for energy), as well as pasta, soups, and eggs. We are experts at managing dietary requirements, including vegetarian, vegan, and gluten-free needs, ensuring your meals are safe and delicious.',
  },
  {
    q: 'What happens if my flight to Lukla is delayed?',
    a: 'Flight delays are common in the mountains. Because we are based locally, we handle all the stress for you. We coordinate with the airlines, rearrange your teahouse bookings, and if necessary, help organize helicopter transfers to keep your itinerary on track without you lifting a finger.',
  },
  {
    q: 'Do I need to be a professional climber to join an expedition?',
    a: 'Not at all. We offer various levels of treks, from "Gentle Cultural Walks" to "Challenging High Passes." During our Pre-Trek Health Check, we will help you determine which journey matches your fitness level so you can enjoy the mountains with confidence, not struggle.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq">
      <style>{`
        #faq {
          padding: 8rem 0;
          background-color: #0d0d0d;
        }

        .faq-container {
          max-width: 56rem;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Header */
        .faq-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .faq-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .faq-eyebrow-line {
          display: block;
          height: 1px;
          width: 3rem;
          background-color: #c9a84c;
        }

        .faq-eyebrow-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #c9a84c;
        }

        .faq-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 6vw, 3.75rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0;
          line-height: 1.1;
        }

        .faq-heading-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        /* Items */
        .faq-list {
          border-top: 1px solid #1a1a1a;
        }

        .faq-item {
          border-bottom: 1px solid #1a1a1a;
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 2rem 0;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
        }

        .faq-question {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 300;
          color: #f5f0e8;
          transition: color 0.3s;
          line-height: 1.4;
        }

        .faq-trigger:hover .faq-question {
          color: #c9a84c;
        }

        .faq-icon {
          flex-shrink: 0;
          width: 2rem;
          height: 2rem;
          border: 1px solid #2a2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s;
          margin-top: 0.125rem;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.5);
        }

        .faq-trigger:hover .faq-icon {
          border-color: #c9a84c;
          color: #c9a84c;
        }

        .faq-icon--open {
          border-color: #c9a84c;
          color: #c9a84c;
        }

        .faq-answer {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.35s ease, opacity 0.3s ease;
        }

        .faq-answer--open {
          max-height: 500px;
          opacity: 1;
        }

        .faq-answer-inner {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.6);
          line-height: 1.8;
          letter-spacing: 0.02em;
          padding-bottom: 2rem;
        }
      `}</style>

      <div className="faq-container">

        {/* Header */}
        <div className="faq-header">
          <div className="faq-eyebrow">
            <span className="faq-eyebrow-line" />
            <span className="faq-eyebrow-text">Common Questions</span>
            <span className="faq-eyebrow-line" />
          </div>
          <h2 className="faq-heading">
            Frequently
            <br />
            <em className="faq-heading-gold">Asked</em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-trigger"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="faq-question">{faq.q}</span>
                <span className={`faq-icon ${open === i ? 'faq-icon--open' : ''}`}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div className={`faq-answer ${open === i ? 'faq-answer--open' : ''}`}>
                <p className="faq-answer-inner">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}