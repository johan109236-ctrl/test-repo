'use client';

import Image from 'next/image';
import Link from 'next/link';

const treks = [
  { title: 'Everest Base Camp Trek', duration: '16 Days', difficulty: 'Challenging', image: '/assets/images/everest-base-camp.jpg', href: '/Nepal/Treks/Everest/everest-base-camp-trek' },
  { title: 'Gokyo Lake Trek', duration: '14 Days', difficulty: 'Moderate', image: '/assets/images/gokyo-lakes.jpg', href: '/Nepal/Treks/gokyo-lake-trek' },
  { title: 'Annapurna Circuit Trek', duration: '16 Days', difficulty: 'Challenging', image: '/assets/images/annapurna-circuit.jpg', href: '/Nepal/Treks/annapurna-circuit-trek' },
  { title: 'Upper Mustang Trek', duration: '17 Days', difficulty: 'Moderate', image: '/assets/images/mustang-region.jpg', href: '/Nepal/Treks/upper-mustang-trek' },
  { title: 'Langtang Valley Trek', duration: '12 Days', difficulty: 'Moderate', image: '/assets/images/langtang-valley.jpg', href: '/Nepal/Treks/langtang-valley-trek' },
  { title: 'Ghorepani Poon Hill Trek', duration: '10 Days', difficulty: 'Moderate', image: '/assets/images/ghorepani.jpg', href: '/Nepal/Treks/ghorepani-poon-hill-trek' },
  { title: 'Everest Three Passes Trek', duration: '21 Days', difficulty: 'Strenuous', image: '/assets/images/everest-base-camp.jpg', href: '/Nepal/Treks/everest-three-passes-trek' },
  { title: 'Mardi Himal Trek', duration: '11 Days', difficulty: 'Moderate', image: '/assets/images/mardi-himal.jpg', href: '/Nepal/Treks/mardi-himal-trek' },
  { title: 'Nar Phu Valley Trek', duration: '18 Days', difficulty: 'Challenging', image: '/assets/images/nar-phu-valley.jpg', href: '/Nepal/Treks/nar-phu-valley-trek' },
  { title: 'Langtang Gosaikunda Trek', duration: '15 Days', difficulty: 'Challenging', image: '/assets/images/gosaikunda-region.jpg', href: '/Nepal/Treks/langtang-gosaikunda-trek' },
  { title: 'Langtang Gosaikunda Helambu Trek', duration: '18 Days', difficulty: 'Challenging', image: '/assets/images/helambu.jpg', href: '/Nepal/Treks/langtang-gosaikunda-helambu-trek' },
  { title: 'Manaslu Circuit Trek', duration: '16 Days', difficulty: 'Strenuous', image: '/assets/images/manaslu.jpg', href: '/Nepal/Treks/manaslu-circuit-trek' },
  { title: 'Khopra Danda Trek', duration: '12 Days', difficulty: 'Moderate', image: '/assets/images/khopra-danda.jpg', href: '/Nepal/Treks/khopra-danda-trek' },
  { title: 'Upper Dolpo Trek', duration: '26 Days', difficulty: 'Strenuous', image: '/assets/images/upper-dolpo.jpg', href: '/Nepal/Treks/upper-dolpo-trek' },
  { title: 'Annapurna Circuit with Tilicho Lake Trek', duration: '18 Days', difficulty: 'Strenuous', image: '/assets/images/tilicho-lake.jpg', href: '/Nepal/Treks/annapurna-circuit-tilicho-lake-trek' },
  { title: 'Kanchenjunga Base Camp Trek', duration: '22 Days', difficulty: 'Strenuous', image: '/assets/images/kanchenjunga.jpg', href: '/Nepal/Treks/kanchenjunga-base-camp-trek' },
  { title: 'Tsum Valley Trek', duration: '17 Days', difficulty: 'Challenging', image: '/assets/images/tsum-valley.jpg', href: '/Nepal/Treks/tsum-valley-trek' },
  { title: 'Gokyo and Renjo La Pass Trek', duration: '15 Days', difficulty: 'Strenuous', image: '/assets/images/gokyo-lakes.jpg', href: '/Nepal/Treks/gokyo-renjo-la-pass-trek' },
];

const culturalTours = [
  { title: 'Kathmandu Valley Cultural Tour',    duration: '5 Days',  difficulty: 'Easy',        image: '/package/kathmandu-cultural.jpg',     href: '/Nepal/Cultural/kathmandu-valley-tour' },
  { title: 'Lumbini Pilgrimage Tour',           duration: '3 Days',  difficulty: 'Easy',        image: '/package/lumbini.jpg',                href: '/Nepal/Cultural/lumbini-pilgrimage' },
  { title: 'Mustang Cultural Tour',             duration: '12 Days', difficulty: 'Moderate',    image: '/package/mustang-cultural.jpg',       href: '/Nepal/Cultural/mustang-cultural-tour' },
];

const expeditions = [
  { title: 'Everest High Passes & Island Peak',           duration: '24 Days', difficulty: 'Strenuous', image: '/package/island-peak.jpg',  href: '/Nepal/Expeditions/EverestHighpassesandIsland' },
  { title: 'Ama Dablam Expedition',                       duration: '29 Days', difficulty: 'Strenuous', image: '/package/ama-dablam.jpg',    href: '/Nepal/Expeditions/AmaDablam' },
  { title: 'Everest Base Camp & Lobuche East Peak',       duration: '20 Days', difficulty: 'Strenuous', image: '/package/lobuche-peak.jpg',  href: '/Nepal/Expeditions/EverestandLobuche' },
  { title: 'Island Peak Climbing',                        duration: '16 Days', difficulty: 'Strenuous', image: '/package/island-peak.jpg',   href: '/Nepal/Expeditions/island-peak' },
  { title: 'Mera Peak Climbing',                          duration: '20 Days', difficulty: 'Strenuous', image: '/package/mera-peak.jpg',     href: '/Nepal/Expeditions/mera-peak' },
  { title: 'Pisang Peak & Thorung La Pass',               duration: '22 Days', difficulty: 'Strenuous', image: '/package/pisang-peak.jpg',   href: '/Nepal/Expeditions/pisang-and-thorung-la' },
  { title: 'Pisang Peak Climbing',                        duration: '15 Days', difficulty: 'Strenuous', image: '/package/pisang-peak.jpg',   href: '/Nepal/Expeditions/pisang-peak' },
  { title: 'Tharpu Chuli with Annapurna Base Camp',       duration: '19 Days', difficulty: 'Strenuous', image: '/package/tent-peak.jpg',     href: '/Nepal/Expeditions/tharpu-chuli' },
  { title: 'Yala Peak Climbing',                          duration: '14 Days', difficulty: 'Strenuous', image: '/package/yala-peak.jpg',     href: '/Nepal/Expeditions/yala-peak' },
];

const rafting = [
  { title: 'Trishuli River Rafting',            duration: '2 Days',  difficulty: 'Easy',        image: '/package/trishuli-rafting.jpg',       href: '/Nepal/Rafting/trishuli' },
  { title: 'Bhote Koshi Rafting',               duration: '2 Days',  difficulty: 'Challenging', image: '/package/bhote-koshi.jpg',            href: '/Nepal/Rafting/bhote-koshi' },
  { title: 'Seti River Rafting',                duration: '3 Days',  difficulty: 'Moderate',    image: '/package/seti-rafting.jpg',           href: '/Nepal/Rafting/seti' },
];

const difficultyColor: Record<string, string> = {
  'Easy':       '#34d399',
  'Moderate':   '#facc15',
  'Challenging':'#fb923c',
  'Strenuous':  '#f87171',
};

function TrekCard({ trek }: { trek: typeof treks[0] }) {
  return (
    <Link href={trek.href} className="np-card">
      <div className="np-card-img">
        <Image src={trek.image} alt={trek.title} fill sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw" />
        <div className="np-card-overlay" />
        <div className="np-card-meta">
          <span className="np-card-duration">{trek.duration}</span>
          <span className="np-card-difficulty" style={{ color: difficultyColor[trek.difficulty] || '#f5f0e8' }}>
            {trek.difficulty}
          </span>
        </div>
      </div>
      <div className="np-card-info">
        <h3 className="np-card-title">{trek.title}</h3>
        <span className="np-card-arrow">→</span>
      </div>
    </Link>
  );
}

function Section({ id, number, title, subtitle, items }: {
  id: string; number: string; title: string; subtitle: string; items: typeof treks;
}) {
  return (
    <div id={id} className="np-section">
      <div className="np-section-header">
        <span className="np-section-number">{number}</span>
        <div>
          <div className="np-section-eyebrow">{subtitle}</div>
          <h2 className="np-section-title">{title}</h2>
        </div>
      </div>
      <div className="np-grid">
        {items.map((item) => <TrekCard key={item.title} trek={item} />)}
      </div>
    </div>
  );
}

export default function NepalPage() {
  return (
    <main id="nepal-page">
      <style>{`
        #nepal-page {
          background-color: #0a0a0a;
          color: #f5f0e8;
          min-height: 100vh;
        }

        /* Hero */
        .np-hero {
          position: relative;
          height: 70vh;
          min-height: 500px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 4rem;
        }

        .np-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%);
          z-index: 1;
        }

        .np-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .np-breadcrumb {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .np-breadcrumb a {
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.3s;
        }

        .np-breadcrumb a:hover { color: #c9a84c; }

        .np-hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(4rem, 12vw, 9rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 0.9;
          margin: 0;
        }

        /* About block */
        .np-about {
          max-width: 80rem;
          margin: 0 auto;
          padding: 6rem 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 5rem;
          align-items: start;
          border-bottom: 1px solid #1a1a1a;
        }

        @media (max-width: 768px) {
          .np-about { grid-template-columns: 1fr; gap: 2rem; padding: 4rem 1.5rem; }
        }

        .np-about-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1.1;
          margin: 0 0 0.5rem;
          position: sticky;
          top: 6rem;
        }

        .np-gold {
          background: linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #9a7a30 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }

        .np-about-text p {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.875rem;
          color: rgba(245, 240, 232, 0.55);
          line-height: 1.9;
          margin: 0 0 1.25rem;
        }

        .np-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .np-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.8);
          border: 1px solid rgba(201, 168, 76, 0.2);
          padding: 0.4rem 0.9rem;
        }

        /* Sections */
        .np-sections {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem 6rem;
        }

        .np-section {
          padding: 5rem 0;
          border-bottom: 1px solid #1a1a1a;
        }

        .np-section:last-child { border-bottom: none; }

        .np-section-header {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .np-section-number {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: rgba(201, 168, 76, 0.4);
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        .np-section-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 0.4rem;
        }

        .np-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          color: #f5f0e8;
          margin: 0;
          line-height: 1.1;
        }

        /* Grid */
        .np-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5px;
          background-color: #1a1a1a;
        }

        @media (max-width: 1024px) { .np-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px)  { .np-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px)  { .np-grid { grid-template-columns: 1fr; } }

        /* Card */
        .np-card {
          display: block;
          background-color: #0a0a0a;
          text-decoration: none;
          transition: background-color 0.3s;
        }

        .np-card:hover { background-color: #0f0f0f; }

        .np-card-img {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background-color: #111;
        }

        .np-card-img img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .np-card:hover .np-card-img img { transform: scale(1.06); }

        .np-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%);
        }

        .np-card-meta {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          right: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .np-card-duration {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          background: rgba(0,0,0,0.4);
          padding: 0.2rem 0.5rem;
        }

        .np-card-difficulty {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(0,0,0,0.4);
          padding: 0.2rem 0.5rem;
        }

        .np-card-info {
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          border-top: 1px solid #1a1a1a;
        }

        .np-card-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
          color: rgba(245, 240, 232, 0.75);
          margin: 0;
          line-height: 1.4;
          flex: 1;
          transition: color 0.3s;
        }

        .np-card:hover .np-card-title { color: #c9a84c; }

        .np-card-arrow {
          font-size: 0.75rem;
          color: #c9a84c;
          flex-shrink: 0;
          transition: transform 0.3s;
        }

        .np-card:hover .np-card-arrow { transform: translateX(4px); }
      `}</style>

      {/* Hero */}
      <div className="np-hero">
        <Image src="/Nepal-hero-section.jpg" alt="Nepal" fill style={{ objectFit: 'cover' }} priority />
        <div className="np-hero-overlay" />
        <div className="np-hero-content">
         
          <h1 className="np-hero-heading">Nepal</h1>
        </div>
      </div>

      {/* About */}
      <div className="np-about">
        <div>
          <h2 className="np-about-heading">
            Land of the<br />
            <em className="np-gold">Himalayas</em>
          </h2>
        </div>
        <div className="np-about-text">
          <p>
            Nepal is a land of staggering heights and cultural treasures, home to over 1,300 peaks above 6,000m,
            including eight legendary 8,000m giants — Everest, Annapurna, and more — all within its borders.
            The landscapes shift dramatically from lush rhododendron forests to high-altitude deserts, offering
            awe-inspiring vistas and once-in-a-lifetime experiences.
          </p>
          <p>
            At Nepal Himal Adventures, we craft ambitious yet accessible journeys that go beyond the trail.
            Whether guiding you over iconic passes like Thorong La, introducing you to resilient mountain
            communities, or ensuring your safety at every altitude — we deliver more than a trek. We deliver
            a lifelong memory.
          </p>
          <div className="np-badges">
            <span className="np-badge">8 of 14 Highest Peaks</span>
            <span className="np-badge">World&apos;s Best Trekking</span>
            <span className="np-badge">Rich Cultural Heritage</span>
          </div>
        </div>
      </div>

      {/* All sections */}
      <div className="np-sections">
        <Section id="trekking"  number="01" title="Trekking"       subtitle="Programs in Nepal" items={treks} />
        <Section id="cultural"  number="02" title="Cultural Tours" subtitle="Programs in Nepal" items={culturalTours} />
        <Section id="rafting"   number="03" title="Rafting"        subtitle="Programs in Nepal" items={rafting} />
        <Section id="expeditions" number="04" title="Expeditions"  subtitle="Programs in Nepal" items={expeditions} />
      </div>

    </main>
  );
}

// {CSS  cha change garne ho bhane paila tailwind halera matrai script hata}