import { TrekData } from '../Expeditions/ExpeditionPage';

export const treks: Record<string, TrekData> = {
  'langtang-helambu-trek': {
    title: 'Langtang Helambu Trek',
    duration: '18 Days',
    difficulty: 'Strenuous',
    elevation: '~4,610 m / 15,120 ft (Laurebinayak Pass)',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking / Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/langtang-helambu.jpg', '/assets/images/gosaikunda.jpg', '/assets/images/kyanjin-gompa.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Langtang Helambu Trek', href: '#' },
    ],
    description: `The Langtang Helambu Trek is a diverse mid- to high-altitude loop that connects the deep glacial valleys of Langtang with the sacred lakes of Gosaikunda and the rolling highlands of the Helambu region. The journey begins with a drive to Syabrubesi (1,460m) and steadily climbs through the Langtang National Park, targeting the trek's highest and most challenging point: the Lauribina Pass at 4,610m.`,
    highlights: [
      'The Three-in-One Himalayan Loop',
      'The Lauribina Pass Triumph (4,610 m)',
      'The Sacred Alpine Waters of Gosaikunda (4,380 m)',
      'A Dual-Culture Crossover (Tibetan-influenced Tamang villages to Hyolmo heritage)',
      'The Spiritual Haven of Kyanjin Gompa (3,900 m)',
      'The Peaceful Villages of Helambu',
      'Unspoiled Trans-Himalayan Backdrops',
      'Pristine National Park Biodiversity',
    ],
    overview: [
      `The Langtang Helambu Trek is a diverse mid-to-high-altitude loop that connects the deep glacial valleys of Langtang with the sacred lakes of Gosaikunda and the rolling highlands of the Helambu region. The journey begins with a drive to Syabrubesi (1,460m) and steadily climbs through Langtang National Park, targeting the trek’s highest and most challenging point: the Lauribina Pass at 4,610m. A standard 14-to-16-day itinerary is essential to ensure proper acclimatization, with strategic exploration days in Kyanjin Gompa (3,900m) allowing your body to adapt to the elevation before attempting the steep, high-pass crossing.`,
`Success on this multi-regional circuit depends on solid cardiovascular fitness and lower-body strength built at least 2 to 3 months before departure. The terrain changes dramatically, requiring high-quality trekking boots and a versatile layering system to handle everything from the humid bamboo forests of the lower trails to the sub-zero temperatures and potential snow at the pass. Logistically, this trek requires the Langtang National Park entry permit and a TIMS card. The ideal windows for trekking are the stable post-monsoon months (October–November) and the blooming pre-monsoon season (March–May). Travel insurance covering high-altitude helicopter evacuation is essential.`,
`The 15-day Langtang Helambu Trek is a brilliant cultural crossover that showcases two distinct mountain communities in a single journey. Starting along the rushing Langtang Khola, the trail winds through resilient Tamang villages before ascending above the tree line to the sacred alpine waters of Gosaikunda Lake (4,380m), a major pilgrimage site. The itinerary transitions from the Tibetan-influenced culture of the upper Langtang Valley to the distinct Hyolmo heritage of the Helambu region, with the ice-capped peaks of Langtang Lirung (7,227m) and Dorje Lakpa towering in the background.`,
`The trek reaches its dramatic climax at the crest of the Lauribina Pass (4,610m), rewarding trekkers with expansive panoramas stretching from the Ganesh Himal to the distant Annapurna range. Descending from the stark, rocky pass, the trail enters the peaceful forested ridges of Helambu, passing through the beautiful stone villages of Tarkeghyang and Sermathang. This experience is a masterful blend of physical achievement and cultural discovery, concluding with a drive back to Kathmandu from Melamchi Pul and finishing a well-rounded Himalayan journey balancing high-altitude adventure with rich cultural immersion.`,
`NOTE: We aim to follow our planned itinerary as closely as possible, but occasional changes may be necessary due to weather conditions, roadblocks, natural disasters, political situations, health issues, or transportation delays. If adjustments are required, we will provide the best alternative options for your safety and comfort. We highly recommend arriving in Nepal 1–2 days before the trek begins to allow time for rest, final gear preparation, or optional sightseeing. It is also wise to schedule a few buffer days before your international return flight in case of unexpected road or weather-related delays.`,],
    itinerary: [
  { day: 1, title: 'Arrival in Kathmandu (1,400 m)', description: 'Airport pick-up and transport to hotel.' },
  { day: 2, title: 'Half-day Kathmandu City Tour', description: 'Afternoon trek briefing & preparation. Welcome dinner at a traditional Nepali restaurant.' },
  { day: 3, title: 'Drive to Syabru Besi (1,503 m)', description: 'Drive from Kathmandu – 7 to 9 hours. Overnight at Guesthouse.' },
  { day: 4, title: 'Trek to Lama Hotel (2,500 m)', description: 'From Syabru Besi – 5 to 6 hours. Overnight at Guesthouse.' },
  { day: 5, title: 'Trek to Langtang Village (3,430 m)', description: '5 to 6 hours. Overnight at Guesthouse.' },
  { day: 6, title: 'Trek to Kyanjin Gompa (3,830 m)', description: '4 to 5 hours. Overnight at Guesthouse.' },
  { day: 7, title: 'Exploration / Rest Day at Kyanjin Gompa', description: 'Overnight at Guesthouse.' },
  { day: 8, title: 'Trek back to Lama Hotel (2,500 m)', description: '5 to 6 hours. Overnight at Guesthouse.' },
  { day: 9, title: 'Trek to Thulo Syabru (2,150 m)', description: '5 to 6 hours. Overnight at Guesthouse.' },
  { day: 10, title: 'Trek to Sing Gompa (3,330 m)', description: '5 to 6 hours. Overnight at Guesthouse.' },
  { day: 11, title: 'Trek to Gosaikunda (4,380 m)', description: '5 to 6 hours. Overnight at Guesthouse.' },
  { day: 12, title: 'Cross Laurebinayak Pass (~4,610 m) & Trek to Ghopte (3,530 m)', description: '6 to 7 hours. Overnight at Guesthouse.' },
  { day: 13, title: 'Trek to Melamchi Gaon via Tharepati Pass (~2,530 m)', description: '6 to 7 hours. Overnight at Guesthouse.' },
  { day: 14, title: 'Trek to Tarkeghyang (~2,600 m)', description: '5 to 6 hours. Overnight at Guesthouse.' },
  { day: 15, title: 'Trek to Sermathang (~2,590 m)', description: '5 to 6 hours. Overnight at Guesthouse.' },
  { day: 16, title: 'Trek to Melamchi Pul Bazaar (~870 m)', description: '5 to 6 hours. Overnight at Guesthouse.' },
  { day: 17, title: 'Drive to Kathmandu', description: '4 to 5 hours on private tourist vehicle. Overnight at Hotel.' },
  { day: 18, title: 'Departure Day', description: 'Transfer to Tribhuvan International Airport for your final flight.' },
],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Langtang Helambu',
  },
  'mardi-himal-trek': {
    title: 'Mardi Himal Trek',
    duration: '11 Days',
    difficulty: 'Technical challenge',
    elevation: '4,250 m / 13,944 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking / Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/mardi-himal.jpg', '/assets/images/machhapuchhre-view.jpg', '/assets/images/forest-camp.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Mardi Himal Trek', href: '#' },
    ],
    description: `The Mardi Himal Trek is an exceptional, eco-conscious ridge journey that provides a quieter, less commercialized alternative to the traditional trails of the Annapurna sanctuary. The adventure begins with travel from Kathmandu to the lakeside city of Pokhara before starting the foot trail at Kande (1,770m). The route tracks closely along a dramatic, narrow ridgeline toward the ultimate objective: Mardi Himal Base Camp at 4,500 meters.`,
    highlights: [
      'The Ultimate Ridge-Line Perspective',
      'The Sacred Machhapuchhre (Fishtail) Front-Row Seat',
      'The Mardi Himal Base Camp Triumph (4,120 m)',
      'The Enchanting Moss-Draped Eco-Trail',
      'The Stunning Australian Base Camp Gateway (2,060 m)',
      'The Cliffside Heritage of Landruk',
    ],
    overview: [
  `The Mardi Himal Trek is an exceptional, eco-conscious ridge journey that provides a quieter, less commercialized alternative to the traditional trails of the Annapurna sanctuary. The adventure begins with travel from Kathmandu to the lakeside city of Pokhara before starting the foot trail at Kande (1,770m). The route tracks closely along a dramatic, narrow ridgeline toward the ultimate objective: Mardi Himal Base Camp at 4,500 meters. A standard 11-day itinerary—including domestic transfers and city buffers—is highly strategic, allowing for a steady, gradual ascent through distinct ecological zones to promote natural physiological acclimatization.`,

  `Success on this moderate ridge trek depends on solid lower-body endurance and a composed mindset, making it highly accessible for determined beginners while still offering a rewarding pace for experienced hikers. The terrain is deeply varied, climbing steeply away from terraced farmlands into the dense, mossy oak and blooming rhododendron forests of Forest Camp (2,600m) and Low Camp (2,970m). As the trail emerges above the tree line at Badal Danda, it transitions into an exposed, windswept alpine environment, requiring high-quality trekking boots and a versatile layering system to counter the sub-zero temperatures at High Camp (3,580m).`,

  `Logistically, the Mardi Himal route is efficiently supported by a network of community-run teahouses, ensuring comfortable lodging and locally sourced meals. Operating entirely within the protected boundaries of the Annapurna Conservation Area, the trek requires an official ACAP permit and a TIMS card. The premier operational windows are the exceptionally clear post-monsoon autumn months (October–November) for peak mountain visibility and the vibrant pre-monsoon spring (March–May), when the lower hills are blanketed in rhododendrons. While the elevation profile is manageable, comprehensive travel insurance covering emergency high-altitude medical evacuation remains an essential safety baseline.`,

  `The absolute climax of the 11-day itinerary is the pre-dawn push along the narrow, rocky ridge from High Camp to the Upper Viewpoint (4,250m) and onward to the raw glacial bowl of Mardi Himal Base Camp (4,500m). From these high alpine perches, trekkers are rewarded with a breathtaking, front-row panorama where the iconic, sacred peak of Mt. Machhapuchhre (Fishtail) towers directly overhead, flanked closely by Annapurna South and Hiunchuli. The journey completes its scenic loop by plunging down a steep, forested descent to the traditional Gurung village of Siding, concluding a world-class Himalayan odyssey that balances pristine wilderness exploration with deep local hospitality.`,

  `NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes. We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek.`,
],

itinerary: [
  { day: 1, title: 'Arrival in Kathmandu (1,400 m)', description: 'Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area.' },

  { day: 2, title: 'Kathmandu Sightseeing & Preparation', description: 'Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant.' },

  { day: 3, title: 'Drive to Pokhara (900 m)', description: 'Depart Kathmandu early on a comfortable tourist bus, enjoying a scenic journey following the Trishuli and Marsyangdi rivers to the lakeside city of Pokhara. (7–8 hours’ drive)' },

  { day: 4, title: 'Drive to Kande & Trek to Australian Base Camp (2,060 m)', description: 'Take a short morning drive to the trailhead at Kande. Begin trekking with a steady uphill climb through rhododendron and oak forests to the beautiful ridge top of Australian Base Camp, offering wide views of the Annapurna range. (2–3 hours’ drive, 3–4 hours trek)' },

  { day: 5, title: 'Trek to Forest Camp (2,600 m)', description: 'Walk along an undulating trail through quiet, pristine woods of oak, maple, and rhododendron, passing Pothana and Deurali before entering the quiet jungle trails that lead to Forest Camp. (6–7 hours)' },

  { day: 6, title: 'Trek to High Camp (3,550 m)', description: 'Trek uphill along the ridge line as the forest transitions into moss-covered cloud forest. Pass Low Camp and Badal Danda, where the trees thin out to reveal dramatic close-up views of Mardi Himal and Machapuchare (Fishtail) before reaching High Camp. (6–7 hours)' },

  { day: 7, title: 'Hike to Mardi Himal Base Camp (4,120 m) & Descend to Low Camp (3,050 m)', description: 'The Highlight: Early pre-dawn start to follow the rocky ridge path up to the Upper Viewpoint (4,250 m) or onwards to Mardi Himal Base Camp (4,120 m) for an incredible sunrise over the Annapurna massif. Retrace your steps back to High Camp for lunch and continue descending to Low Camp. (8–10 hours total)' },

  { day: 8, title: 'Trek to Landruk (1,565 m)', description: 'Leave the main ridge trail and head down a steep descent through the dense rhododendron and oak forests, emerging out onto the terraced hillsides and traditional stone houses of the Gurung village of Landruk. (6–7 hours)' },

  { day: 9, title: 'Trek to Syauli Bazaar & Drive to Pokhara (900 m)', description: 'Trek down toward the Modi Khola riverbed, walking past terraced fields and crossing suspension bridges to reach Syauli Bazaar. Meet your private vehicle for the drive back to Pokhara for a relaxing lakeside evening. (3–4 hours trek, 2–3 hours’ drive)' },

  { day: 10, title: 'Drive to Kathmandu (1,400 m)', description: 'Board your tourist bus in the morning to retrace the highway route back into the Kathmandu valley. In the evening, enjoy a celebratory farewell dinner with your trekking team. (7–8 hours’ drive)' },

  { day: 11, title: 'Departure', description: 'Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home.' },
],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Mardi Himal',
  },
  'tsum-valley-trek': {
    title: 'Tsum Valley Trek',
    duration: '17 Days',
    difficulty: 'Moderate to Strenuous',
    elevation: '3,700 m / 12,136 ft',
    season: 'October to November',
    groupSize: '2 or more',
    activity: 'Trekking / Hiking',
    accommodation: 'Tea house & Hotel',
    heroImages: ['/assets/images/tsum-valley.jpg', '/assets/images/mu-gompa.jpg', '/assets/images/ganesh-himal.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Tsum Valley Trek', href: '#' },
    ],
    description: `The Tsum Valley Trek is a profound and spiritual high-altitude journey that requires thoughtful preparation and a deep respect for its sacred, remote environment. The trek typically begins with a drive to Machha Khola (869m) and ascends to its highest point at Mu Gompa (3,700m), a destination that demands steady acclimatization despite being lower than Everest.`,
    highlights: [
      'The Forbidden Valley of Peace',
      'The Northernmost Outpost of Mu Gompa (3,700 m)',
      'The Sacred Meditation Caves of Milarepa',
      'Deep-Wilderness Ganesh Himal Base Camp (4,200 m)',
      'The Historic Nunneries and Gompas',
      'The Principle of Non-Violence (Shyakya)',
      'Spectacular Multi-Range Backdrops',
      'Transition from Subtropical to High Alpine',
    ],
    overview: [
  `The Tsum Valley Trek is a profound cultural and spiritual journey into one of Nepal’s most remote Himalayan regions, often called the "Hidden Valley of Happiness." Beginning with a scenic drive to Maccha Khola (870m), the trail branches away from the main Manaslu Circuit to enter the secluded Tsum Valley, a sacred Himalayan pilgrimage site rich in Tibetan Buddhist heritage. A standard 17-day itinerary provides the necessary pace for gradual acclimatization while allowing trekkers to fully immerse themselves in the valley’s unique landscapes, monasteries, and ancient settlements. The journey ascends through deep river gorges, dense forests, and wide alpine valleys, culminating at the sacred Mu Gompa (3,700m), the highest monastery in the region.`,

  `Success on this moderate-to-strenuous trek depends on good cardiovascular endurance and strong lower-body fitness, as daily trekking involves multiple ascents and descents through rugged terrain and high suspension bridges. The route moves through dramatic ecological transitions, from subtropical forests along the Budhi Gandaki River to dry alpine environments near the Tibetan border. Due to the valley’s isolation and remoteness, trekkers must prepare carefully with quality trekking boots, layered clothing, and comprehensive travel insurance covering emergency evacuation. Logistically, this trek requires both the Manaslu Conservation Area Permit (MCAP) and a special restricted area permit for Tsum Valley, and independent trekking is not permitted.`,

  `The 17-day itinerary is carefully designed to balance cultural immersion with scenic exploration, passing through traditional villages such as Chumling, Chhekampar, and Nile, where Tibetan customs remain deeply preserved. Along the trail, trekkers encounter ancient mani walls, chortens, prayer flags, and centuries-old monasteries nestled beneath towering Himalayan peaks. Highlights include visiting the remote Mu Gompa near the Tibetan border, the sacred Rachen Gompa nunnery, and the isolated monastery of Gumba Lungdang, dramatically positioned beneath the Ganesh Himal range. The trail offers a rare opportunity to experience a Himalayan society shaped by non-violence, spirituality, and centuries-old traditions.`,

  `The experience reaches its physical and spiritual climax during the demanding hike to Ganesh Himal Base Camp (4,200m), rewarding trekkers with sweeping mountain panoramas and a deep sense of isolation. Unlike Nepal’s more commercial trekking routes, Tsum Valley remains largely untouched, offering a quieter, more introspective Himalayan experience. The final leg retraces the route back through Lokpa and Jagat to Maccha Khola before returning to Kathmandu, concluding an unforgettable odyssey that combines wilderness, devotion, and authentic mountain culture.`,

  `NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes. We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek.`,
],

itinerary: [
  { day: 1, title: 'Arrival in Kathmandu (1,400 m)', description: 'Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area.' },

  { day: 2, title: 'Kathmandu Sightseeing & Preparation', description: 'Morning guided tour of city landmarks. Afternoon trek briefing, special restricted area permit processing, gear check, and a welcome dinner.' },

  { day: 3, title: 'Drive to Maccha Khola (870 m)', description: 'Depart Kathmandu early for a scenic drive along the Trishuli River highway, passing through Arughat to reach Maccha Khola. (8–9 hours’ drive)' },

  { day: 4, title: 'Trek to Jagat (1,340 m)', description: 'Trek along the banks of the Budhi Gandaki River, crossing suspension bridges, natural hot springs at Tatopani, and rocky ridges to reach the stone-paved entry checkpoint village of Jagat. (6–7 hours)' },

  { day: 5, title: 'Trek to Lokpa (2,240 m)', description: 'Ascend through rocky river trails to Sirdibas, cross a long suspension bridge to Philim, and branch off the main Manaslu trail into dense forests to reach Lokpa, the gateway to Tsum Valley. (6–7 hours)' },

  { day: 6, title: 'Trek to Chumling (2,386 m)', description: 'Descend into the scenic Lungwa River valley and tackle a steep uphill climb through dense pine and rhododendron forests to reach lower Tsum Valley at Chumling. (4–5 hours)' },

  { day: 7, title: 'Trek to Chhekampar (3,010 m)', description: 'Cross a suspension bridge and climb steadily past scenic villages like Rainjam, entering upper Tsum Valley where the trail opens into a wide alpine valley at Chhekampar. (5–6 hours)' },

  { day: 8, title: 'Trek to Nile (3,361 m)', description: 'Trek past ancient Buddhist monasteries, extensive mani walls, and traditional stone villages like Lamagaon and Burji, crossing the Shiar Khola to reach Nile. (4–5 hours)' },

  { day: 9, title: 'Excursion to Mu Gompa (3,700 m) & Return to Nile', description: 'Climb up through dry alpine landscapes to visit Mu Gompa, the highest and oldest monastery in the Tsum Valley near the Tibetan border. Explore the remote area and return to Nile. (4–5 hours round trip)' },

  { day: 10, title: 'Trek to Rachen Gompa (3,240 m)', description: 'Trek back down valley through Chhekampar, branching off to visit the historic Rachen Gompa nunnery, nestled against a backdrop of steep rocky cliffs. (4–5 hours)' },

  { day: 11, title: 'Trek to Gumba Lungdang (3,200 m)', description: 'Descend the main trail before climbing a steep, isolated forest path up to Gumba Lungdang, an ancient monastery offering striking views of Ganesh Himal. (5–6 hours)' },

  { day: 12, title: 'Day Hike to Ganesh Himal Base Camp (4,200 m) & Return to Gumba Lungdang', description: 'A demanding day hike up through rugged wilderness and lateral moraines to reach the base camp of Ganesh Himal. Savor the panoramic views and return to Gumba Lungdang. (7–8 hours round trip)' },

  { day: 13, title: 'Trek to Lokpa (2,240 m)', description: 'Descend out of the high pine forests, passing through Chumling and crossing the Shiar Khola bridge to rejoin the lower valley route back to Lokpa. (6–7 hours)' },

  { day: 14, title: 'Trek to Jagat (1,340 m)', description: 'Rejoin the main river valley trail, descending through Philim and walking along the banks of the Budhi Gandaki River to return to the checkpoint village of Jagat. (6–7 hours)' },

  { day: 15, title: 'Trek to Maccha Khola (870 m)', description: 'Complete the final leg of the trek, walking down through the rocky river gorges and passing the hot springs at Tatopani to reach Maccha Khola. (5–6 hours)' },

  { day: 16, title: 'Drive to Kathmandu (1,400 m)', description: 'Board your private vehicle for the long drive from Maccha Khola back across the foothills and highways to Kathmandu. Private transfer to your hotel. (8–9 hours’ drive)' },

  { day: 17, title: 'Departure', description: 'Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home.' },
],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Tsum Valley',
  },
  'gokyo-to-everest-base-camp-trek': {
    title: 'Gokyo to Everest Base Camp Trek',
    duration: '18 Days',
    difficulty: 'Technical challenge',
    elevation: '5,550 m / 18,209 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'High Altitude Trekking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/gokyo-lakes.jpg', '/assets/images/cho-la-pass.jpg', '/assets/images/everest-base-camp.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Gokyo to Everest Base Camp Trek', href: '#' },
    ],
    description: `The Gokyo to Everest Base Camp Trek (often combined via the Cho La Pass) is an elite, high-altitude circuit that links two of the Khumbu region's most spectacular valleys. The journey begins with a thrilling flight to Lukla (2,846m) and follows the Dudh Koshi River before branching off the standard trail to target the pristine, turquoise Gokyo Lakes.`,
    highlights: [
      'The Complete High-Altitude Masterpiece',
      'The Exhilarating Cho La Pass Crossing (5,420 m)',
      'The Six Sacred Glacial Jewels',
      'The World\'s Greatest Base Camp (5,364 m)',
      'Khumbu Icefall',
      'The Double Viewpoint Triumph (Gokyo Ri and Kala Patthar)',
      'The Ngozumpa Glacier Edge',
      'Spiritual Heritage of Tengboche Monastery (3,867 m)',
    ],
    overview: [
  `The Gokyo to Everest Base Camp Trek (often combined via the Cho La Pass) is an elite, high-altitude circuit that links two of the Khumbu region’s most spectacular valleys. The journey begins with a thrilling flight to Lukla (2,846m) and follows the Dudh Koshi River before branching off the standard trail to target the pristine, turquoise Gokyo Lakes. An 18-day itinerary provides an optimal, safety-focused acclimatization profile, allowing trekkers to scale Gokyo Ri (5,357m) and cross the treacherous, ice-glazed Cho La Pass (5,420m) before standing at Everest Base Camp (5,364m).`,

  `Success on this strenuous adventure demands rigorous cardiovascular conditioning and lower-body stamina built at least 3 months prior to departure. The terrain is exceptionally rugged and varied, requiring trekkers to navigate the shifting boulders of the Ngozumpa Glacier (the longest glacier in the Himalayas) and cross a steep, snow-prone mountain pass that often requires microspikes or crampons. Logistically, this trek requires the Sagarmatha National Park entry permit and the Khumbu Pasang Lhamu local permit. The ideal operational windows are the stable post-monsoon autumn (October–November) and the vibrant pre-monsoon spring (March–May), and comprehensive travel insurance covering emergency helicopter evacuation up to 6,000 meters is an absolute necessity.`,

  `The 18-day itinerary is a masterful alternative to the classic, crowded EBC route, offering an immersive, grand-scale loop through the heart of the Sherpa homeland. Leaving the bustling hub of Namche Bazaar, the trail climbs through tranquil alpine pastures and isolated hamlets like Dole and Machhermo, where the commercial crowds thin out significantly. This routing is specifically designed to maximize mountain exposure, positioning four of the world's fourteen 8,000-meter peaks—Cho Oyu, Everest, Lhotse, and Makalu—as your towering backdrops throughout the circuit.`,

  `The expedition reaches its iconic climaxes at the summits of Gokyo Ri and Kala Patthar (5,545m), the latter providing the definitive, unobstructed close-up view of Mount Everest's summit and the Khumbu Icefall. Crossing the high-altitude bridge of the Cho La Pass tests physical grit but rewards travelers with a profound sense of isolation and triumph. The final leg loops back through traditional cultural centers like Tengboche—home to the region's largest Buddhist monastery—before completing the descent to Lukla, finalizing a world-class Himalayan odyssey that balances raw glacial exploration with deep spiritual discovery.`,

  `NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.`,

  `We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek.`,
],

itinerary: [
  { day: 1, title: 'Arrival in Kathmandu (1,400 m)', description: 'Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area.' },

  { day: 2, title: 'Kathmandu Sightseeing & Preparation', description: 'Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant.' },

  { day: 3, title: 'Fly to Lukla & Trek to Phakding (2,610 m)', description: 'Early morning flight from Kathmandu (or drive to Manthali/Ramechhap for a 20-minute flight) to Lukla. Meet your crew and begin trekking downhill and along flat trails to Phakding. (3–4 hours)' },

  { day: 4, title: 'Trek to Namche Bazaar (3,440 m)', description: 'Trek through pine forests and cross several high suspension bridges. Complete the final, steep uphill climb to reach the Sherpa capital of Namche. (5–6 hours)' },

  { day: 5, title: 'Namche Rest Day (Acclimatization)', description: 'Short morning acclimatization hike to the Hotel Everest View (3,880 m) for stunning mountain panoramas. Return to Namche for an afternoon exploring the local market.' },

  { day: 6, title: 'Trek to Phortse Tenga (3,680 m)', description: 'Leave the busy main trail and descend through rhododendron and pine forests toward the river, climbing slightly to reach the quiet settlement of Phortse Tenga. (4–5 hours)' },

  { day: 7, title: 'Trek to Machhermo (4,470 m)', description: 'Climb steadily up the scenic Dudh Koshi Valley, passing through high summer pastures and small hamlets while enjoying views of Cho Oyu to reach Machhermo. (5–6 hours)' },

  { day: 8, title: 'Trek to Gokyo Lakes (4,800 m)', description: 'Ascend past the terminal moraine of the Ngozumpa Glacier. Walk alongside the pristine first and second lakes before reaching your lodge at the third Gokyo Lake. (5–6 hours)' },

  { day: 9, title: 'Hike Gokyo Ri (5,483 m) & Rest', description: 'Early morning steep climbs up to the summit of Gokyo Ri for sweeping panoramic views of Everest, Lhotse, Makalu, and Cho Oyu. Descend to the lake for a restful afternoon. (5–6 hours)' },

  { day: 10, title: 'Trek to Thangnak (4,500 m)', description: 'A shorter but scenic day traversing across the undulating, rocky moraine of the massive Ngozumpa Glacier to the foot of the pass at Thangnak. (4–5 hours)' },

  { day: 11, title: 'Cross Cho La Pass (5,368 m) & Trek to Dzongla (4,710 m)', description: 'The Pass: Early pre-dawn starts to scramble up steep boulder fields and cross the icy glacier plateau of Cho La Pass. Descend a steep, rocky trail to the outpost of Dzongla. (7–8 hours)' },

  { day: 12, title: 'Trek to Lobuche (4,910 m)', description: 'Follow an easy panoramic trail along the hillside above Cholatse Lake, joining the classic Everest route to reach the small glacial settlement of Lobuche. (4–5 hours)' },

  { day: 13, title: 'Trek to Gorak Shep & Everest Base Camp (5,364 m)', description: 'Trek along the rocky moraine to Gorak Shep for an early lunch. Continue tracking the glacier path to reach Everest Base Camp, explore the historic site, and return to Gorak Shep. (7–8 hours)' },

  { day: 14, title: 'Hike Kala Patthar & Trek to Dingboche (4,410 m)', description: 'Pre-dawn hike to the summit of Kala Patthar (5,555m) for iconic sunrise views over Mount Everest. Descend to Gorak Shep for breakfast, then trek down valley to Dingboche. (7–8 hours)' },

  { day: 15, title: 'Trek to Namche Bazaar (3,440 m)', description: 'Descend through the wide Imja Valley, passing through the villages of Pangboche and Tengboche before completing the hike back to Namche Bazaar. (6–7 hours)' },

  { day: 16, title: 'Trek to Lukla (2,840 m)', description: 'Descend the long "Namche Hill" and retrace your steps along the Dudh Koshi River valley on a mix of flat and uphill trails back into Lukla for a farewell celebration. (6–7 hours)' },

  { day: 17, title: 'Fly to Kathmandu', description: 'Morning flight from Lukla back to Kathmandu (or via flight to Manthali/Ramechhap followed by a private drive). Private transfer to your hotel and a free afternoon.' },

  { day: 18, title: 'Departure', description: 'Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home.' },
],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Gokyo EBC',
  },
  'kanchenjunga-base-camp-trek-23-days': {
    title: 'Kanchenjunga Base Camp Trek',
    duration: '23 Days',
    difficulty: 'Strenuous / challenge',
    elevation: '5,143 m / 16,873 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking / Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/kanchenjunga.jpg', '/assets/images/pangpema.jpg', '/assets/images/kanchenjunga-glacier.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Kanchenjunga Base Camp Trek', href: '#' },
    ],
    description: `The Kanchenjunga Base Camp Trek is an elite, multi-week wilderness expedition that stands as one of the ultimate frontiers of Himalayan trekking. Located in the far eastern corner of Nepal bordering Sikkim and Tibet, this grueling journey targets the base camps of Mt. Kanchenjunga (8,586m), the world's third-highest peak.`,
    highlights: [
      'The Ultimate Grand Himalayan Traverse',
      'The Northern Pinnacle at Pangpema (5,143 m)',
      'The Southern Vista at Oktang (4,730 m)',
      'The High-Pass Crossing Trilogy',
      'The Untouched Glacial Moraines (Kanchenjunga and Yalung Glaciers)',
      'Deep Cultural Limbu and Sherpa Heritage',
      'The Lush Subtropical to Arctic Canopy',
    ],
    overview: [
  `The Kanchenjunga Base Camp Trek is an elite, multi-week wilderness expedition that stands as one of the ultimate frontiers of Himalayan trekking. Located in the far eastern corner of Nepal bordering Sikkim and Tibet, this grueling journey targets the base camps of Mt. Kanchenjunga (), the world’s third-highest peak. A comprehensive 23-day itinerary provides the necessary logistical runway and safety-focused pacing required to safely navigate a grand horseshoe circuit, linking both the South Base Camp (Oktang at) and the North Base Camp (Pangpema at ) while managing extreme altitude adaptation.`,

  `Success in this demanding circuit requires exceptional physical conditioning, with a training regimen focused on cardiovascular capacity and lower-body endurance initiated at least 4 to 6 months prior to departure. The terrain is extraordinarily rugged and isolated, transitioning from humid, sub-tropical river valleys and dense rhododendron forests to unstable glacial moraines and exposed, snow-prone crossings over high alpine passes like the Mirgin La () and Sele La (). Because the itinerary demands spending multiple consecutive nights performing above far from major infrastructure, a premium heavyweight layering system, broken-in trekking boots, and travel insurance covering emergency helicopter evacuation up to are non-negotiable safety requirements.`,

  `Logistically, the Kanchenjunga region is heavily protected and strictly regulated as a restricted border zone. Solo or independent trekking is legally prohibited; you must travel with a minimum group of two trekkers accompanied by a licensed government guide through an authorized agency. A complete 23-day portfolio requires a Special Restricted Area Permit (RAP) alongside the Kanchenjunga Conservation Area Project (KCAP) permit. The primary operational windows are the highly stable autumn months (October–November) for peak mountain clarity and the vibrant pre-monsoon spring (March–May). Accommodation relies on a developing network of remote, basic local teahouses that offer an authentic glimpse into the rustic lifestyle of the region.`,

  `The expedition reaches its profound physical and cultural climaxes at the windswept outposts of Oktang and Pangpema, rewarding trekkers with monumental, front-row views of Kanchenjunga’s immense vertical ice faces, Jannu, and Kambachen. Far removed from commercialized trails, this pristine sanctuary offers deep wilderness isolation and a rare opportunity to experience the untouched cultural heritage of the local Limbu and Sherpa communities. The final leg follows a reflective descent back through the emerald foothills to Taplejung for the return journey to Kathmandu, concluding a world-class mountaineering odyssey that stands as one of the ultimate trekking achievements in the Himalaya.`,

  `NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.`,

  `We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek.`,
],

itinerary: [
  { day: 1, title: 'Arrival in Kathmandu (1,400 m)', description: 'Airport pick-up and private transfer to your hotel. Rest and enjoy free time to explore the vibrant streets of Thamel.' },

  { day: 2, title: 'Kathmandu Sightseeing & Trek Preparation', description: 'Morning guided tour of historic city landmarks. Afternoon comprehensive trek briefing, gear check, and processing of special restricted area permits for Kanchenjunga, followed by a welcome dinner at a traditional Nepali restaurant.' },

  { day: 3, title: 'Fly to Bhadrapur & Drive to Taplejung (1,820 m)', description: 'Catch an early morning flight from Kathmandu to the lowlands of Bhadrapur (45 mins). Upon arrival, meet your crew and board your private vehicle for a long, scenic drive passing through lush tea gardens and rolling foothills to reach Taplejung. (8–9 hours’ drive)' },

  { day: 4, title: 'Exploration & Contingency Day (Taplejung)', description: 'A dedicated buffer day in Taplejung to account for any flight delays or travel fatigue. Use this day to explore the local markets and culturally rich settlements of the Limbu community.' },

  { day: 5, title: 'Drive to Sukethum (1,585 m)', description: 'Leave Taplejung on a rugged, adventurous mountain road. Drive through rural farm villages and steep valleys carved by the Tamor River to reach the trailhead at Sukethum. (4–5 hours’ drive)' },

  { day: 6, title: 'Trek to Amjilosa (2,396 m)', description: 'Begin your trek by entering the narrow, steep gorges of the Ghunsa Khola. Cross several suspension bridges and navigate a challenging climb up stone switchbacks through dense bamboo and rhododendron forests to the ridge settlement of Amjilosa. (6–7 hours)' },

  { day: 7, title: 'Trek to Gyabla (2,730 m)', description: 'Walk along the riverbank through a beautiful, uninhabited forest of oak and bamboo. Ascend a steep trail up the valley side to reach Gyabla, a quiet village deeply influenced by Tibetan culture. (4–5 hours)' },

  { day: 8, title: 'Trek to Ghunsa (3,417 m)', description: 'The valley opens as you trek past alpine meadows and the traditional Tibetan village of Phale. Continue following the river through larch forests to reach Ghunsa, the largest Sherpa settlement in the upper valley. (4–5 hours)' },

  { day: 9, title: 'Ghunsa Rest Day (Acclimatization)', description: 'A vital rest day to adapt to the high altitude. Take an optional morning acclimatization hike up the ridges toward the Yamatari Glacier for panoramic peak views or explore the village\'s historic wooden houses and monasteries.' },

  { day: 10, title: 'Trek to Khambachen (4,050 m)', description: 'Trek north from Ghunsa, ascending steadily along the riverbank through magnificent pine and larch forests. Traverse active landslide zones and glacial moraines, catching your first grand views of Mt. Jannu before arriving in Khambachen. (4–5 hours)' },

  { day: 11, title: 'Trek to Lhonak (4,780 m)', description: 'Navigate a challenging, high-altitude climb past the seasonal pastures of Ramtang. Follow the lateral moraine of the Kanchenjunga Glacier across high alpine terrain to reach the windy, remote outpost of Lhonak. (4–6 hours)' },

  { day: 12, title: 'Hike to Kanchenjunga North Base Camp (5,143 m) & Return to Lhonak', description: 'The Northern Highlight: Embark on an early morning trek along the edge of the glacier to Pangpema (North Base Camp). Stand directly before the immense north face of Mt. Kanchenjunga (8,586 m) and its surrounding peaks. Explore the area before retracing your steps to Lhonak. (6–8 hours)' },

  { day: 13, title: 'Trek to Ghunsa (3,417 m)', description: 'Begin your descent down valley. Stop at Khambachen for a warm lunch, then continue tracking the river route through alpine meadows and forests to return to the comfort of Ghunsa. (6–8 hours)' },

  { day: 14, title: 'Trek to Sele La Camp (4,200 m)', description: 'Leave the main valley and climb steeply south into the wilderness. Trek up through thick rhododendron and juniper forests, navigating a rugged path to reach the high, isolated wilderness camp at Sele La. (3–5 hours)' },

  { day: 15, title: 'Cross High Passes & Trek to Tseram (3,870 m)', description: 'The High Passes: A spectacular and demanding day crossing a series of high ridges, including the Sele La (4,290 m) and Mirgin La (4,480m) passes. Enjoy panoramic views stretching all the way to Makalu and Everest before making a long, steep descent to Tseram. (6–8 hours)' },

  { day: 16, title: 'Trek to Ramche (4,580 m)', description: 'Ascend through the valley alongside the lateral moraine of the Yalung Glacier. Walk past frozen lakes and sweeping alpine vistas to reach the high pastures of Ramche. (3–4 hours)' },

  { day: 17, title: 'Hike to Kanchenjunga South Base Camp (4,730 m) & Return to Tseram', description: 'The Southern Highlight: Trek further up valley to the viewpoint at Oktang (South Base Camp). Look across the massive glacier at the soaring south wall of Kanchenjunga and its towering sister peaks. Turn back and retrace your steps down valley all the way to Tseram. (5–7 hours)' },

  { day: 18, title: 'Trek to Tortong (2,995 m)', description: 'Enjoy a long, steady descent out of the high alpine zone. Follow the Simbuwa Khola river trail down through thick moss-covered pine and rhododendron forests to reach the quiet clearing of Tortong. (4–5 hours)' },

  { day: 19, title: 'Trek to Yasang (2,144 m)', description: 'Continue your descent through the lush, emerald foothills of eastern Nepal. Pass rural farmlands, bamboo groves, and small hillside settlements to reach the village of Yasang. (5–6 hours)' },

  { day: 20, title: 'Trek to Hellok & Drive to Taplejung (1,820 m)', description: 'Complete a final, short 2-to-3-hour downhill trek to the riverside hub of Hellok. Meet your private vehicle for the adventurous, winding drive back to Taplejung. Celebrate the journey with your crew. (7–8 hours total)' },

  { day: 21, title: 'Drive to Bhadrapur & Fly to Kathmandu', description: 'Take an early morning private drive back down to Bhadrapur airport. Board your afternoon flight back to the capital and transfer to your hotel. In the evening, enjoy a celebratory farewell dinner. (8–9 hours’ drive, 45 mins flight)' },

  { day: 22, title: 'Weather Contingency Day (Kathmandu)', description: 'A built-in buffer day in Kathmandu to safeguard your international schedule against any delays during the domestic flights or long road transfers from eastern Nepal.' },

  { day: 23, title: 'Departure', description: 'Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home.' },
],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Kanchenjunga',
  },
  'everest-three-passes-trek': {
    title: 'Everest Three Passes Trek',
    duration: '21 Days',
    difficulty: 'Strenuous / Challenging',
    elevation: '5,555 m / 18,225 ft',
    season: 'Mar-May, Sep-Nov',
    groupSize: '2 or more',
    activity: 'High Altitude Trekking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/kongma-la.jpg', '/assets/images/cho-la.jpg', '/assets/images/renjo-la.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Everest Three Passes Trek', href: '#' },
    ],
    description: `The Everest Three Passes Trek is a challenging and demanding high-altitude circuit that provides the ultimate adventure in the Khumbu region, combining the classic Everest Base Camp route with the crossing of three major alpine passes: Kongma La (5,535m), Cho La (5,368m), and Renjo La (5,340m).`,
    highlights: [
      'The Ultimate High-Altitude Trilogy (Kongma La, Cho La, and Renjo La)',
      'The Three Essential Vantage Peaks (Kala Patthar, Gokyo Ri, and Chukhung Ri)',
      'The Four Interconnected Valleys (Imja Tse, Khumbu, Gokyo, and Bhote Koshi)',
      'The Classic Everest Landmarks',
      'The Sacred Glacial Gokyo Lakes',
      'The Solitude of the High Trails',
      'The Secluded Heritage of Thame',
    ],
    overview: [
  `The Everest Three Passes Trek is a challenging and demanding high-altitude circuit that provides the ultimate adventure in the Khumbu region, combining the classic Everest Base Camp route with the crossing of three major alpine passes: Kongma La (5,535m), Cho La (5,368m), and Renjo La (5,340m). This trek is significantly more arduous than the standard EBC trek, demanding an extended itinerary of around 21 days to incorporate essential acclimatization in villages like Namche Bazaar and Dingboche, which is critical for safety at the extreme elevations reached at Kala Patthar (5,555m) and the passes themselves. The route involves long days (7-9 hours of walking) over rugged terrain, with the passes featuring steep, rocky slopes, moraine, and potential glacier crossings, making a slow, deliberate pace mandatory to mitigate the risk of Acute Mountain Sickness (AMS).`,

  `Success on this strenuous journey hinges on high-level physical fitness—requiring rigorous cardiovascular and strength training—and meticulous logistical preparation. Trekkers must secure the Sagarmatha National Park Permit and the Khumbu Pasang Lhamu Rural Municipality Permit and are strongly advised to hire a licensed local guide and porter for safety, navigation on remote sections, and assistance with heavy loads. The best seasons to trek are during the clear skies of pre-monsoon (March-May) and post-monsoon (late September-November). Finally, comprehensive travel insurance that explicitly covers high-altitude trekking and emergency helicopter evacuation is an absolute necessity for this remote and challenging expedition.`,

  `The Everest Three Passes Trek is the ultimate, all-encompassing high-altitude circuit of the Khumbu region, elevating the challenge far beyond the standard EBC journey. This demanding 18- to 21-day expedition begins, like its counterpart, with the exciting flight to Lukla and entry into Sagarmatha National Park but quickly diverges into a comprehensive loop of the Everest massifs. The itinerary incorporates every major highlight—the cultural hub of Namche Bazaar, the spiritual center of Tengboche, and the goal of Everest Base Camp (5,364m) and Kala Patthar (5,555m) while deliberately pacing the ascent with multiple acclimatization stops to ensure the body can adjust to the relentless altitude gain.`,

  `The true focus of this trek lies in conquering the three magnificent, high-alpine passes: Kongma La (5,535m), Cho La (5,368m), and Renjo La (5,340m). Each pass presents a unique, strenuous challenge involving long days and technical trekking over rocky, sometimes icy, terrain, especially the glacier crossing on Cho La. Successfully traversing these passes connects the major valleys, linking the main EBC trail with the pristine, turquoise Gokyo Lakes and the silent, authentic Sherpa settlements of the remote Thame Valley. The reward is an unparalleled perspective of the world's highest mountains, including Everest, Lhotse, Makalu, and Cho Oyu, making this journey a comprehensive, immensely rewarding personal test of endurance and discovery in the heart of the Himalayas.`,

  `NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate you’re understanding and flexibility if we need to make changes.`,

  `We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek.`,
],

itinerary: [
  { day: 1, title: 'Arrival in Kathmandu (1,400 m)', description: 'Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area.' },

  { day: 2, title: 'Kathmandu Sightseeing & Preparation', description: 'Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant.' },

  { day: 3, title: 'Fly to Lukla & Trek to Phakding (2,610 m)', description: 'Early morning flight to Lukla (35 mins). Begin trekking downhill and flat trail along the river to Phakding. (3–4 hours)' },

  { day: 4, title: 'Trek to Namche Bazaar (3,450 m)', description: 'Trek through pine forests and cross several suspension bridges. Complete a final steep uphill climb to reach the Sherpa capital of Namche. (6–7 hours)' },

  { day: 5, title: 'Namche Rest Day (Acclimatization)', description: 'Short morning hike to the Everest View Hotel for mountain panoramas. Spend the afternoon visiting the local museum or exploring the Namche market.' },

  { day: 6, title: 'Trek to Tengboche (3,860 m)', description: 'Trek along a scenic hillside trail, descend to the river, and climb steadily through rhododendron forests to reach Tengboche. (5–6 hours)' },

  { day: 7, title: 'Trek to Dingboche (4,410 m)', description: 'Descend to Pangboche village and continue a steady climb into the wide Imja Valley to reach Dingboche. (5–6 hours)' },

  { day: 8, title: 'Dingboche Rest Day (Acclimatization)', description: 'Acclimatization hike to the top of Nangkartshang Peak (5,083 m). Return to the village for lunch and a restful afternoon.' },

  { day: 9, title: 'Trek to Chhukung (4,730 m)', description: 'A short, steady uphill trek further into the Imja Valley to the small settlement of Chhukung. Afternoon gear check and rest. (3–4 hours)' },

  { day: 10, title: 'Cross Kongma La (5,535 m) & Trek to Lobuche (4,940 m)', description: 'Pass 1: Early morning steep climb over the rocky Kongma La Pass. Descend and cross the Khumbu Glacier moraine to reach Lobuche. (8–10 hours)' },

  { day: 11, title: 'Trek to Gorakshep & Everest Base Camp (5,364 m)', description: 'Trek to Gorakshep for lunch. Continue along the rocky path to reach Everest Base Camp, explore the site, and return to Gorakshep. (7–8 hours)' },

  { day: 12, title: 'Hike Kala Patthar & Trek to Dzongla (4,830 m)', description: 'Pre-dawn hike to the summit of Kala Patthar (5,545 m) for sunrise. Descend to Gorakshep for breakfast, then trek to the quiet village of Dzongla. (7–8 hours)' },

  { day: 13, title: 'Cross Cho La (5,420 m) & Trek to Dragnag (4,700 m)', description: 'Pass 2: Early morning climb over steep boulder fields and the icy Cho La Pass. Descend a rocky switchback trail to Dragnag. (7–8 hours)' },

  { day: 14, title: 'Trek to Gokyo (4,790 m)', description: 'Cross the Ngozumpa Glacier moraine and arrive at the shores of the third turquoise Gokyo Lake. (4–5 hours)' },

  { day: 15, title: 'Gokyo Rest Day (Optional Gokyo Ri - 5,357 m)', description: 'Rest day at the lakes. Optional early morning steep climb up Gokyo Ri for panoramic views of four 8,000-meter peaks.' },

  { day: 16, title: 'Cross Renjo La (5,360 m) & Trek to Lungden (4,380 m)', description: 'Pass 3: Climb a stone staircase trail to the top of Renjo La Pass. Enjoy views of Everest and Gokyo Lakes before a long descent to Lungden. (6–7 hours)' },

  { day: 17, title: 'Trek to Thame (3,800 m)', description: 'Descend through the remote Bhote Koshi Valley, passing traditional stone-walled Sherpa villages to reach Thame. (5 hours)' },

  { day: 18, title: 'Trek to Monjo (2,835 m)', description: 'Trek past Namche Bazaar and descend the steep "Namche Hill" to cross high suspension bridges and reach Monjo. (6–7 hours)' },

  { day: 19, title: 'Trek to Lukla (2,840 m)', description: 'Complete the final leg of the trek with a mix of uphill and flat trails leading back into Lukla for a farewell celebration. (4–5 hours)' },

  { day: 20, title: 'Fly to Kathmandu', description: 'Morning flight from Lukla back to Kathmandu. Private transfer to your hotel and a free afternoon for relaxation or shopping.' },

  { day: 21, title: 'Departure', description: 'Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home.' },
],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Three Passes',
  },
  'langtang-valley-trek': {
    title: 'Langtang Valley Trek',
    duration: '11 Days',
    difficulty: 'Alpine Challenge',
    elevation: '4,984 m / 16,351 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/langtang-valley.jpg', '/assets/images/kyanjin-ri.jpg', '/assets/images/langtang-lirung.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Langtang Valley Trek', href: '#' },
    ],
    description: `The Langtang Valley Trek is a classic mid- to high-altitude journey known as the "Valley of Glaciers," offering a direct route into the spectacular alpine landscapes north of Kathmandu. The adventure begins with a scenic but rugged drive to the gateway town of Syabrubesi (1,460m) and ascends through the narrow gorges of the Langtang Khola to the wide alpine bowl of Kyanjin Gompa (3,870m).`,
    highlights: [
      'The Closest Himalayan Alpine Escape',
      'The High-Line Vantage Points (Kyanjin Ri 4,773m or Tsergo Ri 4,984m)',
      '360-degree panorama of Langtang Lirung, Yala Peak, and Dorje Lakpa',
      'Deep Tamang Heritage Integration',
      'A Story of Resilient Rebirth (completely rebuilt New Langtang Village after 2015 earthquake)',
      'The Sacred Sanctuary of Kyanjin Gompa (3,870 m)',
      'The Langtang River Progression',
      'Lush Subtropical to Stark Alpine Canopies',
    ],
    overview: [
  `The Langtang Valley Trek is a classic mid-to-high-altitude journey known as the "Valley of Glaciers," offering a direct route into the spectacular alpine landscapes north of Kathmandu. The adventure begins with a scenic but rugged drive to the gateway town of Syabrubesi (1,460m) and ascends through the narrow gorges of the Langtang Khola to the wide alpine bowl of Kyanjin Gompa (3,870m). A standard 11-day itinerary provides an ideal, safety-oriented pace, dedicating a crucial exploration day at the head of the valley to allow your body to adapt before tackling the highest vantage points.`,

  `Success on this moderate trek depends on solid leg strength and cardiovascular fitness, making it an excellent option for both seasoned hikers and determined beginners. The trail climbs steadily through a diverse ecological corridor, moving from dense subtropical bamboo and oak forests into a stark alpine environment of glacial moraines, requiring high-quality trekking boots and a versatile layering system for dropping temperatures.`,

  `Logistically, this trek takes place entirely within Langtang National Park, requiring a national park entry permit and a TIMS card. The premier operational windows are the stable, clear post-monsoon autumn (October–November) and the vibrant pre-monsoon spring (March–May), and comprehensive travel insurance covering emergency high-altitude medical evacuation is essential.`,

  `The 11-day itinerary provides an authentic cultural immersion, winding through traditional Tamang and Sherpa villages where Tibetan Buddhist heritage remains central to daily life. As you walk past long mani walls, chortens, and prayer flags, the commercial crowds of other major regions thin out, giving way to pristine alpine pastures where yaks graze below the mountain walls. The route is strategically designed to keep the massive ice flutings of Langtang Lirung (7,227m), Kimshung, and Langshisha Ri directly in view, establishing a monumental alpine backdrop that grows more imposing with every day's ascent.`,

  `The trek reaches its dramatic visual climax during the acclimatization and exploration phase at Kyanjin Gompa, where hikers can ascend the panoramic viewpoints of Kyanjin Ri (4,773m) or the more challenging Tserko Ri (4,984m). These high summits reward trekkers with an unobstructed 360-degree panorama of the entire Langtang massif and peaks stretching across the border into Tibet, alongside views of the sprawling Yala and Lirung glaciers. The final leg follows a rapid, rewarding descent back down the valley through Lama Hotel to Syabrubesi, concluding a world-class Himalayan odyssey that balances deep cultural heritage with immense natural grandeur.`,

  `NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.`,

  `We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek.`,
],

itinerary: [
  { day: 1, title: 'Arrival in Kathmandu (1,400 m)', description: 'Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area.' },

  { day: 2, title: 'Kathmandu Sightseeing & Preparation', description: 'Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant.' },

  { day: 3, title: 'Drive to Syabrubesi (1,503 m)', description: 'Depart Kathmandu early in a private tourist vehicle for a scenic, winding drive through the hills and Trishuli River valley to the trailhead town of Syabrubesi. (7–9 hours’ drive)' },

  { day: 4, title: 'Trek to Lama Hotel (2,500 m)', description: 'Begin trekking along the Langtang Khola river, crossing several suspension bridges and ascending steadily through dense oak, bamboo, and rhododendron forests to Lama Hotel. (5–6 hours)' },

  { day: 5, title: 'Trek to Langtang Village (3,430 m)', description: 'Continue climbing through the forest valley as the landscape opens up. Pass water-driven mills and prayer wheels, reaching the rebuilt settlement of Langtang Village. (5–6 hours)' },

  { day: 6, title: 'Trek to Kyanjin Gompa (3,830 m)', description: 'A shorter alpine ascent past traditional yak pastures and extensive mani walls. Arrive at Kyanjin Gompa, surrounded by dramatic snow-capped peaks, in time for lunch. (4–5 hours)' },

  { day: 7, title: 'Kyanjin Gompa Rest Day (Acclimatization)', description: 'A full exploration day. Take an optional steep hike up to the viewpoint of Kyanjin Ri (4,773) or Tserko Ri (4,984) for panoramic glacial views or visit the local yak cheese factory.' },

  { day: 8, title: 'Trek to Lama Hotel (2,500 m)', description: 'Retrace your steps down valley, enjoying an easy, mostly downhill trek through Langtang Village and back into the dense forests to Lama Hotel. (5–6 hours)' },

  { day: 9, title: 'Trek to Syabrubesi (1,503 m)', description: 'Complete the final leg of the trek, descending along the river canyon and passing through local villages to return to Syabrubesi for a farewell celebration. (5–6 hours)' },

  { day: 10, title: 'Drive to Kathmandu (1,400 m)', description: 'Board your private tourist vehicle for the return drive from Syabrubesi across the foothills and highways back to Kathmandu. Private transfer to your hotel. (7–9 hours’ drive)' },

  { day: 11, title: 'Departure', description: 'Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home.' },
],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Langtang Valley',
  },
  'ghorepani-poon-hill-trek-10-days': {
    title: 'Ghorepani Poon Hill Trek',
    duration: '10 Days',
    difficulty: 'Strenuous/Moderate',
    elevation: '3,210 m / 10,531 ft',
    season: 'Feb-May, Sep-Dec',
    groupSize: '2 or more',
    activity: 'Trekking/Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/poon-hill.jpg', '/assets/images/ghorepani.jpg', '/assets/images/annapurna-sunrise.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Ghorepani Poon Hill Trek', href: '#' },
    ],
    description: `The Ghorepani Poon Hill Trek is a universally accessible 4- to 7-day journey, typically starting near Nayapul or Hille, and set within the southern foothills of the Annapurna region. The primary aim is the early morning ascent to Poon Hill, which sits at the trek's maximum altitude of 3,210m, offering a spectacular panoramic sunrise view of the colossal Dhualagiri, Annapurna I, and Machhapuchhre (Fishtail) peaks.`,
    highlights: [
      'The Legendary Poon Hill Sunrise (3,210 m)',
      'The Perfect Beginner Pathway',
      'The Vibrant Gurung Hub of Ghandruk',
      'The Giant Rhododendron Canopy',
      'The Infamous Ulleri Staircase Challenge',
      'Soothing Jhinu Danda Hot Springs',
      'The Seamless Two-City Gateway (Kathmandu & Pokhara)',
    ],
    overview: [
  `The Ghorepani Poon Hill Trek is a universally accessible 4-to-7-day journey, typically starting near Nayapul or Hille, and set within the southern foothills of the Annapurna region. The primary aim is the early morning ascent to Poon Hill, which sits at the trek's maximum altitude of 3,210m, offering a spectacular panoramic sunrise view of the colossal Dhaulagiri, Annapurna I, and Machhapuchhre (Fishtail) peaks. Since the maximum elevation is relatively low, the trek carries a minimal risk of Acute Mountain Sickness (AMS), making it suitable for a wide range of fitness levels. The route itself traverses well-maintained trails that wind through dense rhododendron forests and traditional Gurung and Magar villages.`,

  `Physically, daily walks typically average 4 to 6 hours, demanding moderate cardiovascular fitness, and the route includes challenging ascents, most notably the long, steep staircase climb to Ulleri. Proper trekking footwear and layered clothing are still essential, as temperatures can vary significantly between the warm lower valleys and the cool pre-dawn summit of Poon Hill. The trek is well-supported by an extensive network of comfortable teahouses, making it one of Nepal’s most logistically straightforward and beginner-friendly Himalayan adventures.`,

  `Logistically, the trek operates within the Annapurna Conservation Area and requires an ACAP permit and a TIMS card. The best operational windows are during the vibrant spring season (March-May), when the rhododendron forests are in full bloom, and the stable autumn season (September-November) for crystal-clear mountain visibility. While the route is relatively short and accessible, comprehensive travel insurance covering trekking activities and emergency evacuation is still strongly advised.`,

  `The Ghorepani Poon Hill Trek offers a rewarding blend of mountain scenery, cultural immersion, and physical challenge, making it one of Nepal’s most iconic short treks. The dramatic sunrise from Poon Hill remains the defining highlight, bathing the Annapurna and Dhaulagiri ranges in golden light, while the trail itself passes through picturesque hillside villages like Ghandruk and Ghorepani. The experience concludes with a relaxing descent through terraced farmlands and optional rejuvenation at Jhinu Danda’s natural hot springs, creating a complete Himalayan experience that balances accessibility with unforgettable scenery.`,

  `NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.`,

  `We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek.`,
],

itinerary: [
  { day: 1, title: 'Arrival in Kathmandu (1,400 m)', description: 'Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area.' },

  { day: 2, title: 'Kathmandu Sightseeing & Preparation', description: 'Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant.' },

  { day: 3, title: 'Drive to Pokhara (822 m)', description: 'Depart Kathmandu in a tourist vehicle for a scenic drive following rivers and hills to the lakeside city of Pokhara. (7–8 hours’ drive)' },

  { day: 4, title: 'Drive to Ulleri & Trek to Ghorepani (2,860 m)', description: 'Drive to Ulleri and begin trekking through dense rhododendron forests and traditional Magar villages to Ghorepani. (4–5 hours trek)' },

  { day: 5, title: 'Hike to Poon Hill (3,210 m) & Trek to Tadapani (2,630 m)', description: 'Early morning hike to Poon Hill for sunrise over the Annapurna and Dhaulagiri ranges. Continue trekking through forests and ridges to Tadapani. (6–7 hours)' },

  { day: 6, title: 'Trek to Ghandruk (1,940 m)', description: 'Descend through rhododendron forests to the traditional Gurung village of Ghandruk, with opportunities to explore the local culture and mountain museum. (3–4 hours)' },

  { day: 7, title: 'Trek to Jhinu Danda (1,780 m)', description: 'Descend through terraced fields and forested trails to Jhinu Danda, where you can relax in the natural hot springs beside the Modi Khola river. (5–6 hours)' },

  { day: 8, title: 'Trek to Nayapul & Drive to Pokhara (822 m)', description: 'Complete the final leg of the trek to Nayapul and transfer by private vehicle back to Pokhara for a restful evening. (3–4 hours trek, 1–2 hours’ drive)' },

  { day: 9, title: 'Drive to Kathmandu (1,400 m)', description: 'Return drive to Kathmandu. Farewell dinner in the evening with your trekking team. (7–8 hours’ drive)' },

  { day: 10, title: 'Departure', description: 'Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home.' },
],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, notebook, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or considerable damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Poon Hill',
  },
  'langtang-valley-ganja-la-pass-trek': {
    title: 'Langtang Valley & Ganja La Pass Trek',
    duration: '15 Days',
    difficulty: 'Technical / challenge',
    elevation: '5,200 m / 17,056 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'High Altitude Trekking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/ganja-la-pass.jpg', '/assets/images/langtang-valley-ganja.jpg', '/assets/images/tserko-ri.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Langtang Valley & Ganja La Pass Trek', href: '#' },
    ],
    description: `The Langtang Valley & Ganja La Pass Trek is a strenuous, high-altitude alpine expedition that bridges the deep glacial valleys of the Langtang region with the cultural highlands of the Helambu circuit. Starting with a drive to Syabrubesi (1,460m), the trail shadows the Langtang Khola before deviating into a wild, self-sufficient mountain corridor.`,
    highlights: [
      'The Ultimate Langtang Frontier',
      'The Formidable Ganja La Conquest (5,130 m)',
      'The Transition to True Wilderness',
      'The Kyanjin Gompa Exploration Sanctuary (3,830 m)',
      'Deep Tamang and Hyolmo Culture',
      'The Rushing Langtang Khola Gorge',
    ],
    overview: [
  `The Langtang Valley & Ganja La Pass Trek is a strenuous, high-altitude alpine expedition that bridges the deep glacial valleys of the Langtang region with the cultural highlands of the Helambu circuit. Starting with a drive to Syabrubesi (1,460m), the trail shadows the Langtang Khola before deviating into a wild, self-sufficient mountain corridor. The absolute crux of this 15-day itinerary is the formidable crossing of the Ganja La Pass at 5,122 meters, a highly technical pass that requires mandatory rest and exploration days at Kyanjin Gompa (3,870m) to secure proper physiological acclimatization.`,

  `Success on this remote circuit demands elite physical fitness, lower-body strength, and prior high-altitude trekking experience. The terrain shifts dramatically from lush bamboo and rhododendron forests to unstable moraines, rockfalls, and heavily ice-glazed slopes near the pass that frequently require the use of ropes, crampons, and an ice axe. Because the crossing into Helambu enters an uncommercialized wilderness devoid of teahouses, a hybrid logistical approach is required: standard lodge stays through the lower valley, transitioning into a fully supported tented camping setup at the high camps of Ngegang and Keldang.`,

  `Logistically, the technical challenges and isolation of the Ganja La Pass demand a certified guide and a dedicated support team; independent or solo crossings are highly hazardous and strictly discouraged. Trekkers must obtain a Langtang National Park entry permit and a TIMS card. The primary operational windows are the stable post-monsoon autumn (October–November) and the clear pre-monsoon spring (March–May), and specialized travel insurance that explicitly covers emergency helicopter evacuation up to 5,500 meters is a mandatory prerequisite.`,

  `The expedition reaches its dual physical and visual climaxes at the summit of Tserko Ri (4,984m) during the acclimatization phase, and on the windswept crest of the Ganja La Pass (5,122m). From these vantage points, trekkers are rewarded with an immense, 360-degree panorama of Langtang Lirung (7,227m), Naya Kanga, and Dorje Lakpa stretching into Tibet. Descending from the stark, frozen pass, the trail enters the peaceful ridge-line communities of Tarkeghyang and Sermathang, offering a rich immersion into the distinct Hyolmo heritage before concluding with a drive back to Kathmandu from Melamchi Pul.`,
  
  `NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.`,

  `We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek.`,
],

itinerary: [
  { day: 1, title: 'Arrival in Kathmandu (1,400 m)', description: 'Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area.' },

  { day: 2, title: 'Kathmandu Sightseeing & Preparation', description: 'Morning guided tour of city landmarks. Afternoon trek briefing, gear check (ensuring climbing gear and microspikes/crampons are ready for the pass), and a welcome dinner at a traditional Nepali restaurant.' },

  { day: 3, title: 'Drive to Syabrubesi (1,503 m)', description: 'Depart Kathmandu early in a private tourist vehicle for a scenic, winding drive through the hills and Trishuli River valley to the trailhead town of Syabrubesi. (8–9 hours drive)' },

  { day: 4, title: 'Trek to Lama Hotel (2,500 m)', description: 'Begin trekking along the Langtang Khola river, crossing several suspension bridges and ascending steadily through dense oak, bamboo, and rhododendron forests to Lama Hotel. (5–6 hours)' },

  { day: 5, title: 'Trek to Langtang Village (3,430 m)', description: 'Continue climbing through the forest valley as the landscape opens up. Pass water-driven mills and prayer wheels, reaching the rebuilt settlement of Langtang Village. (5–6 hours)' },

  { day: 6, title: 'Trek to Kyanjin Gompa (3,830 m)', description: 'A shorter alpine ascent past traditional yak pastures and extensive mani walls. Arrive at Kyanjin Gompa, surrounded by dramatic snow-capped peaks, in time for lunch. (4–5 hours)' },

  { day: 7, title: 'Kyanjin Gompa Exploration Day (Acclimatization)', description: 'A full exploration day. Take an optional steep hike up to the viewpoint of Kyanjin Ri (4,773 m) or Tserko Ri (4,984 m) for panoramic glacial views, essential for acclimatizing before the high pass.' },

  { day: 8, title: 'Trek to Ngegang (4,200 m)', description: 'Cross the Langtang Khola and leave the main trail behind. Ascend a steep, rugged path through birch forests and alpine pastures to the high wilderness campsite at Ngegang. (5–6 hours)' },

  { day: 9, title: 'Cross Ganja La Pass (5,130 m) & Trek to Keldang (4,270 m)', description: 'The Pass: Early pre-dawn start to climb a steep moraine and tackle a challenging, icy scramble to the summit of Ganja La Pass. Take in spectacular views of the peaks before descending a steep, snowy slope to Keldang. (6–7 hours)' },

  { day: 10, title: 'Trek to Dukpu (4,040 m)', description: 'Trek along a high, remote ridge line with panoramic views of the surrounding mountains, descending and ascending across undulating, wilderness terrain to reach Dukpu. (6–7 hours)' },

  { day: 11, title: 'Trek to Tarkeghyang (2,600 m)', description: 'Begin a long descent down from the ridges, passing through beautiful pine and rhododendron forests before emerging into Helambu’s large, traditional Sherpa village of Tarkeghyang. (5–6 hours)' },

  { day: 12, title: 'Trek to Sermathang (2,590 m)', description: 'Follow an easy, pleasant trail that winds around the valley side, passing beautiful stūpas, monasteries, and lush green fields to reach the scenic village of Sermathang. (5–6 hours)' },

  { day: 13, title: 'Trek to Melamchi Pul Bazaar (870 m)', description: 'Complete the final leg of the trek, descending steadily through terraced farmlands, local villages, and subtropical foothills down to the river hub of Melamchi Pul Bazaar. (5–6 hours)' },

  { day: 14, title: 'Drive to Kathmandu (1,400 m)', description: 'Board your private tourist vehicle for the drive from Melamchi Pul Bazaar back across the foothills and highways to Kathmandu. Private transfer to your hotel. (4–5 hours drive)' },

  { day: 15, title: 'Departure', description: 'Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home.' },
],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Ganja La',
  },
  'khopra-danda-trek': {
    title: 'Khopra Danda Trek',
    duration: '12 Days',
    difficulty: 'Moderate',
    elevation: '3,660 m (Khopra Ridge) / 4,660 m (Optional Khayer Lake)',
    season: 'Mar-May, Sep-Dec',
    groupSize: '2 or more',
    activity: 'Trekking',
    accommodation: 'Tea House & Lodge',
    heroImages: ['/assets/images/khopra-danda.jpg', '/assets/images/khayer-lake.jpg', '/assets/images/muldai-viewpoint.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Khopra Danda Trek', href: '#' },
    ],
    description: `The Khopra Danda Trek is a rewarding 12-day adventure crafted for trekkers seeking a quieter alternative to the crowded Annapurna Base Camp and Ghorepani trails, while still enjoying world-class Himalayan scenery. Starting with a scenic drive to Pokhara, the journey begins on peaceful forested paths that wind through traditional Gurung settlements and terraced hillsides.`,
    highlights: [
      'The Uncrowded Ridge Walk (3,660 m)',
      'The Front-Row Dhaulagiri Panorama (8,167 m)',
      'The Holy Alpine Waters of Khayer Lake (4,660 m)',
      'The Sustainable Community Lodges',
      'The Crimson Rhododendron Forests',
      'The Double-Viewpoint Bonus: Muldai Viewpoint',
      'The Local Cheese Factory in Swanta',
    ],
    overview: [
    "The Khopra Danda Trek is a rewarding 12-day adventure crafted for trekkers seeking a quieter alternative to the crowded Annapurna Base Camp and Ghorepani trails, while still enjoying world-class Himalayan scenery. Starting with a scenic drive to Pokhara, the journey begins on peaceful forested paths that wind through traditional Gurung settlements and terraced hillsides. As you gradually ascend from the lowland villages into rhododendron-filled woodlands, the Annapurna massif begins to reveal itself in dramatic stages, creating a steady sense of rising anticipation long before reaching the alpine ridges.",

    "The upper section of the trek unfolds along the more remote flanks of the Annapurna region, where community-managed lodges support sustainable tourism and ensure serene walking days. Approaching Khopra Ridge (3,660 m)—the signature viewpoint of the route—trekkers are rewarded with a sweeping panorama that stretches across Annapurna South, Nilgiri, Dhaulagiri, Tukuche Peak, Hiunchuli, and the iconic Machhapuchhre. The ridge itself is positioned away from the busier main corridor, offering a rare opportunity to experience the Himalayas in complete tranquility.",

    "For those seeking an extra challenge, the optional full-day hike to Khayer Lake (4,660m) adds a sacred dimension to the journey. This high-altitude glacial lake holds deep cultural importance for local communities, who regard it as a pilgrimage site connected to Hindu legends and mountain deities. The trail to the lake is steep and demanding but delivers solitude and spectacular alpine scenery that very few trekkers ever witness. Because of the elevation gain, strong pacing and proper acclimatization are essential during this extension.",

    "The descent from Khopra Ridge flows through remote hillside settlements, peaceful grazing meadows, and forested slopes alive with birdlife, eventually reconnecting with lower-altitude villages before returning to Pokhara. Each night is spent in simple yet welcoming teahouses where warm hospitality and locally prepared meals reflect the authentic character of the Annapurna region. With reliable conditions in Spring and Autumn, the Khopra Danda Trek stands out as one of Nepal's best off-beat trekking experiences—offering a rare blend of quiet trails, rich cultural encounters, sustainable tourism, and truly unforgettable mountain views.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, severe weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best workable solutions to keep your trip going. We really appreciate you're understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a clever idea to book your international flights with an extra day in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the choice to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Drive to Pokhara (900 m)", description: "Morning departure by tourist bus for a scenic journey along the Trishuli and Marsyandgi rivers to the lakeside city of Pokhara. (7-8 hours' drive)" },
    { day: 4, title: "Drive to Kimche & Trek to Tadapani (2,630 m)", description: "Morning drive in a private vehicle to Kimche. From there, begin trekking uphill through beautiful, terraced fields, rhododendron forests, and local villages to reach Tadapani. (2.5-3 hours' drive, 6-7 hours trek)" },
    { day: 5, title: "Trek to Dobato (3,420 m)", description: "Leave the main trail behind and climb steadily up a quieter, pristine path through thick oak and rhododendron forests to reach the high ridge settlement of Dobato. (6-7 hours)" },
    { day: 6, title: "Hike Muldai Viewpoint & Trek to Chistibang (3,026 m)", description: "Early in the morning short climb to Muldai Viewpoint (3,637 m) for sunrise panoramas of the Annapurna and Dhaulagiri ranges. Return for breakfast, then trek through forests and pastures down into the valley to Chistibang. (5-6 hours)" },
    { day: 7, title: "Trek to Khopra Danda (3,640 m)", description: "Complete a steady, uphill climb out of the forest line and onto the open alpine ridge. Arrive at the community-managed lodge on Khopra Ridge for front-row mountain views. (5-6 hours)" },
    { day: 8, title: "Day Hike to Khayer Lake (4,660 m)", description: "A long, challenging day hike to the sacred and pristine high-altitude Khayer Lake at the base of Annapurna South. Realize dramatic glacial views before returning to Khopra Ridge for the night. (8-9 hours round trip)" },
    { day: 9, title: "Trek to Tatopani (1,190 m)", description: "Begin a long, steep descent down through the alpine ridges and forest hillsides into the deep Kali Gandaki Gorge to reach the village of Tatopani. Relax in the local natural hot springs. (7-8 hours)" },
    { day: 10, title: "Drive to Pokhara (900 m)", description: "Board a private tourist vehicle for a scenic drive back along the Kali Gandaki and Mardi rivers to Pokhara. Afternoon free to relax by Phewa Lake. (4-5 hours' drive)" },
    { day: 11, title: "Drive to Kathmandu (1,400 m)", description: "Morning departure from Pokhara by tourist bus, retracing the scenic highway route back into Kathmandu. Private transfer to your hotel for a free evening. (7-8 hours' drive)" },
    { day: 12, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, notebook, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or considerable damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Khopra Danda',
  },
  'ghorepani-poon-hill-trek-10-days-duplicate': {
    title: 'Ghorepani Poon Hill Trek',
    duration: '10 Days',
    difficulty: 'Moderate',
    elevation: '3,210 m / 10,531 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking / Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/poon-hill-sunrise.jpg', '/assets/images/ulleri-stairs.jpg', '/assets/images/ghandruk.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Ghorepani Poon Hill Trek', href: '#' },
    ],
    description: `The Ghorepani Poon Hill Trek is a classic, beginner-friendly journey through the lower foothills of the Annapurna region, renowned for offering some of the most accessible panoramic views in the Himalayas. The adventure begins in Kathmandu and routes through the lakeside city of Pokhara before starting the foot trail at Nayapul (1,070m).`,
    highlights: [
      'The Legendary Poon Hill Sunrise (3,210 m)',
      'The Perfect Lower-Altitude Pathway',
      'The Iconic Ulleri Stone Staircase',
      'The Enchanting Rhododendron Canopies',
      'The Vibrant Gurung Hub of Ghandruk',
      'The Vibrant Lakeside Finish in Pokhara',
    ],
    overview: [
      `The Ghorepani Poon Hill Trek is a classic, beginner-friendly journey through the lower foothills of the Annapurna region. A standard 10-day itinerary—which includes travel days and city exploration—is perfectly packed for families, novice hikers, and those seeking a scenic, lower-altitude mountain experience without the harsh physical demands of deep alpine expeditions.`,
      `Success on this moderate trek requires a basic level of physical fitness, as the trail is well-maintained but characterized by significant elevation changes over short distances. The most notorious physical challenge is the steep ascent from Tikhedhunga to Ulleri, a grueling climb up more than 3,000 stone steps.`,
      `The absolute climax of the journey occurs with a pre-dawn headlamp hike from the mountain village of Ghorepani up to the crest of Poon Hill at 3,210 meters. From this celebrated vantage point, trekkers witness a spectacular sunrise over a massive 360-degree Himalayan horizon.`,
      `NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. We highly recommend arriving a day or two before your trip officially begins.`,
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu (1,400 m)', description: 'Airport pick-up and transfer to your hotel.' },
      { day: 2, title: 'Kathmandu Sightseeing & Preparation', description: 'Morning guided tour. Afternoon trek briefing, gear check, and welcome dinner.' },
      { day: 3, title: 'Drive to Pokhara (900 m)', description: '7-9 hours by tourist bus.' },
      { day: 4, title: 'Drive to Birethanti & Trek to Ulleri (2,020 m)', description: '1-1.5 hours drive, 4-5 hours trek up stone staircases.' },
      { day: 5, title: 'Trek to Ghorepani (2,810 m)', description: '5-6 hours through oak and rhododendron forests.' },
      { day: 6, title: 'Hike Poon Hill (3,210 m) & Trek to Tadapani (2,610 m)', description: '6-7 hours total. Pre-dawn for sunrise.' },
      { day: 7, title: 'Trek to Ghandruk (1,940 m)', description: '4-5 hours through cloud forests.' },
      { day: 8, title: 'Trek to Syauli Bazaar & Drive to Pokhara (900 m)', description: '3-4 hours trek, 2-3 hours drive.' },
      { day: 9, title: 'Drive to Kathmandu (1,400 m)', description: '7-9 hours drive.' },
      { day: 10, title: 'Departure', description: 'Transfer to Tribhuvan International Airport.' },
    ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Poon Hill',
  },
  'nar-phu-valley-annapurna-circuit-trek': {
    title: 'Nar Phu Valley Trek with Annapurna Circuit',
    duration: '18 Days',
    difficulty: 'Strenuous / Challenging',
    elevation: '5,416 m / 17,769 ft',
    season: 'Spring (March to May) & Autumn (Late September to November)',
    groupSize: '2 or more',
    activity: 'Trekking/Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/nar-phu.jpg', '/assets/images/kang-la-pass.jpg', '/assets/images/thorong-la.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Nar Phu Valley with Annapurna Circuit', href: '#' },
    ],
    description: `The Nar Phu Valley and Annapurna Circuit trek is an exceptional high-altitude combination that merges the raw, restricted wilderness of a hidden Tibetan enclave with Nepal's most iconic mountain circuit. Diverting from the main trail at Koto, this demanding itinerary takes trekkers into the rain-shadow northern reaches of the Manang district.`,
    highlights: [
      'The Ultimate High-Pass Doubleheader (Kang La Pass 5,320 m and Thorong La Pass 5,416 m)',
      'The Forbidden Lost Valleys (Nar Phu Valley)',
      'Centuries-Old Living Monasteries',
      'The Majestic Kang La Panorama',
      'The Classic Circuit Fusion',
      'The Sacred Temple of Muktinath (3,760 m)',
      'Unrivaled Geographic Diversity',
      'The Spectacular Lakeside Finish at Pokhara',
    ],
    overview: [
    "The Nar Phu Valley and Annapurna Circuit trek is an exceptional high-altitude combination that merges the raw, restricted wilderness of a hidden Tibetan enclave with Nepal's most iconic mountain circuit. Diverting from the main trail at Koto, this demanding itinerary—typically spanning 18 to 21 days—takes trekkers into the rain-shadow northern reaches of the Manang district. The route requires conquering two monumental high-altitude passes: the steep, challenging Kang La Pass (5,320m) to exit the hidden valley, and the legendary Thorong La Pass (5,416m) to cross the Great Himalayan Range.",

    "Success on this strenuous journey requires excellent cardiovascular conditioning and prior high-altitude trekking experience. The terrain is highly varied and rugged, moving from the narrow, dramatic river gorges of the Nar Khola to the wide, arid, alpine desert plateaus of Upper Manang. Because the itinerary demands spending multiple consecutive nights above 4,000 meters, a cautious, scientific approach to acclimatization is necessary to manage the thinning air safely before tackling the consecutive pass crossings.",

    "Logistically, the Nar Phu sector is a strictly regulated border zone where independent or solo trekking is legally prohibited. Trekkers must travel in a minimum group of two people accompanied by a licensed government guide and secure a Special Restricted Area Permit (RAP) alongside the standard Annapurna Conservation Area Project (ACAP) permit and TIMS card. The primary operational windows are the highly stable autumn months (October-November) and the vibrant pre-monsoon spring (March-May). Due to the remote nature of the restricted valley and the extreme elevations of the passes, specialized travel insurance covering emergency helicopter evacuation up to 6,000 meters is mandatory.",

    "The trek reaches its cultural and physical climaxes within the ancient, stone-walled villages of Nar and Phu, where centuries-old Tibetan Buddhist traditions, active monasteries, and a traditional yak-herding lifestyle remain completely untouched by modern commercialism. After traversing the breathtaking Kang La Pass, the trail rejoins the classic Annapurna Circuit at Ngawal, leading through the bustling hub of Manang and up over the windswept crest of Thorong La. The final leg rewards trekkers with a dramatic descent into the sacred pilgrimage site of Muktinath and the windswept Kali Gandaki Valley, concluding a world-class Himalayan odyssey that balances deep cultural preservation with an immense physical feat.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, special restricted area permit processing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Drive to Dharapani (1,860 m)", description: "Long scenic drive from Kathmandu along the Trishuli and Marsyandgi rivers, passing Bessahar to reach Dharapani. (8-9 hours' drive)" },
    { day: 4, title: "Trek to Koto (2,600 m)", description: "Trek through pine and fir forests, passing the small villages of Bagarchhap and Timang while enjoying views of Mount Manaslu to reach Koto. (5-6 hours)" },
    { day: 5, title: "Trek to Meta (3,560 m)", description: "Enter the restricted Nar Phu Valley, leaving the main Annapurna trail. Hike along the Nar Khola River through deep forest canyons and pass Dharmasala to reach the high plateau of Meta. (7-8 hours)" },
    { day: 6, title: "Trek to Phu Gaon (4,080 m)", description: "Trek past ancient, abandoned Khampa refugee settlements at Chyakhu and Kyang. Follow the rugged trail along the riverbed to enter the remote, medieval stone-walled village of Phu. (7-8 hours)" },
    { day: 7, title: "Phu Gaon Exploration & Acclimatization", description: "Rest and acclimatization day in Phu. Explore the ancient Tashi Lhakhang Gompa or take an optional hike toward Himlung Himal Base Camp to adapt to the altitude." },
    { day: 8, title: "Trek to Nar Phedi (3,490 m)", description: "Retrace your steps down the valley toward Kyang, then descend to cross the deep gorge of the Lapche River via Mahendra Pul. Overnight at the serene Nar Phedi monastery. (6-7 hours)" },
    { day: 9, title: "Trek to Nar Village (4,110 m)", description: "Complete a short but steep winding climb past a line of traditional Buddhist stupas to reach the sprawling, historic village of Nar. (2-3 hours)" },
    { day: 10, title: "Cross Kang La Pass (5,320 m) & Trek to Ngawal (3,660 m)", description: "Pass 1: Early pre-dawn starts to climb the steep moraine to the top of Kang La Pass for panoramic views of the Annapurna massif. Descend a long-screen slope to rejoin the Annapurna Circuit at Ngawal. (7-8 hours)" },
    { day: 11, title: "Trek to Manang (3,540 m)", description: "Follow an easy, panoramic upper trail passing through the traditional village of Braga to reach the main high-altitude hub of Manang. (4-5 hours)" },
    { day: 12, title: "Trek to Yak Kharka (4,050 m)", description: "Leave the Marsyangdi valley and climb steadily through alpine scrub and juniper pastures, crossing a small river to reach Yak Kharka. (3-4 hours)" },
    { day: 13, title: "Trek to Thorong Phedi (4,525 m)", description: "A steady, high-altitude climb along the riverbank before crossing a suspension bridge. Follow an undulating trail across a landslide area to reach Thorong Phedi base camp. (3-4 hours)" },
    { day: 14, title: "Cross Thorong La (5,416 m) & Trek to Muktinath (3,760 m)", description: "Pass 2: Early pre-dawn starts for the long, steep climb to the summit of Thorong La Pass. Descend a steep, rocky trail down to the sacred pilgrimage site of Muktinath. (8-9 hours)" },
    { day: 15, title: "Trek to Jomsom (2,720 m)", description: "Trek down through the arid, wind-blown landscapes of the Kali Gandaki valley, passing the ancient fortress village of Kagbeni to reach Jomsom. (5-6 hours)" },
    { day: 16, title: "Fly to Pokhara (822 m)", description: "Early morning mountain flight from Jomsom to Pokhara (25 mins). Private transfer to your lakeside hotel. Afternoon free to relax by Phewala Lake or explore the city." },
    { day: 17, title: "Fly to Kathmandu", description: "Morning flight from Pokhara back to Kathmandu. Private transfer to your hotel and a free afternoon for relaxation or last-minute shopping in Thamel." },
    { day: 18, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Nar Phu',
  },
  'gokyo-lakes-trek': {
    title: 'Gokyo Lakes Trek',
    duration: '14 Days',
    difficulty: 'Strenuous / Challenging',
    elevation: '5,483 m / 17,988 ft',
    season: 'Mar-May, Sep-Nov',
    groupSize: '2 or more',
    activity: 'Trekking/Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/gokyo-lakes-blue.jpg', '/assets/images/gokyo-ri.jpg', '/assets/images/ngozumpa-glacier.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Gokyo Lakes Trek', href: '#' },
    ],
    description: `The Gokyo Lake Trek is a moderately difficult, high-altitude journey distinguished by its spectacular scenery and the mandatory challenge of acclimatization. Starting with a flight to Lukla (2,840 m) the trail ascends gradually over 14 days, with crucial acclimatization stops built in, notably at Namche Bazaar. The highest point and primary reward are the summit of Gokyo Ri (5,483 m).`,
    highlights: [
      'The Six Turquoise Jewels (Gokyo Lakes at 4,700m - 5,000m)',
      'The Supreme Gokyo Ri Viewpoint (5,357 m)',
      'The Crown Jewel Fifth Lake',
      'Nepal\'s Longest Glacier (Ngozumpa Glacier)',
      'A Quieter Everest Experience',
      'The Legendary Sherpa Capital (Namche Bazaar)',
      'Spiritual Wonders of Khumjung (Yeti Scalp monastery)',
      'Sacred Alpine Waters',
    ],
    overview: [
    "The Gokyo Lake Trek is a moderately difficult, high-altitude journey distinguished by its spectacular scenery and the mandatory challenge of acclimatization. Starting with a flight to Lukla (2,840 m) the trail ascends gradually over 14 days, with crucial acclimatization stops built in, notably at Namche Bazaar. The highest point and primary reward are the summit of Gokyo Ri (5,483 m), which offers a breathtaking panorama of Mount Everest, Lhotse, Makalu, and Cho Oyu, making it a world-class viewpoint.",

    "Success on this trek hinges on respecting the altitude. Trekkers must be prepared for the risks of Acute Mountain Sickness (AMS), especially as the itinerary involves significant elevation gains to the Gokyo Lakes region (4,800 m) and the Ri viewpoint. A slow, steady pace, thorough hydration (3-4 liters of water daily), and avoiding alcohol are critical safety precautions. While physically demanding, the trek promises an unparalleled experience in the remote Everest region, featuring the pristine, turquoise Gokyo Lakes and deep immersion in Sherpa culture.",

    "The 14-day Gokyo Lake Trek is a stunning, less-traveled alternative to the main EBC route, offering unparalleled pristine beauty and panoramic views of the high Himalayas. The adventure begins with a thrilling flight to Lukla (2,840 m), the starting point for trekking through the protected Sagarmatha National Park. The trail leads through traditional Sherpa villages, across suspension bridges, and into the vibrant hub of Namche Bazaar (3,440m), where an essential acclimatization day is taken. The route then ascends the secluded Gokyo Valley, passing settlements like Phorste Thanga and Machherma, before reaching the destination.",

    "The trek culminates at Gokyo Village (4,800 m), nestled beside the pristine, turquoise Third Lake. The unforgettable highlight is the climb to Gokyo Ri (5,483 m), which offers a sweeping panorama of four 8,000-meter peaks—Mount Everest, Lhotse, Makalu, and Cho Oyu—rising above the vast Ngozumpa Glacier. This entire experience is a deep connection with the colossal power of the world's highest mountains and the resilient Buddhist culture of the Sherpa people, concluding with a reflective descent and a flight back to Kathmandu, completing this immensely rewarding Himalayan odyssey.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate you're understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,350 m/4,429 ft)", description: "Airport pick-up and transportation provided to the hotel." },
    { day: 2, title: "Half-day city tour", description: "Afternoon trek briefing & preparation. Welcome dinner in a traditional Nepali Restaurant." },
    { day: 3, title: "Fly to Lukla Airport (2,860 m/9,383 ft). Trek to Phakding (2,610 m/8,563 ft)", description: "(3 - 4 hours)." },
    { day: 4, title: "Trek to Namche Bazaar (3,440 m/11,286 ft)", description: "(5 - 6 hours)." },
    { day: 5, title: "Namche - Rest Day - acclimatization", description: "Hike to Everest View Hotel (3,880 m/12,729 ft) for first views of Everest, Lhotse, and Ama Dablam." },
    { day: 6, title: "Trek to Dole (4,038 m/13,248 ft)", description: "(5 - 7 hours). The trail diverges from the EBC route toward the Gokyo Valley." },
    { day: 7, title: "Trek to Machhermo (4,470 m/14,665 ft)", description: "(4 - 5 hours). Enjoy views of the massive Cho Oyu peak." },
    { day: 8, title: "Trek to Gokyo Village (Third Lake) (4,790 m/15,715 ft)", description: "(4 - 5 hours). Arrive at the main Gokyo Lake." },
    { day: 9, title: "Gokyo - Acclimatization/Summit Day", description: "Morning climb of Gokyo Ri (5,357 m/17,575 ft) for panoramic sunrise views (5-6 hours round trip). Afternoon exploration of the Fourth and Fifth Lakes." },
    { day: 10, title: "Trek to Dole (4,038 m/13,248 ft)", description: "(5 - 6 hours). Begin the descent, retracing the path back down the valley." },
    { day: 11, title: "Trek to Namche Bazaar (3,440 m/11,286 ft)", description: "(4 - 5 hours)." },
    { day: 12, title: "Trek to Lukla (2,860 m/9,383 ft)", description: "(6 - 8 hours). This is a longer day to complete the trek." },
    { day: 13, title: "Fly to Kathmandu (1,350 m/4,429 ft)", description: "Early morning flight back to the capital. Farewell dinner celebration." },
    { day: 14, title: "Final Departure", description: "Transportation provided to the airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Gokyo Lakes',
  },
  'manaslu-circuit-trek': {
    title: 'Manaslu Circuit Trek',
    duration: '16 Days',
    difficulty: 'Strenuous / Challenging',
    elevation: '5,106 m / 16,752 ft',
    season: 'Spring (March to May) & Autumn (Late September to November)',
    groupSize: '2 or more',
    activity: 'Trekking/Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/manaslu.jpg', '/assets/images/larkya-la-pass.jpg', '/assets/images/samagaon.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Manaslu Circuit Trek', href: '#' },
    ],
    description: `The Manaslu Circuit Trek is a demanding high-altitude expedition that requires meticulous preparation and a high level of physical conditioning. The journey begins with a scenic drive to Machha Khola (869m) and steadily climbs toward the trek's ultimate challenge: the Larkya La Pass at 5,106m.`,
    highlights: [
      'The Uncrowded Wilderness Highway (Loop around Mt. Manaslu 8,163 m)',
      'The Larkya La Pass Triumph (5,106 m)',
      'The Subtropical-to-Arctic Shift',
      'Pure Tibetan-Buddhist Heritage',
      'The Ribung Gompa Sunrise at Lho',
      'The Manaslu Base Camp Excursion (4,800 m)',
      'The Border Trading Post of Samdo',
      'A Two-Region Finale (Manaslu to Annapurna network)',
    ],
    overview: [
    "The Manaslu Circuit Trek is a demanding high-altitude expedition that requires meticulous preparation and a high level of physical conditioning. The journey begins with a scenic drive to Machha Khola (869m) and steadily climbs toward the trek's ultimate challenge: the Larkya La Pass at 5,106m. A standard 14-to16-day itinerary is essential to ensure proper acclimatization, with strategic rest days in villages like Samagaun and Samdo to allow your body to adapt to the thinning air. It is vital to follow the \"climb high, sleep low\" principle and maintain a steady pace; altitude-related symptoms such as persistent headaches or nausea must be addressed immediately with a descent, as the remote nature of the Manaslu Conservation Area makes safety the highest priority.",

    "Success on this circuit depends on early and rigorous training, focusing on cardiovascular endurance and lower-body strength at least 3 months before departure. The terrain is diverse and rugged, requiring high-quality, broken-in trekking boots and a versatile layering system to handle everything from tropical humidity to sub-zero temperatures at the pass. Logistically, this trek is located within a restricted area, requiring a licensed guide and specific permits, including the Manaslu Restricted Area Permit, MCAP, and ACAP. The ideal windows for trekking are the stable post-monsoon months (October-November) and the blooming pre-monsoon season (March-May), and comprehensive travel insurance covering helicopter evacuation is an absolute necessity.",

    "The 16-day Manaslu Circuit Trek is an iconic journey that offers a \"wilder\" alternative to the more commercialized Everest and Annapurna routes. Starting in the deep, lush gorges of the Budhi Gandaki River, the trail winds through traditional Nubri and Tsumba villages where the Tibetan-influenced culture remains vibrant and intact. This itinerary is deliberately packed to showcase the architectural beauty of ancient Mani walls and monasteries, all while keeping the towering, \"spirit mountain\" summit of Mt. Manaslu (8,163m) as your constant, majestic companion.",

    "The trek reaches its dramatic climax at the Larkya La Pass (5,106m), where trekkers are rewarded with a breathtaking panorama of the Himlung Himal, Kang Guru, and the Annapurna Massif. This experience is more than a high-altitude feat; it is a profound journey through time and nature, connecting the subtropical foothills of Nepal to the stark, windswept beauty of the Tibetan plateau. The final leg follows a reflective descent through the pristine forests of Bimthang, concluding a world-class Himalayan odyssey that balances physical triumph with deep cultural immersion.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, special restricted area permit processing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Drive to Machha Khola (870 m)", description: "Depart Kathmandu early for a scenic drive along the Trishuli River highway, passing through Arughat and Soti Khola to reach Machha Khola. (8-9 hours' drive)" },
    { day: 4, title: "Trek to Jagat (1,340 m)", description: "Trek along the narrow banks of the Budhi Gandaki River, crossing suspension bridges, passing natural hot springs at Tatopani, and climbing rocky ridges to reach the stone-paved checkpoint village of Jagat. (6-7 hours)" },
    { day: 5, title: "Trek to Deng (1,860 m)", description: "Ascend through rocky river trails to Salleri and Philim, cross a long suspension bridge over the Budhi Gandaki, and trek through dense bamboo forests to reach the small village of Deng. (6-7 hours)" },
    { day: 6, title: "Trek to Namrung (2,630 m)", description: "Cross the river multiple times, climbing steadily through rhododendron, pine, and oak forests. Complete a final steep switchback climb to enter the culturally Tibetan village of Namrung. (6-7 hours)" },
    { day: 7, title: "Trek to Lho (3,180 m)", description: "Trek through alpine landscapes and local farming villages, passing extensive mani walls and stone houses. Reach Lho village, home to a prominent hilltop monastery and your first grand view of Mount Manaslu. (4-5 hours)" },
    { day: 8, title: "Trek to Sama Gaon (3,530 m)", description: "Pass through the village of Shyala, walking alongside the glacier moraine with panoramic views of Peak 29 and Himal Chuli. Arrive at Sama Gaon, the main cultural hub of the region. (4-5 hours)" },
    { day: 9, title: "Sama Gaon Rest Day (Acclimatization)", description: "A crucial rest day to adapt to the altitude. Take an optional acclimatization hike to the serene Birendra Lake or up toward Manaslu Base Camp (4,400m), then explore the historic village." },
    { day: 10, title: "Trek to Samdo (3,860 m)", description: "Descend to the Budhi Gandaki River and follow it upward as the valley opens. Complete a gentle, high-altitude climb through juniper fields to reach the remote Tibetan refugee settlement of Samdo. (3-4 hours)" },
    { day: 11, title: "Samdo Rest Day (Acclimatization)", description: "A secondary rest day before the high pass. Take a short, steep acclimatization hike up the ridge toward the old Tibetan trade border route for spectacular views of Larkya Peak and the northern slopes." },
    { day: 12, title: "Trek to Dharmasala / Larkya Phedi (4,460 m)", description: "Cross a wooden bridge over the river and climb steadily along the lateral moraine of the Larkya Glacier. Arrive at the high-altitude stone shelter settlement of Dharmasala to rest early. (4-5 hours)" },
    { day: 13, title: "Cross Larkya La Pass (5,160 m) & Trek to Bimthang (3,590 m)", description: "The Pass: Early pre-dawn starts for the long, gradual climb to the summit of Larkya La Pass. Enjoy expansive views of Annapurna II and Kang Guru before a steep, demanding descent over loose scree and moraine to Bimthang. (8-10 hours)" },
    { day: 14, title: "Trek to Dharapani (1,860 m)", description: "Descent through alpine pastures and pristine rhododendron, pine, and oak forests alongside the Dudh Khola. Pass through Goa village and cross the Marsyangdi River to join the Annapurna Circuit route at Dharapani. (6-7 hours)" },
    { day: 15, title: "Drive to Kathmandu (1,400 m)", description: "Board a private vehicle for the long drive from Dharapani back down through Besisahar and along the Prithvi Highway to Kathmandu. Private transfer to your hotel. (8-9 hours' drive)" },
    { day: 16, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Manaslu',
  },
  'upper-dolpo-trek': {
    title: 'Upper Dolpo Trek',
    duration: '26 Days',
    difficulty: 'Very Strenuous / Expedition-Style',
    elevation: '5,151 m / 16,899 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking/Camping',
    accommodation: 'Hotel, Teahouse & Alpine Tented Camps',
    heroImages: ['/assets/images/phoksundo-lake.jpg', '/assets/images/shey-gompa.jpg', '/assets/images/upper-dolpo.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Upper Dolpo Trek', href: '#' },
    ],
    description: `The Upper Dolpo Trek is a demanding high-altitude journey that requires careful preparation, primarily focused on altitude acclimatization and physical stamina. The trek typically begins after scenic flights to Nepalgunj and then Juphal, the gateway to the remote Dolpa region in Mid-Western Nepal.`,
    highlights: [
      'The Mystical Shey Phoksundo Lake',
      'The Legendary Shey Gompa (4,126 m)',
      'The Triple 5,000-Meter Pass Challenge (Kang La and Jeng La)',
      'The Living Bon Buddhist Culture',
      'Nepal\'s Largest National Park Protected Sanctuary',
      'The High-Altitude Desert of Dho Tarap (3,940 m)',
      'The Trans-Himalayan Rain Shadow',
    ],
    overview: [
    "The Upper Dolpo Trek is a demanding high-altitude journey that requires careful preparation, primarily focused on altitude acclimatization and physical stamina. The trek typically begins after scenic flights to Nepalgunj and then Juphal, the gateway to the remote Dolpa region in Mid-Western Nepal. From here, the trail leads through the Phoksundo National Park toward the mystical Shey Gompa (4,343 m) and over several high passes, including the challenging Kang La (5,360 m) and Saldang La (5,200 m). The standard itinerary spans about 22 to 24 days to allow for essential rest and acclimatization days, which are crucial for your body to adjust to the progressively thinner air of the Tibetan plateau-like landscape. Never rush your ascent, as Acute Mountain Sickness (AMS) is a significant risk in this isolated terrain; symptoms like headaches or dizziness must be taken seriously, and immediate communication with your guide is required for a safe descent if symptoms worsen.",

    "Success on the Upper Dolpo trek relies heavily on physical and logistical preparation due to its extreme isolation. You should begin a rigorous training regimen focusing on cardiovascular endurance and leg strength 2-3 months before your trip, as the trek involves navigating steep, rugged terrain and long daily walks at high elevations. Invest in high-quality, broken-in trekking boots and layered, moisture-wicking clothing, including a warm down jacket, as the region experiences cold, dry winds and basic camping conditions. Logistically, this trek requires a special Restricted Area Permit and a Phoksundo National Park Permit, along with a mandatory licensed guide and a minimum group size of two. Hiring a full-support team including porters and a kitchen crew is essential, as this is a camping trek in a region with very little tourist infrastructure. The best seasons to trek are during the pre-monsoon (April-May) and post-monsoon (September-November), though Dolpo is a rain-shadow area, making it one of the few places viable for trekking even during the summer months.",

    "The 24-day Upper Dolpo Trek is an iconic journey of challenge and discovery in Nepal's hidden \"Land of the Snow Leopard.\" The adventure begins with the flight to Juphal and quickly enters a world of dramatic landscapes, starting with the deep turquoise waters of Phoksundo Lake—the deepest lake in Nepal. Over three weeks, the trail winds through steep canyons, arid mountain deserts reminiscent of Tibet, and traditional Bon-Po and Buddhist villages like Saldang and Dho Tarap. This itinerary is deliberately packed with essential rest days, ensuring safety while providing spectacular views of the Crystal Mountain and the Kanjirowa Himalayan range as you ascend into the high wilderness.",

    "The trek culminates in a spiritual and visual highlight at Shey Gompa, an 800-year-old monastery sitting at the base of the sacred Crystal Mountain. This vantage point offers some of the most spectacular and humbling sights in the Trans-Himalayas, where ancient Tibetan culture remains untouched by time. This entire experience is more than reaching high passes; it's a deep connection with an untouched wilderness, diverse ecosystems teeming with rare wildlife like the blue sheep and snow leopard, and the rich, resilient cultures of the Upper Dolpo people. The final leg is a reflective descent through the Tarap Valley and a return flight from Juphal to Kathmandu, completing this immensely rewarding and truly off-the-beaten-path Himalayan odyssey.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Fly to Nepalgunj (150 m)", description: "Afternoon domestic flight from Kathmandu to the hot, sub-tropical lowlands of Nepalgunj near the Indian border. Transfer to your hotel. (1 hour flight)" },
    { day: 4, title: "Spare Day in Nepalgunj", description: "A contingency day in Nepalgunj required to finalize logistics and ensure connectivity for the weather-dependent early morning flight to the mountains." },
    { day: 5, title: "Fly to Juphal & Trek to Dunai (2,140 m)", description: "Early morning mountain flight to the hillside airstrip at Juphal. Meet your trekking crew and begin a gentle walk along the Bheri River to Dunai. (35 mins flight, 3 hours trek)" },
    { day: 6, title: "Trek to Ankhe (2,660 m)", description: "Cross the suspension bridge over the Bheri River, enter the Shey Phoksundo National Park, and follow the river trail through forested landscapes to Ankhe. (5-6 hours)" },
    { day: 7, title: "Trek to Renje (3,010 m)", description: "Trek along an undulating trail that climbs high above the river gorge on paths carved out of the rock faces before descending back down to the small settlement of Renje. (5-6 hours)" },
    { day: 8, title: "Trek to Phoksundo Lake (3,600 m)", description: "Climb a high ridge offering your first breathtaking view of Phoksundo Lake and its massive waterfall. Descend through birch forests to Ringmo village on the lakeshore. (4-5 hours)" },
    { day: 9, title: "Trek to Phoksundo Khola (3,630 m)", description: "Traverse the famous, narrow cliff trail precariously carved into the rock walls directly above the lake, descending to the marshy northern delta of the Phoksundo River. (5-6 hours)" },
    { day: 10, title: "Trek to Phoksundo Bhanjyang (4,400 m)", description: "Walk through a scenic glacial valley filled with alpine scrub before climbing steadily up a steep, rocky ravine to reach the high canyon base camp. (6-7 hours)" },
    { day: 11, title: "Cross Kang La Pass (5,350 m) & Trek to Shey Gompa (4,343 m)", description: "Pass 1: A long, challenging pre-dawn climb up to the crest of Kang La Pass. Enjoy sweeping views of the Tibetan plateau before descending to the historic 11th-century Shey Gompa. (7-8 hours)" },
    { day: 12, title: "Rest & Exploration Day at Shey Gompa", description: "A rest day exploring the spiritual heart of Upper Dolpo. Visit the historic Shey Gompa monastery and learn about the sacred, nearby Crystal Mountain." },
    { day: 13, title: "Trek to Namduna Gaun via Saldang La Pass (4,360 m)", description: "Pass 2: Leave Shey and ascend a dry, barren canyon to the summit of Saldang La Pass. Descend onto the northern slopes and trek to the small cliffside settlement of Namduna Gaun. (6-7 hours)" },
    { day: 14, title: "Trek to Saldang (3,770 m)", description: "Trek along terraced hillsides and make a final steep descent into the wide, arid valley of the Naba Khola to reach Saldang, the largest village in Upper Dolpo. (4-5 hours)" },
    { day: 15, title: "Trek to Sibu (4,180 m)", description: "Follow the river valley trail down through terraced barley fields and small stupas, passing through Namdo village to reach the farming settlement of Sibu. (5-6 hours)" },
    { day: 16, title: "Trek to the Foot of the Jeng La Pass (4,430 m)", description: "Follow the streamline deeper into the rugged valley, climbing steadily past high yak pastures to reach the high camp at the base of the Jeng La Pass. (4-5 hours)" },
    { day: 17, title: "Cross Jeng La Pass (5,110 m) & Trek to Tokyu Gaon (4,200 m)", description: "Pass 3: Cross the high Jeng La Pass for expansive views of the Dhaulagiri massif. Descend a long trail into the beautiful, wide Tarap Valley to reach Tokyu Gaon. (6-7 hours)" },
    { day: 18, title: "Trek to Dho Tarap (4,040 m)", description: "A short, pleasant walk down the wide valley floor past ancient monasteries and stone-walled crop fields to Dho Tarap, a significant cultural center of the region. (2 hours)" },
    { day: 19, title: "Trek to Serkam (3,620 m)", description: "Descend out of the high valley into a narrow, dramatic river gorge. Cross several suspension bridges and navigate cliffside paths down to the riverside campsite of Serkam. (6-7 hours)" },
    { day: 20, title: "Trek to Khani Gaon (3,150 m)", description: "Continue tracking the Tarap Khola down through the deep, rocky canyon, crossing back and forth over the raging river on bridges to reach Khani Gaon. (5-6 hours)" },
    { day: 21, title: "Trek to Tarakot (2,540 m)", description: "Trek past isolated fields and deep gorges, emerging into the wider Barbung Khola valley to reach the historic, fort-like village of Tarakot. (4-5 hours)" },
    { day: 22, title: "Trek to Dunai (2,052 m)", description: "Follow the wide riverside trail along the Bheri River, completing a mostly flat and pleasant walk back to the district headquarters at Dunai. (5-6 hours)" },
    { day: 23, title: "Trek to Juphal (2,475 m)", description: "Complete the final leg of the trek, ascending the trail back up the hillside to the airstrip settlement of Juphal for a farewell celebration with your crew. (3 hours)" },
    { day: 24, title: "Spare Day in Juphal", description: "A mandatory contingency day built into the schedule in case high winds or cloud cover delay flights out of the mountain airstrip." },
    { day: 25, title: "Fly to Kathmandu via Nepalgunj", description: "Early morning short mountain flight from Juphal to Nepalgunj, followed by a connecting domestic flight back to Kathmandu. Private transfer to your hotel." },
    { day: 26, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Upper Dolpo',
  },
  'annapurna-circuit-tilicho-lake-trek': {
    title: 'Annapurna Circuit with Tilicho Lake Trek',
    duration: '18 Days',
    difficulty: 'Strenuous / Challenging',
    elevation: '5,416 m / 17,769 ft',
    season: 'Spring (March to May) & Autumn (Late September to November)',
    groupSize: '2 or more',
    activity: 'Trekking/Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/tilicho-lake.jpg', '/assets/images/annapurna-circuit-tilicho.jpg', '/assets/images/thorong-la-annapurna.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Annapurna Circuit with Tilicho Lake', href: '#' },
    ],
    description: `The Annapurna Circuit with Tilicho Lake is a legendary high-altitude journey that demands peak physical conditioning and careful attention to mountain safety. The expedition begins with a scenic drive to Dharapani (1,860m) and gradually ascends through the Marsyangdi River valley toward the trek's dual highlights: the sapphire waters of Tilicho Lake (4,919m) and the formidable Thorong La Pass (5,416m).`,
    highlights: [
      'The Ultimate Circuit Extension (Tilicho Lake at 4,919 m)',
      'The Surreal Turquoise Jewel',
      'The Thorong La Pass Conquest (5,416 m)',
      'The Technical Landslide Traverse',
      'Five Climate Zones in One Journey',
      'The Upper Trail Heritage of Ngawal',
      'The Sacred Sanctuary of Muktinath (3,760 m)',
      'The Deepest Gorge in the World',
    ],
    overview: [
    "The Annapurna Circuit with Tilicho Lake is a legendary high-altitude journey that demands peak physical conditioning and careful attention to mountain safety. The expedition begins with a scenic drive to Dharapani (1,860m) and gradually ascends through the Marsyangdi River valley toward the trek's dual highlights: the sapphire waters of Tilicho Lake (4,919m) and the formidable Thorong La Pass (5,416m). A standard 16-to-18-day itinerary is crucial to ensure proper acclimatization, with strategic rest and \"side-trip\" days in the high-altitude hub of Manang to allow the body to adapt to the significantly thinning air.",

    "Success on this demanding route depends on rigorous preparation, focusing on cardiovascular endurance and leg strength at least 3 months before arrival. The terrain is exceptionally diverse, requiring high-quality, broken-in trekking boots and a professional layering system to manage everything from the subtropical heat of the lower valleys to the freezing, high-velocity winds at the pass. Logistically, this trek requires the ACAP permit and TIMS card. The ideal windows for trekking are the stable post-monsoon months (October-November) and the vibrant pre-monsoon season (March-May), and comprehensive travel insurance covering helicopter evacuation is an absolute necessity.",

    "The 18-day Annapurna Circuit with Tilicho Lake is a world-class odyssey that offers a dramatic detour from the traditional trekking route. Starting in the lush green foothills, the trail winds through Manangi villages where ancient Buddhist traditions and prayer flags dominate the landscape. This itinerary is specifically designed to showcase the transition from the emerald forests of the lower Marsyangdi to the stark, rain-shadow landscapes of the Manang district, keeping the massive peaks of Annapurna II, III, and IV as your constant, towering companions.",

    "The trek reaches its most breathtaking climax at the shores of Tilicho Lake (4,919m), one of the highest lakes in the world, before pushing toward the final challenge of the Thorong La Pass (5,416m). From the summit of the pass, trekkers are rewarded with an immense panorama of the Dhaulagiri and Annapurna massifs. This experience is more than a physical feat; it is a profound crossing of the Great Himalayan Range, concluding with a reflective descent into the sacred valley of Muktinath and the wind-swept Kali Gandaki, balancing the triumph of the high mountains with deep spiritual discovery.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Drive to Dharapani (1,860 m)", description: "Long scenic drive from Kathmandu along the Trishuli and Marsyangdi rivers, passing Besisahar to reach Dharapani. (8-9 hours' drive)" },
    { day: 4, title: "Trek to Chame (2,670 m)", description: "Trek through pine forests and narrow valleys, passing steep cliffs and traditional stone villages to reach Chame, the district headquarters of Manang. (5-6 hours)" },
    { day: 5, title: "Trek to Pisang (3,200 m)", description: "Walk through deep forests and a dramatic narrow valley trail, passing the massive Paungda Danda rock face to reach Pisang village. (5-6 hours)" },
    { day: 6, title: "Trek to Manang (3,540 m)", description: "Trek via the scenic upper route through Ghyaru and Ngawal for exceptional views of Annapurna II and III, descending into the wide Manang valley. (6-7 hours)" },
    { day: 7, title: "Manang Rest Day (Acclimatization)", description: "Short morning acclimatization hike to Gangapurna Lake or Chongkor Viewpoint. Spend the afternoon resting or exploring the historic Manang village." },
    { day: 8, title: "Trek to Siri Kharka (4,060 m)", description: "Leave the main Annapurna Circuit trail and head west, passing through the old, semi-abandoned village of Khangsar to reach Siri Kharka. (4-5 hours)" },
    { day: 9, title: "Trek to Tilicho Base Camp (4,150 m)", description: "Follow a high, dramatic trail across a steep scree and landslide-prone slope on a narrow path carved into the mountain to reach Tilicho Base Camp. (3-4 hours)" },
    { day: 10, title: "Hike to Tilicho Lake (4,919 m) & Return to Siri Kharka (4,060 m)", description: "Early morning steep, challenging climb up to Tilicho Lake, one of the highest lakes in the world. Enjoy the views of Tilicho Peak before returning to Base Camp for lunch and continue to Siri Kharka. (7-8 hours)" },
    { day: 11, title: "Trek to Yak Kharka (4,050 m)", description: "Descend past Khangsar village and follow an alpine trail that bypasses Manang, climbing steadily up through juniper pastures to rejoin the circuit route at Yak Kharka. (5-6 hours)" },
    { day: 12, title: "Trek to Thorong Phedi (4,525 m)", description: "A steady, high-altitude climb along the riverbank before crossing a suspension bridge. Follow an undulating trail across a landslide area to reach Thorong Phedi base camp. (3-4 hours)" },
    { day: 13, title: "Cross Thorong La (5,416 m) & Trek to Muktinath (3,760 m)", description: "Early pre-dawn starts with the long, steep climb to the summit of Thorong La Pass. Descend a steep, rocky trail down to the sacred pilgrimage site of Muktinath. (8-9 hours)" },
    { day: 14, title: "Trek to Jomsom (2,720 m)", description: "Trek down through the arid, wind-blown landscapes of the Kali Gandaki valley, passing the ancient fortress village of Kagbeni to reach Jomsom. (5-6 hours)" },
    { day: 15, title: "Fly to Pokhara (822 m)", description: "Early morning mountain flight from Jomsom to Pokhara (25 mins). Private transfer to your lakeside hotel. Afternoon free to relax by Phewa Lake." },
    { day: 16, title: "Pokhara Exploration & Rest", description: "A free day in Pokhara for relaxation or optional sightseeing, such as boating on Phewa Lake or visiting Davis Falls and the Peace Pagoda." },
    { day: 17, title: "Fly to Kathmandu", description: "Morning flight from Pokhara back to Kathmandu. Private transfer to your hotel and a free afternoon for relaxation or last-minute shopping in Thamel." },
    { day: 18, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Tilicho Lake',
  },
  'everest-high-passes-island-peak': {
    title: 'Everest High Passes and Island Peak Expedition',
    duration: '24 Days',
    difficulty: 'Technical challenge',
    elevation: '6,189 m / 20,305 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'High Altitude Trekking / Expedition',
    accommodation: 'Tea House / Hotel / Alpine Tented Camps',
    heroImages: ['/assets/images/island-peak.jpg', '/assets/images/kongma-la-2.jpg', '/assets/images/everest-high-passes.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Everest High Passes and Island Peak', href: '#' },
    ],
    description: `The Everest High Passes and Island Peak expedition is the ultimate alpine challenge in the Khumbu region, combining a massive high-altitude circuit with a technical mountaineering summit. The journey targets the completion of the legendary Three High Passes - Renjo La (5,360m), Cho La (5,420m), and Kongma La (5,535m) - alongside an excursion to Everest Base Camp (5,364m).`,
    highlights: [
      'The Ultimate High-Altitude Epic of 6,189m',
      'Three high passes back-to-back (Renjo La, Cho La, and Kongma La)',
      'The Island Peak Summit Triumph (6,189 m)',
      'The Essential 5,000-Meter Vantage Points (Gokyo Ri and Kala Patthar)',
      'Turquoise waters of Gokyo Lakes beneath Cho Oyu (8,188 m)',
      'Ngozumpa Glacier (largest in Himalayas) and Khumbu Glacier',
    ],
    overview: [
    "The Everest High Passes and Island Peak expedition is the ultimate alpine challenge in the Khumbu region, combining a massive high-altitude circuit with a technical mountaineering summit. The journey targets the completion of the legendary Three High Passes—Renjo La (5,360m), Cho La (5,420m), and Kongma La (5,535m)—alongside an excursion to Everest Base Camp (5,364m). This brutal circuit serves as a built-in, elite acclimatization profile for the grand finale: a technical push to the summit of Island Peak (Imja Tse) at 6,189m. A comprehensive 24-day itinerary is mandatory to safely manage this relentless workload, allowing for necessary weather cushions, rest days, and basic mountaineering training at high camp.",

    "Success on this extreme 24-day itinerary demands exceptional physical preparation and mental toughness, with a training regimen focused on weighted uphill endurance initiated at least 4 to 6 months before departure. The terrain is extraordinarily demanding and varied, crossing shifting glacial moraines like the Ngozumpa Glacier, steep ice-glazed passes, and the vertical headwalls of Island Peak that require crampons, an ice axe, and fixed-rope jumar ascents. Logistically, this multi-activity expedition requires a complex permit portfolio, including the Sagarmatha National Park permit, the Khumbu Pasang Lhamu local permit, and an official NMA peak climbing permit. The primary operational windows are the highly stable autumn months (October–November) and the crisp pre-monsoon spring (March–May), and premium travel insurance explicitly covering technical mountaineering and helicopter evacuation up to 6,500 meters is a non-negotiable prerequisite.",

    "Far removed from the standard, crowded highway of the main EBC trail, this 24-day grand circuit takes a broad, clockwise loop that explores the hidden corners of the Sherpa heartland. Starting with a flight to Lukla, the route branches early toward the remote, pristine Bhote Koshi Valley and the quiet village of Thame before conquering the first pass. This meticulous design ensures that trekkers spend nearly two weeks consistently sleeping and performing above 4,000 meters. The reward is a grand-scale visual feast that features the four highest peaks in the region—Everest, Lhotse, Makalu, and Cho Oyu—seen from every conceivable angle, alongside the turquoise alpine waters of the Gokyo Lakes and the imposing face of Ama Dablam.",

    "The expedition reaches its grand physical and spiritual climax on the knife-edge summit ridge of Island Peak (6,189m), offering a surreal, front-row view of Lhotse's massive south face. Accompanied by a dedicated climbing Sherpa, the transition from basic teahouse trekking to full tented camping at Island Peak Base Camp marks the final shift into true mountaineering. Following a triumphant summit push, the journey features a reflective, rapid descent through the vibrant cultural centers of Pangboche and Tengboche Monastery. This concludes a world-class Himalayan epic that balances the raw accomplishment of crossing three giant passes with the undisputed glory of standing atop a 6,000-meter peak.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon comprehensive trek and climb briefing, climbing permit check, gear fitting, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Fly to Lukla & Trek to Phakding (2,610 m)", description: "Early morning flight from Kathmandu (or drive to Manthali/Ramechhap for a 20-minute flight) to Lukla. Meet your crew and begin trekking downhill and along flat trails to Phakding. (3-4 hours)" },
    { day: 4, title: "Trek to Namche Bazaar (3,440 m)", description: "Trek through alpine pine forests and cross several high suspension bridges. Complete the final, steep uphill climb to reach the Sherpa capital of Namche. (5-6 hours)" },
    { day: 5, title: "Namche Rest Day (Acclimatization)", description: "Short morning acclimatization hike to the Hotel Everest View (3,880 m) for stunning mountain panoramas. Return to Namche for an afternoon exploring the local market. (4-5 hours)" },
    { day: 6, title: "Trek to Phortse Tenga (3,680 m)", description: "Leave the busy main trail and descend through rhododendron and pine forests toward the river, climbing slightly to reach the quiet settlement of Phortse Tenga. (5-6 hours)" },
    { day: 7, title: "Trek to Machhermo (4,470 m)", description: "Climb steadily up the scenic Dudh Koshi Valley, passing through high summer pastures and small hamlets while enjoying views of Cho Oyu to reach Machhermo. (5-6 hours)" },
    { day: 8, title: "Trek to Gokyo Lakes (4,800 m)", description: "Ascend past the terminal moraine of the Ngozumpa Glacier. Walk alongside the pristine first and second lakes before reaching your lodge at the third Gokyo Lake. (5-6 hours)" },
    { day: 9, title: "Hike Gokyo Ri (5,483 m) & Rest", description: "Early morning steep climb up to the summit of Gokyo Ri for sweeping panoramic views of Everest, Lhotse, Makalu, and Cho Oyu. Descend to the lake for a restful afternoon. (5-6 hours)" },
    { day: 10, title: "Trek to Thangnak (4,500 m)", description: "A shorter but scenic day traversing across the undulating, rocky moraine of the massive Ngozumpa Glacier to the foot of the pass at Thangnak. (4-5 hours)" },
    { day: 11, title: "Cross Cho La Pass (5,368 m) & Trek to Dzongla (4,830 m)", description: "Pass 1: Early pre-dawn start to scramble up steep boulder fields and cross the icy glacier plateau of Cho La Pass. Descend a steep, rocky trail to the outpost of Dzongla. (7-8 hours)" },
    { day: 12, title: "Trek to Lobuche (4,910 m)", description: "Follow an easy panoramic trail along the hillside above Cholatse Lake, joining the classic Everest route to reach the small guesthouse settlement of Lobuche. (4-5 hours)" },
    { day: 13, title: "Hike Kala Patthar (5,555 m) & Return to Gorak Shep (5,164 m)", description: "Trek along the rocky moraine to Gorak Shep. In the afternoon, complete a challenging climb up Kala Patthar for sunset views over Mount Everest before returning to Gorak Shep. (7-8 hours)" },
    { day: 14, title: "Trek to Everest Base Camp (5,364 m) & Return to Lobuche (4,910 m)", description: "Trek across the undulating glacier trail to reach Everest Base Camp. Explore the historic site at the foot of the Khumbu Icefall, then turn back and retrace your steps down to Lobuche. (8-9 hours)" },
    { day: 15, title: "Cross Kongma La Pass (5,535 m) & Trek to Chukhung (4,710 m)", description: "Pass 2: An intense, pre-dawn climb up the high, rocky trail to the crest of Kongma La Pass. Descend steep scree slopes and traverse the valley floor to reach Chukhung. (8-9 hours)" },
    { day: 16, title: "Trek to Island Peak Base Camp (5,240 m)", description: "Follow a steady trail along the lateral moraine of the Imja Glacier, walking beneath the massive southern face of Lhotse to establish camp at Island Peak Base Camp. (4-5 hours)" },
    { day: 17, title: "Island Peak Base Camp Rest Day (Acclimatization)", description: "A mandatory rest and preparation day. Review climbing safety protocols, practice fixed-rope techniques, and complete a final check of harnesses, ascenders, and crampons." },
    { day: 18, title: "Summit Island Peak (6,187 m) & Return to Chukhung (4,710 m)", description: "Summit Day: Midnight start to climb the steep rock gullies, cross the snow-covered glacier using crampons, and ascend the fixed-line headwall to the summit peak. Descend to base camp and continue to Chukhung. (9-10 hours)" },
    { day: 19, title: "Climbing Weather Contingency Day", description: "A built-in reserve day to protect the itinerary and provide a secondary summit window in case of high winds or bad weather on the mountain." },
    { day: 20, title: "Trek to Tengboche (3,860 m)", description: "Descend through the wide Imja Valley, passing through the village of Pangboche and walking down to the historic monastery settlement of Tengboche. (6-7 hours)" },
    { day: 21, title: "Trek to Namche Bazaar (3,440 m) via Khumjung", description: "Cross the river and ascend to the traditional village of Khumjung to visit the local monastery, then complete a pleasant forest traverse back to Namche Bazaar. (5-6 hours)" },
    { day: 22, title: "Trek to Lukla (2,840 m)", description: "Descent the long \"Namche Hill\" and follow the Dudh Koshi River valley on a mix of flat and uphill trails back into Lukla for a farewell celebration with your crew. (6-7 hours)" },
    { day: 23, title: "Fly to Kathmandu", description: "Morning flight from Lukla back to Kathmandu (or via flight to Manthali/Ramechhap followed by a private drive). Private transfer to your hotel and a free afternoon." },
    { day: 24, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Island Peak',
  },
  'manaslu-tsum-valley-trek': {
    title: 'Manaslu & Tsum Valley Trek',
    duration: '22 Days',
    difficulty: 'Strenuous / challenge',
    elevation: '5,160 m / 16,929 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking / Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/manaslu-tsum.jpg', '/assets/images/mu-gompa-tsum.jpg', '/assets/images/larkya-la.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Manaslu & Tsum Valley Trek', href: '#' },
    ],
    description: `The Manaslu Tsum Valley Trek is an elite, multi-week wilderness odyssey that masterfully combines a hidden Tibetan Buddhist sanctuary with one of Nepal's ultimate high-altitude mountain circuits. The adventure begins with a rugged drive from Kathmandu to Machha Khola (900m) and shadows the deep gorges of the Budhi Gandaki River before branching into the isolated, culturally pristine Tsum Valley.`,
    highlights: [
      'The Ultimate Off-the-Beaten-Path Fusion',
      'The Mystical Sanctuary of Tsum Valley',
      'The Sacred Mu Gompa Exploration (3,700 m)',
      'The Larkya La Pass Conquest (5,160 m)',
      'Wide panoramas of Mt. Manaslu (8,163 m), Himlung Himal, and Kang Guru',
      'The Manaslu Base Camp Excursion (4,895 m)',
      'Tracking past the deep turquoise shores of Birendra Glacial Lake',
      'Stunning Architectural Heritage of Lho',
    ],
    overview: [
    "The Manaslu Tsum Valley Trek is an elite, multi-week wilderness odyssey that masterfully combines a hidden Tibetan Buddhist sanctuary with one of Nepal's ultimate high-altitude mountain circuits. The adventure begins with a rugged drive from Kathmandu to Machha Khola (900m) and shadows the deep gorges of the Budhi Gandaki River before branching into the isolated, culturally pristine Tsum Valley. A comprehensive 22-day itinerary is structurally essential to safely accommodate the immense geographical scale of this trek, providing the mandatory acclimatization runway needed to explore the upper valley outposts of Mu Gompa (3,700m) before returning to the main loop to conquer the formidable Larkya La Pass at 5,160 meters.",

    "Success on this grueling 22-day circuit depends on exceptional physical preparation, requiring a rigorous training regimen focused on cardiovascular capacity and lower-body endurance initiated at least 4 months before departure. The terrain is highly demanding and deeply varied, transitioning from humid, subtropical pine forests and narrow rock-cut cliffs to exposed, windswept alpine moraines and ice-glazed pass trails. Trekkers spend multiple consecutive days performing above 4,000 meters, requiring high-quality, broken-in trekking boots and a versatile heavyweight layering system to handle temperatures that routinely drop well below freezing. Logistically, this region relies on a developing network of remote, basic local teahouses, and specialized travel insurance that explicitly guarantees emergency helicopter evacuation up to 6,000 meters is a mandatory safety prerequisite.",

    "Because the trail navigates sensitive northern border zones adjacent to Tibet, the legal and regulatory framework is strictly enforced. Solo trekking is legally prohibited; to obtain the necessary paperwork, you must travel with a minimum group of two trekkers accompanied by a licensed government guide through an authorized trekking agency. A complete 22-day portfolio requires a complex set of credentials: the Manaslu Restricted Area Permit (RAP), the Tsum Valley Restricted Area Permit, the Manaslu Conservation Area Project (MCAP) permit, the Annapurna Conservation Area Project (ACAP) permit (required for the exit route through Dharapani), and the local Chumnubri municipality fee. The primary operational windows are the highly stable autumn months (October-November) for crisp, cloudless skies and the clear pre-monsoon spring (March-May).",

    "The expedition reaches its profound cultural and physical climaxes within the sacred, ancient villages of the Tsum Valley—where the traditional Hyolmo and Shiar communities practice centuries-old Buddhist traditions, open-air sky burials, and protect active, cliff-side monasteries like Rachen Gompa and Mu Gompa. Leaving this \"hidden valley,\" the itinerary rejoins the classic circuit at Lokpa, ascending into the towering high-alpine hubs of Lho and Samagaon. Here, trekkers are rewarded with monumental, front-row views of the dual-peaked Mt. Manaslu (8,163m)—the world's eighth-highest mountain. The journey reaches its physical zenith on the grueling, pre-dawn crossing over the windswept crest of the Larkya La Pass (5,160m), offering an unparalleled panorama of Himlung Himal and Kang Guru, before plunging into a steep, knee-jarring descent to the emerald forests of Bimthang and exiting via the Annapurna trail at Dharapani.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon comprehensive trek briefing, special restricted area permit processing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Drive to Machha Khola (869 m)", description: "Depart Kathmandu early in a private tourist vehicle for a long, scenic drive passing through Arughat and Soti Khola along the banks of the Budhi Gandaki River. (8-10 hours' drive)" },
    { day: 4, title: "Trek to Jagat (1,340 m)", description: "Trek along the narrow river valley, crossing suspension bridges, passing natural hot springs at Tatopani, and climbing rocky ridges to reach the stone-paved entry checkpoint village of Jagat. (6-7 hours)" },
    { day: 5, title: "Trek to Lokpa (2,240 m)", description: "Ascend to Salleri and Philim, cross a long suspension bridge, and branch off the main Manaslu trail into dense, quiet forests to reach Lokpa, the gateway to the hidden Tsum Valley. (6-7 hours)" },
    { day: 6, title: "Trek to Chumling (2,386 m)", description: "Descend into the scenic Lungwa River valley and tackle a steady, steep uphill climb through dense pine and rhododendron forests to reach lower Tsum Valley at Chumling. (5-6 hours)" },
    { day: 7, title: "Trek to Chhokang Paro (3,031 m)", description: "Cross a suspension bridge and climb steadily past scenic villages like Ranijam, entering the upper Tsum region where the valley opens into beautiful fields and stone hamlets at Chhokang Paro. (5-6 hours)" },
    { day: 8, title: "Trek to Nile (3,361 m)", description: "Trek past ancient Buddhist monasteries, extensive mani walls, and traditional stone villages like Lamagaon and Burji, crossing the Shiar Khola to reach Nile. (5-6 hours)" },
    { day: 9, title: "Excursion to Mu Gompa (3,700 m) & Return to Nile", description: "Climb up through dry alpine landscapes to visit Mu Gompa, the highest and oldest monastery in the Tsum Valley near the Tibetan border, before retracing your steps back to Nile. (5-6 hours round trip)" },
    { day: 10, title: "Trek to Chumling (2,386 m)", description: "Begin descending out of the upper valley, tracing your steps back down past Chhokang Paro and through beautiful alpine landscapes to return to Chumling. (6-7 hours)" },
    { day: 11, title: "Trek to Deng (1,860 m)", description: "Trek down through the low forests to exit the Tsum Valley, rejoining the main Manaslu Circuit trail and continuing along the Budhi Gandaki River to reach Deng. (5-6 hours)" },
    { day: 12, title: "Trek to Namrung (2,630 m)", description: "Cross the river multiple times, climbing steadily through rhododendron, pine, and oak forests before completing a final steep switchback climb into the culturally Tibetan village of Namrung. (5-6 hours)" },
    { day: 13, title: "Trek to Lho (3,180 m)", description: "Trek through high alpine landscapes and local farming villages, passing extensive mani walls to reach Lho village, home to a prominent hilltop monastery and grand views of Mount Manaslu. (6-7 hours)" },
    { day: 14, title: "Trek to Samagaon (3,520 m)", description: "Pass through the village of Shyala, walking alongside the glacier moraine with panoramic views of Peak 29 and Himal Chuli to arrive at Samagaon, the cultural hub of the region. (3-4 hours)" },
    { day: 15, title: "Samagaon Rest Day (Acclimatization)", description: "A crucial rest day to adapt to the altitude. Take an optional acclimatization hike to the serene Birendra Lake or up toward Manaslu Base Camp (4,895 m), then explore the historic village. (7-8 hours total)" },
    { day: 16, title: "Trek to Samdo (3,875 m)", description: "Descend to the Budhi Gandaki River and follow it upward as the valley opens. Complete a gentle, high-altitude climb through juniper fields to reach the remote Tibetan refugee settlement of Samdo. (3-4 hours)" },
    { day: 17, title: "Trek to Dharmasala (4,460 m)", description: "Cross a wooden bridge over the river and climb steadily along the lateral moraine of the Larkya Glacier, arriving at the high-altitude stone shelter settlement of Dharmasala to rest early. (4-5 hours)" },
    { day: 18, title: "Cross Larkya La Pass (5,160 m) & Trek to Bimthang (3,590 m)", description: "The Pass: Early pre-dawn starts for the long climb to the summit of Larkya La Pass. Enjoy expansive views of Annapurna II and Kang Guru before a steep, demanding descent over loose scree and moraine to Bimthang. (8-9 hours)" },
    { day: 19, title: "Trek to Goa (2,515 m)", description: "Descend through alpine pastures and pristine rhododendron, pine, and oak forests alongside the Dudh Khola river valley to reach the small forest clearing settlement of Goa. (4-5 hours)" },
    { day: 20, title: "Trek to Dharapani (1,963 m)", description: "Complete the final short leg of the trek, descending through rural farmlands and crossing the Marsyangdi River to reach the road hub of Dharapani. (3-4 hours)" },
    { day: 21, title: "Drive to Kathmandu (1,400 m)", description: "Board your private tourist vehicle for the long drive from Dharapani back down through Besisahar and along the Prithvi Highway to Kathmandu. Private transfer to your hotel. (9-10 hours' drive)" },
    { day: 22, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    ctaText: 'Manaslu Tsum',
  },
  'upper-mustang-trek-drive-trek': {
    title: 'Upper Mustang Trek (Drive & Trek)',
    duration: '17 Days',
    difficulty: 'Strenuous/Moderate',
    elevation: '3,880 m / 12,730 ft',
    season: 'Feb-Jun, Sep-Nov',
    groupSize: '2 or more',
    activity: 'Trekking/Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/lo-manthang.jpg', '/assets/images/upper-mustang.jpg', '/assets/images/kagbeni.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Upper Mustang Trek', href: '#' },
    ],
    description: `The Upper Mustang Trek is a unique 12- to 18-day expedition into Nepal's ancient, high-altitude Trans-Himalayan region, often called the "Last Forbidden Kingdom." This route traverses a stark, desert-like landscape in the rain shadow of the Annapurna and Dhaulagiri massifs, following the Kali Gandaki River.`,
    highlights: [
      'The Mystical Walled Capital of Lo Manthang',
      'The Hidden "Sky Caves" of Chhoser',
      'A "Virtual Tibet" in the Rain Shadow',
      'Centuries-Old Monasteries & Ghar Gompa',
      'The Ancient Salt Trade Route',
      'The Gateway Village of Kagbeni',
      'The Longest Mani Wall at Ghami',
      'Trans-Himalayan Peak Vistas',
    ],
     overview: [
    "The Upper Mustang Trek is a unique 12-to-18-day expedition into Nepal's ancient, high-altitude Trans-Himalayan region, often called the \"Last Forbidden Kingdom.\" This route traverses a stark, desert-like landscape in the rain shadow of the Annapurna and Dhaulagiri massifs, following the Kali Gandaki River. The primary cultural highlight is reaching Lo Manthang, the historic walled capital of the former Kingdom of Lo, where Tibetan Buddhist culture is deeply preserved. Altitudes typically culminate around 3,840 meters at Lo Manthang, with some passes reaching over 4,000 meters, demanding careful acclimatization.",

    "The trek is generally rated as moderate to challenging, requiring good cardiovascular fitness for 5 to 7 hours of walking daily over rugged and exposed terrain. Due to its status as a restricted area, strict regulations apply that trekkers must secure the expensive Restricted Area Permit and the Annapurna Conservation Area Permit (ACAP). It is mandatory to trek with a licensed guide in a minimum group of two people. The best seasons are spring (March-May), autumn (September-November), and the dry monsoon months (June-August).",

    "The Upper Mustang Trek is a profound cultural and geological immersion into the ancient, high-altitude Trans-Himalayan region, offering an experience entirely distinct from the alpine snows of the Khumbu. This demanding 14-to-18-day expedition plunges deep into the rain shadow of the Annapurna and Dhaulagiri massifs, transforming the landscape into a windswept, ochre-colored desert of spectacular sandstone cliffs and deep, eroded canyons carved by the Kali Gandaki River. The ascent is deliberately paced with stops in villages steeped in tradition, ensuring the body adjusts to elevations peaking over 4,000 meters, which is essential for safely navigating this exposed, arid environment.",

    "The true focus of this journey lies in penetrating the fortified heart of the former Kingdom of Lo and reaching Lo Manthang (3,840m). This walled capital is a rare, living medieval fortress where Tibetan Buddhist culture and ancient Bon traditions have remained profoundly preserved for centuries. The reward is an unparalleled encounter with priceless cultural heritage: exploring 600-year-old monasteries like Thubchen and Jampa Gompa, discovering the enigma of the ancient 'Sky Caves' carved into sheer cliff faces, and witnessing traditional festivals like Tiji. This trek is not a test against the highest summits, but a comprehensive, immensely rewarding personal journey through a preserved, magical realm of history and geology in the very shadow of the great Himalayas.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate you're understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Half day city tour", description: "Afternoon trek briefing & preparation. Welcome dinner in a traditional, Nepali Restaurant." },
    { day: 3, title: "Drive to Pokhara (900 m)", description: "Morning drive to Pokhara (900 m) from Kathmandu by Tourist Bus – 7 to 9 hours. Overnight at the hotel at the lakeside." },
    { day: 4, title: "Flight to Jomsom & Drive to Kagbeni (2,810 m)", description: "Early-morning Flight to Jomsom from Pokhara – 30 minutes. Drive to Kagbeni (2,810 m) – 35 to 45 minutes. Overnight at a guesthouse." },
    { day: 5, title: "Drive to Samar, Hike to Chungsi Cave, Drive to Ghami (3,520 m)", description: "Drive to Samar from Kagbeni – 2 to 3 hours. From Samar, you'll hike up to Chungsi Cave monastery – 2 to 3 hours where you can experience the tranquil Buddhist surrounding; then you'll hike up to Syangboche – 25 to 30 minutes. Then, a drive to Ghami (3,520 m) – 2 to 3 hours. Overnight at a guesthouse." },
    { day: 6, title: "Trek to Ghar Gompa & Charang (3,560 m)", description: "Trek to Ghar Gompa (lunch & Gompa exploration) & trek to Ghar Gompa to Charang (3,560 m) – 5 to 6 hours. Overnight at a guesthouse." },
    { day: 7, title: "Drive to Lo Manthang (3,810 m)", description: "Drive to Lo Manthang (3,810 m) from Charang – 2 to 3 hours. Overnight at a Guesthouse." },
    { day: 8, title: "Lo Manthang Exploration", description: "Explore Lo Manthang; the King Palace, Thupchen Gompa, Chode Gompa \"Dragkar Thegchen ling Gompa\", & Jampa Monastery. Overnight at a guesthouse." },
    { day: 9, title: "Trek to Yara (3,650 m)", description: "Trek to Yara (3,650 m) from Lo-Manthang - 6 to 7 hours. Overnight at a guesthouse." },
    { day: 10, title: "Trek to Luri Gumba & Back to Yara (3,880 m)", description: "Trek to Luri Gumba (3,880 m) & back to Yara - 6 to 7 hours. Overnight at a guesthouse." },
    { day: 11, title: "Trek to Tangye (3,340 m)", description: "Trek to Tangye (3,340 m) from Yara - 6 to 7 hours. Overnight at a guesthouse." },
    { day: 12, title: "Trek to Tetang (3,040 m)", description: "Trek to Tetang (3,040 m) from Tangye - 8 to 9 hours. Overnight at a guesthouse." },
    { day: 13, title: "Trek to Muktinath (3,760 m)", description: "Trek to Muktinath (3,760 m) from Tetang - 5 to 6 hours. Overnight at a guesthouse." },
    { day: 14, title: "Drive to Jomsom & Fly to Pokhara (900 m)", description: "Early morning drive to Jomsom for about - 1 to 2 hours & flight back to Pokhara - 30 minutes flights. Overnight at the hotel at the lakeside." },
    { day: 15, title: "Weather Contingency Day", description: "Spare day in case of Jomsom to Pokhara flight cancellation due to weather conditions. Overnight at a hotel." },
    { day: 16, title: "Drive to Kathmandu (1,400 m)", description: "Drive back from Pokhara to Kathmandu by tourist bus - 6 to 7 hours. Overnight at a hotel." },
    { day: 17, title: "Departure", description: "Transfer to International Airport in Kathmandu for Your Final Departure." }
  ],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Upper Mustang',
  },
  'dhualagiri-circuit-trek': {
    title: 'Dhualagiri Circuit Trek',
    duration: '21 Days',
    difficulty: 'Extreme / Mountaineering Grade',
    elevation: '5,360 m / 17,580 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking/Camping/Hiking',
    accommodation: 'Hotel, Guesthouse & Tented Camping',
    heroImages: ['/assets/images/dhaulagiri.jpg', '/assets/images/french-pass.jpg', '/assets/images/hidden-valley.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Dhualagiri Circuit Trek', href: '#' },
    ],
    description: `The Dhualagiri Circuit Trek is a strenuous, high-altitude expedition that stands as one of the ultimate wilderness challenges in Nepal. Encircling Mt. Dhualagiri (8,167m), the world's seventh-highest peak, this demanding loop transitions from lush, terraced foothills into a stark, fully self-sufficient glacial environment.`,
    highlights: [
      'The Ultimate High-Altitude Circuit (Mt. Dhualagiri 8,167 m)',
      'The Glacial Multi-Base Camp Journey',
      'The French Pass Triumph (5,360 m)',
      'The Desolate Hidden Valley (5,200 m)',
      'The Double-Pass Milestone',
      'The Transition to Mustang Desert',
      'Deep Foothill Cultural Tapestry',
      'Complete Wilderness Isolation',
    ],
    overview: [
    "The Dhaulagiri Circuit Trek is a strenuous, high-altitude expedition that stands as one of the ultimate wilderness challenges in Nepal. Encircling Mt. Dhaulagiri (8,167m), the world's seventh-highest peak, this demanding loop transitions from lush, terraced foothills into a stark, fully self-sufficient glacial environment. A standard 21-day itinerary is crucial to safely navigate the immense terrain, providing mandatory acclimatization days at Italian Base Camp and Dhaulagiri Base Camp before attempting the hazardous crossings into the high alpine valleys.",

    "Success on this extreme expedition requires exceptional mountaineering-level conditioning, including prior high-altitude trekking experience and comfort with basic glacier travel. The terrain is exceptionally rugged and varied, transitioning from humid, subtropical farmlands to the technical, icy slopes of the French Pass (5,360m) and Dhampus Pass (5,200m). Trekkers must be fully self-sufficient for multiple days, navigating active landslide zones, lateral moraines, and potentially deep snow, requiring high-quality, broken-in mountaineering boots, crampons, an ice axe, and a professional expedition layering system for temperatures well below freezing.",

    "Logistically, the Dhaulagiri Circuit is one of Nepal's most remote and least-commercialized treks, operating almost entirely as a tented camping expedition with a full support crew of guides, cooks, and porters. The trek does not require a restricted area permit, but it does mandate the Annapurna Conservation Area Permit (ACAP) and TIMS card. The ideal operational windows are limited to the very stable post-monsoon autumn (October-November) when the high passes are still clear of deep snow, and the pre-monsoon spring (March-May). Given the extreme isolation and lack of helicopter landing zones on the glacier, premium travel insurance covering emergency high-altitude evacuation is an absolute non-negotiable requirement.",

    "The expedition reaches its dramatic physical and visual climaxes deep within the frozen amphitheater of Dhaulagiri Base Camp and on the windswept crests of French Pass and Dhampus Pass. From the 5,360-meter summit of French Pass, trekkers are rewarded with an immense, straight-on view of Dhaulagiri's towering south face and the surrounding giants, including Tukuche Peak and the distant Annapurna massif. The journey then drops into the surreal, snow-covered expanse of the Hidden Valley (5,200m) before exiting via a harrowing descent into the Kali Gandaki Valley. The final leg concludes in the mountain hub of Jomsom, finishing a world-class mountaineering odyssey that stands as one of the most demanding and rewarding expeditions in the Nepalese Himalaya.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Drive to Beni (850 m)", description: "Morning departure by bus for a long, scenic drive passing through Pokhara and following the river highways to Beni. (7-8 hours' drive)" },
    { day: 4, title: "Trek to Babiachor (950 m)", description: "Begin trekking along the Myagdi Khola river valley, walking through rural villages and terraced farmlands to reach Babiachor. (5-6 hours)" },
    { day: 5, title: "Trek to Dharapani (1,400 m)", description: "Follow the river trail through subtropical forests, passing small settlement bridges before completing a steady climb up to Dharapani village. (6-7 hours)" },
    { day: 6, title: "Trek to Muri (1,850 m)", description: "Cross the Dhara Khola and tackle a steep, challenging uphill climb to reach the large, traditional Magar village of Muri. (5-6 hours)" },
    { day: 7, title: "Trek to Boghara (2,080 m)", description: "Descend a steep rocky trail to the riverbed before climbing through bamboo groves and terraced hillsides to the remote village of Boghara. (6-7 hours)" },
    { day: 8, title: "Trek to Dobang (2,520 m)", description: "Trek through dense, lush forests and steep canyon trails, crossing a wild suspension bridge over the Myagdi Khola to reach Dobang. (5-6 hours)" },
    { day: 9, title: "Trek to Choriban Khola (3,110 m)", description: "Follow a rugged trail deeper into the high alpine forests and river gorges, ascending steadily to the wilderness camp at Choriban Khola. (5-6 hours)" },
    { day: 10, title: "Trek to Italian Base Camp (3,660 m)", description: "Ascend past the tree line along the glacier terminal moraine, navigating rocky paths to set up camp directly beneath the massive west face of Dhaulagiri. (6-7 hours)" },
    { day: 11, title: "Italian Base Camp Rest Day (Acclimatization)", description: "A crucial rest and acclimatization day at the foot of the mountain wall to prepare for the high-altitude glacial terrain ahead." },
    { day: 12, title: "Trek to Glacier Camp (4,210 m)", description: "Navigate a challenging, narrow canyon trail across the glacier moraine and a seasonal landslide zone to reach Glacier Camp. (5-6 hours)" },
    { day: 13, title: "Trek to Dhaulagiri Base Camp (4,740 m)", description: "Follow the rugged, icy surface of the Chonbardan Glacier, climbing steadily to reach Dhaulagiri Base Camp for spectacular mountain views. (6-7 hours)" },
    { day: 14, title: "Dhaulagiri Base Camp Rest Day (Acclimatization)", description: "A mandatory rest day to rest your legs, adjust to the thin air, and check high-altitude gear before crossing the high passes." },
    { day: 15, title: "Cross French Pass (5,360 m) & Trek to Hidden Valley (5,200 m)", description: "Pass 1: Climb a steep, snowy moraine to the summit of French Pass for panoramic views of the entire Dhaulagiri massif. Descend into the vast, snow-covered Hidden Valley. (6-7 hours)" },
    { day: 16, title: "Cross Dhampus Pass (5,200 m) & Trek to Yak Kharka (3,680 m)", description: "Pass 2: Complete a steady snow climb over Dhampus Pass. Beginning, a long, knee-jarring descent down steep rocky switchbacks to the pastures of Yak Kharka. (5-6 hours)" },
    { day: 17, title: "Trek to Jomsom (2,710 m)", description: "Complete the final steep descent into the wind-blown Kali Gandaki Valley, passing the village of Marpha to reach the mountain hub of Jomsom. (5-6 hours)" },
    { day: 18, title: "Fly to Pokhara (822 m)", description: "Early morning mountain flight from Jomsom to Pokhara (30 mins). Private transfer to your lakeside hotel. Afternoon free to relax by Phewa Lake." },
    { day: 19, title: "Pokhara Exploration & Buffer Day", description: "A free day in Pokhara for relaxation or optional sightseeing, acting as a built-in buffer in case of flight delays from Jomsom." },
    { day: 20, title: "Drive to Kathmandu (1,400 m)", description: "Morning departure from Pokhara by tourist bus, retracing the scenic highway route back into Kathmandu. Private transfer to your hotel. (7-8 hours' drive)" },
    { day: 21, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Dhaulagiri',
  },
  'kanchenjunga-base-camp-trek-22-days': {
    title: 'Kanchenjunga Base Camp Trek',
    duration: '22 Days',
    difficulty: 'Very Strenuous / Challenging',
    elevation: '5,143 m / 16,873 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking/Hiking',
    accommodation: 'Hotel & Teahouse',
    heroImages: ['/assets/images/kanchenjunga-south.jpg', '/assets/images/kanchenjunga-north.jpg', '/assets/images/ghunsa.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Kanchenjunga Base Camp Trek', href: '#' },
    ],
    description: `The Kanchenjunga Base Camp Trek is an elite, long-duration wilderness expedition into the far eastern corner of Nepal, demanding exceptional physical endurance and mental resilience. Bordering Sikkim and Tibet, this challenging journey targets the dual base camps of Mt. Kanchenjunga (8,586m), the world's third-highest peak.`,
    highlights: [
      'The Double Base Camp Adventure (Pangpema 5,143 m and Oktang 4,730 m)',
      'The Third Highest Giant (8,586 m)',
      'A True Raw Wilderness',
      'The Five-Pass Traverse (Mirgin La and Sele La)',
      'Untouched Kanchenjunga Conservation Area (Red Pandas and Snow Leopards)',
      'Limbu and Rai Cultural Tapestry',
    ],
    overview: [
    "The Kanchenjunga Base Camp Trek is an elite, long-duration wilderness expedition into the far eastern corner of Nepal, demanding exceptional physical endurance and mental resilience. Bordering Sikkim and Tibet, this challenging journey targets the dual base camps of Mt. Kanchenjunga (8,586m), the world's third-highest peak. A standard 21-to-26-day itinerary is mandatory to safely navigate the vast distances and secure the extensive acclimatization required to explore both the North Base Camp (Pangpema at 5,143m) and the South Base Camp (Oktang at 4,730m).",

    "Success on this demanding horseshoe circuit requires a rigorous training regimen initiated at least 4 to 6 months before departure, focusing heavily on cardiovascular capacity and weighted hill climbing. The terrain is exceptionally rugged, transitioning from humid, subtropical river valleys to high-alpine glacial moraines and exposed, snow-prone crossings over the Mirgin La (4,663m) and Sele La (4,290m) passes. Given the absolute isolation, variable alpine weather, and physical toll of the route, comprehensive travel insurance covering high-altitude helicopter evacuation up to 5,500m is a strict prerequisite.",

    "Logistically, the Kanchenjunga region is heavily protected and strictly regulated as a restricted border zone. Solo trekking is legally prohibited, meaning a minimum of two trekkers accompanied by a licensed government guide is required to obtain the mandatory Special Restricted Area Permit (RAP), alongside the Kanchenjunga Conservation Area Project (KCAP) permit. The primary windows for a successful expedition are the stable autumn months (October-November) for clear mountain views and the vibrant spring season (March-May) when the lower forests are in full bloom.",

    "The trek reaches its dramatic climaxes at the windswept outposts of Pangpema and Oktang, rewarding trekkers with monumental, front-row views of Kanchenjunga's immense vertical ice faces, Jannu, and Kambachen. Far removed from commercialized trails, this pristine sanctuary offers deep wilderness isolation and a rare opportunity to experience the untouched cultural heritage of the local Limbu and Sherpa communities. The final leg follows a reflective descent back through the emerald foothills to Taplejung, concluding a world-class mountaineering odyssey that stands as one of the ultimate trekking achievements in the Himalaya.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Fly to Bhadrapur & Drive to Taplejung / Phidim (1,820 m)", description: "Morning domestic flight to the plains of Bhadrapur (45 mins). Board a private vehicle for a long scenic drive through rolling tea gardens and foothills to Taplejung or Phidim. (5-9 hours' drive)" },
    { day: 4, title: "Spare Day & Local Exploration", description: "A built-in contingency day to account for any flight or road delays, used for resting and exploring the local market town." },
    { day: 5, title: "Drive to Sukethum (1,585 m)", description: "Morning drive along rugged mountain roads tracing the Tamor River valley to the trailhead settlement of Sukethum. (4-5 hours' drive)" },
    { day: 6, title: "Trek to Amjilosa (2,396 m)", description: "Begin the trek along a narrow gorge, crossing suspension bridges and ascending steep rock-hewn trails alongside the Ghunsa Khola to Amjilosa. (6-7 hours)" },
    { day: 7, title: "Trek to Gyabla (2,730 m)", description: "Follow the riverbank through dense bamboo, oak, and rhododendron forests. Complete a final steep climb up to the Tibetan settlement of Gyabla. (4-5 hours)" },
    { day: 8, title: "Trek to Ghunsa (3,417 m)", description: "The valley opens as you pass through alpine meadows and the small village of Phale. Continue trekking to Ghunsa, the largest Sherpa village in the valley. (4-5 hours)" },
    { day: 9, title: "Ghunsa Rest Day (Acclimatization)", description: "A vital rest day to adapt to the altitude. Take an optional short hike to a local viewpoint or ridge and explore the historic monasteries in the village." },
    { day: 10, title: "Trek to Khambachen (4,050 m)", description: "Trek uphill along the riverbank through pine and larch forests. Cross glacial moraines and navigate landslide zones with views of Jannu (Khumbakarna) to reach Khambachen. (4-5 hours)" },
    { day: 11, title: "Trek to Lhonak (4,780 m)", description: "Climb steadily past a high seasonal settlement at Ramtang. Follow the edge of the Kanchenjunga Glacier over rocky moraine trails to the windy sandy plain of Lhonak. (4-6 hours)" },
    { day: 12, title: "Trek to Pangpema (North Base Camp - 5,143 m) & Return to Lhonak", description: "Trek along the grassy ridges and rocky moraine to Pangpema (Kanchenjunga North Base Camp) for direct views of Kanchenjunga's massive north face. Explore the area and return to Lhonak. (6-8 hours)" },
    { day: 13, title: "Trek to Ghunsa (3,417 m) via Khambachen", description: "Retrace your steps down the glacial valley, stopping at Khambachen for lunch before continuing the long descent back to the comforts of Ghunsa. (6-8 hours)" },
    { day: 14, title: "Trek to Selele Camp (4,200 m)", description: "Branch off the main valley trail and begin a steep, steady climb through moss-covered forests and alpine juniper pastures up to Selele Camp. (3-5 hours)" },
    { day: 15, title: "Cross High Passes & Trek to Tseram (3,870 m)", description: "Cross three challenging high-altitude passes (including the Mirgin La and Sinion La) featuring panoramic vistas of Makalu and Kanchenjunga. Descend steeply to the valley of Tseram. (5-7 hours)" },
    { day: 16, title: "Trek to Ramche (4,580 m)", description: "A shorter but high-altitude ascent alongside the ablation valley of the Yalung Glacier, passing small stone shelters to reach the alpine meadow of Ramche. (3-4 hours)" },
    { day: 17, title: "Trek to Oktang (South Base Camp - 4,730 m) & Return to Tseram", description: "Trek up the valley to the Oktang Viewpoint (Kanchenjunga South Base Camp) for views of the towering south wall and Yalung Glacier. Drop back down valley past Ramche to overnight in Tseram. (5-7 hours)" },
    { day: 18, title: "Trek to Tortong (2,995 m)", description: "Enjoy a long descent through thick rhododendron, pine, and moss-draped cloud forests running parallel to the Sumbuwa Khola to reach Tortong. (4-5 hours)" },
    { day: 19, title: "Trek to Yasang (2,144 m)", description: "Continue descending the valley slopes, crossing landslide sections and navigating a mix of forest trails to reach the small settlement of Yasang. (5-6 hours)" },
    { day: 20, title: "Trek to Hellok & Drive to Taplejung (1,820 m)", description: "Complete the final short trek down to the river confluence at Hellok. Meet your private vehicle for the rugged drive back to Taplejung town. (2-3 hours trek, 4-5 hours' drive)" },
    { day: 21, title: "Drive to Bhadrapur & Fly to Kathmandu", description: "Drive down from the mountains to the Bhadrapur airport to board your domestic flight back to Kathmandu. Private transfer to your hotel. (5-7 hours' drive, 45 mins flight)" },
    { day: 22, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Kanchenjunga',
  },
  'gokyo-renjo-la-pass-trek': {
    title: 'Gokyo and Renjo La Pass Trek',
    duration: '15 Days',
    difficulty: 'Strenuous / Challenging',
    elevation: '5,483 m / 17,988 ft',
    season: 'Mar-May, Sep-Nov',
    groupSize: '2 or more',
    activity: 'High Altitude Trekking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/renjo-la.jpg', '/assets/images/gokyo-ri-sunrise.jpg', '/assets/images/bhote-koshi.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Gokyo and Renjo La Pass Trek', href: '#' },
    ],
    description: `The Gokyo and Renjo La Pass Trek is a challenging 12- to 16-day high-altitude expedition into the remote Everest (Khumbu) region, typically starting with a scenic flight into Lukla. The trek leads adventurers through the secluded Gokyo Valley, renowned for its chain of pristine, turquoise glacial lakes, culminating in the ascent of Gokyo Ri (5,483 m).`,
    highlights: [
      'The Renjo La Pass Triumph (5,360 m)',
      'The Ultimate Everest Panorama',
      'The Six Turquoise Jewels (Gokyo Lakes 4,700m - 5,000m)',
      'The Supreme Gokyo Ri Viewpoint (5,357 m)',
      'The Untouched Bhote Koshi Valley',
      'Nepal\'s Longest Glacier (Ngozumpa Glacier)',
      'The Legendary Sherpa Capital (Namche Bazaar)',
      'The Tibetan-Style Outpost of Thame',
    ],
    overview: [
    "The Gokyo and Renjo La Pass Trek is a challenging 12-to-16-day high-altitude expedition into the remote Everest (Khumbu) region, typically starting with a scenic flight into Lukla. The trek leads adventurers through the secluded Gokyo Valley, renowned for its chain of pristine, turquoise glacial lakes, culminating in the ascent of Gokyo Ri (5,483 m). The primary aim is the spectacular crossing of the high-altitude Renjo La Pass (5,340 m), which rewards trekkers with a solitary, unparalleled panorama of four of the world's 8,000-meter giants: Mount Everest, Lhotse, Makalu, and Cho Oyu. Since the elevation consistently remains above 4,000 m for multiple days, the risk of Acute Mountain Sickness (AMS) is significant, demanding a conservative, slow pace and essential acclimatization days, particularly in Namche Bazaar.",

    "Physically, this is a strenuous and difficult trek, with daily walks averaging 6 to 8 hours and requiring excellent cardiovascular fitness and stamina for the high-altitude conditions and the demanding, icy climb over the Renjo La Pass. The route is supported by basic teahouse lodging, which becomes more rudimentary in the higher, remote settlements, offering limited food and facility choices compared to lower trails. For official entry, trekkers must secure the standard Sagarmatha National Park Entry Permit (SNP) and a Khumbu Pasang Lhamu Rural Municipality Entrance Permit. The ideal seasons for stable weather and clear mountain views are Autumn (September-November) and Spring (March-May), though temperatures remain cold at the high altitudes.",

    "This multi-day wilderness traverse is a supreme test of endurance for adventurers seeking the raw, untamed beauty of the Everest massif. Launching into the Khumbu via the iconic Lukla airstrip, the trail quickly diverts from the main thoroughfare, ascending into the secluded region characterized by the six sacred Gokyo Lakes. Unlike conventional routes, this itinerary is defined by its sustained exposure to the death zone's proximity, with camps consistently pitched in the thinner air above the tree line. Success on this high-risk path hinges entirely upon disciplined progression, requiring deliberate breaks for acclimatization, such as those scheduled in the Sherpa hub of Namche Bazaar, to mitigate the dangers of altitude illness.",

    "The ultimate reward is the legendary vista earned by conquering the high points: the pre-dawn climbs to Gokyo Ri and the technical negotiation of the Renjo La Pass. These efforts unlock a private, spectacular stadium of Himalayan giants, including the four 8,000 m pillars: Everest, Lhotse, Makalu, and Cho Oyu. Trekking here requires a peak level of physical conditioning to handle the demanding, long daily segments and the possibility of icy conditions on the pass. Accommodation is rustic, based around very simple teahouses that offer only essential provisions, reflecting the area's remote nature. The window for undertaking this demanding adventure is limited to the periods of highest weather stability, which fall during the crisp, clear air of Autumn and the pre-monsoon warmth of Spring.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, severe weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best workable solutions to keep your trip going. We really appreciate you're understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a clever idea to book your international flights with an extra day in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the choice to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival at Tribhuvan International Airport in Kathmandu (1,400 m)", description: "Arrival at Tribhuvan International Airport in Kathmandu (1,400 m) and transfer to the hotel. Overnight at a Hotel" },
    { day: 2, title: "Half day city tour", description: "Half day city tour. Afternoon trek briefing & preparation. Welcome dinner in a traditional, Nepali Restaurant" },
    { day: 3, title: "Fly to Lukla & Trek to Phakding (2,610 m)", description: "Fly to Lukla (2,840 m) from Kathmandu - 35 minutes or drive to Manthali/Ramechhap (474 m) by shared tourist vehicle - 5 to 6 hours and a 20-minute flight to Lukla, and then trek to Phakding (2,610 m) - 3 to 4 hours. Overnight at a guesthouse." },
    { day: 4, title: "Trek to Namche Bazaar (3,440 m)", description: "Trek to Namche Bazaar (3,440m) from Phakding - 5 to 6 hours. Overnight at Guesthouse." },
    { day: 5, title: "Acclimatization Day at Namche Bazaar", description: "Acclimatization Day at Namche Bazaar. Hiking to Everest View Hotel (3,880 m) and back. Overnight at a Guesthouse." },
    { day: 6, title: "Trek to Dole (4,200 m)", description: "Trek to Dole (4,200 m) from Namche Bazaar - 6 to 7 hours. Overnight at a Guesthouse." },
    { day: 7, title: "Trek to Machherma (4,470 m)", description: "Trek to Machherma (4,470 m) from Dole - 5 to 6 hours. Overnight at a Guesthouse." },
    { day: 8, title: "Trek to Gokyo (4,800 m)", description: "Trek to Gokyo (4,800 m) from Machherma - 5 to 6 hours. Overnight at a Guesthouse." },
    { day: 9, title: "Trek to Gokyo Ri (5,483 m) and Back to Gokyo", description: "Trek to Gokyo Ri (5,483 m) and Back to Gokyo - 5 to 6 hours. Overnight at a Guesthouse." },
    { day: 10, title: "Trek to Lunden (4,300 m) via Renjo La Pass (5,340 m)", description: "Trek to Lunden (4,300 m) from Gokyo via crossing Renjo La Pass (5,340 m) - 7 to 8 hours. Overnight at a Guesthouse." },
    { day: 11, title: "Trek to Thame (3,800 m)", description: "Trek to Thame (3,800 m) from Lunden - 4 to 5 hours. Overnight at a Guesthouse." },
    { day: 12, title: "Trek to Namche Bazaar (3,440 m)", description: "Trek to Namche Bazaar (3,440 m) from Thame - 3 to 4 hours. Overnight at a Guesthouse." },
    { day: 13, title: "Trek to Lukla (2,840 m)", description: "Trek to Lukla (2,840 m) from Namche Bazaar - 5 to 6 hours. Overnight at a Guesthouse." },
    { day: 14, title: "Fly to Kathmandu", description: "Flight back to Kathmandu - 35 minutes or Manthali/Ramechhap - 20 minutes from Lukla and same day drive to Kathmandu by shared tourist vehicle - 5 to 6 hours. Overnight at a 3-star hotel." },
    { day: 15, title: "Departure", description: "Transfer to the international airport for your final departure." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Renjo La',
  },
  'annapurna-base-camp-trek-14-days': {
    title: 'Annapurna Base Camp Trek',
    duration: '14 Days',
    difficulty: 'Strenuous / challenge',
    elevation: '4,130 m / 13,550 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking / Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/annapurna-base-camp-sanctuary.jpg', '/assets/images/abc-sunrise.jpg', '/assets/images/chhomrong.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Annapurna Base Camp Trek', href: '#' },
    ],
    description: `The Annapurna Base Camp (ABC) Trek is a legendary high-altitude journey that leads into the heart of a spectacular glacial amphitheater. The adventure begins with travel from Kathmandu to the lakeside capital of Pokhara before starting the foot trail in the lower foothills.`,
    highlights: [
      'The Inward Journey to the Sanctuary',
      'The Annapurna Base Camp Triumph (4,130 m)',
      'The Bonus Poon Hill Sunrise (3,210 m)',
      'First light hits Mt. Dhualagiri (8,167 m)',
      'The Sacred Machhapuchhre Sentry (Fishtail 6,993 m)',
      'The Lush Bamboo and Rhododendron Canopy',
      'Therapeutic Jhinu Danda Hot Springs',
      'The Iconic Lakeside Rewind',
    ],
    overview: [
    "The Annapurna Base Camp (ABC) Trek is a legendary high-altitude journey that leads into the heart of a spectacular glacial amphitheater. The adventure begins with travel from Kathmandu to the lakeside capital of Pokhara before starting the foot trail in the lower foothills. A comprehensive 14-day itinerary is strategically designed to integrate the classic sunrise viewpoint of Poon Hill (3,210m) before ascending through the deep Modi Khola gorge to the primary objective: Annapurna Base Camp at 4,130 meters. This extended pacing ensures a natural, progressive acclimatization profile while allowing ample time to absorb the changing geography.",

    "Success on this moderate-to-strenuous circuit requires dependable cardiovascular fitness and lower-body stamina, as the trail is famous for its relentless stone staircases, most notably the steep 3,000 stone steps leading up to Ulleri. Trekkers navigate a highly varied terrain that moves from terraced farmlands and dense, ancient rhododendron forests up into the stark, exposed alpine sanctuary. Logistically, this trek takes place entirely within the Annapurna Conservation Area, requiring an official ACAP permit and a TIMS card. The ideal operational windows are the exceptionally clear post-monsoon autumn (October-November) and the vibrant pre-monsoon spring (March-May), and standard travel insurance covering high-altitude medical evacuation is highly recommended.",

    "The 14-day routing provides an unrivaled cultural and natural immersion through traditional Gurung and Magar villages like Ghorepani and Chhomrong. As you ascend, the trail transitions from lush, subtropical valleys into the narrow, dramatic walls of the Annapurna Sanctuary, a region deeply revered by local communities. This meticulously designed itinerary keeps a grand horizon of snow-capped peaks—including the massive bulk of Annapurna South, Hiunchuli, and the sacred, unclimbed spire of Mt. Machhapuchhre (Fishtail)—as your intimate companions, culminating in a dramatic shift from the dense jungle to the thin, silent air of the upper atmosphere.",

    "The expedition reaches its breathtaking climax at Annapurna Base Camp (4,130m), where trekkers are rewarded with an unobstructed, 360-degree ring of giant peaks towering over 7,000 and 8,000 meters, including the sheer south face of Annapurna I (8,091m). Standing in this natural snow bowl offers a profound sense of isolation and immense physical triumph. The descent follows a reflective path back down the Modi Khola valley, incorporating a rejuvenating stop at the natural riverside hot springs of Jihnu Danda to soothe tired muscles before returning to Pokhara and Kathmandu, concluding a world-class Himalayan odyssey that masterfully balances physical achievement with rich local heritage.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Drive to Pokhara (900 m)", description: "Depart Kathmandu early on a comfortable tourist bus, enjoying a scenic journey following the Trishuli and Marsyangdi rivers to the lakeside city of Pokhara. (7-9 hours' drive)" },
    { day: 4, title: "Drive to Birethanti & Trek to Ulleri (2,020 m)", description: "Take a short morning drive to the trailhead at Birethanti. Cross the suspension bridges and begin your trek with a steady, steep climb up the famous stone staircases to Ulleri village. (1 hour drive, 4-5 hours trek)" },
    { day: 5, title: "Trek to Ghorepani (2,840 m)", description: "Trek uphill through dense, beautiful oak and rhododendron forests, passing small streams and waterfalls before arriving at the vibrant village ridge of Ghorepani. (5-6 hours)" },
    { day: 6, title: "Hike Poon Hill & Trek to Chuile (2,284 m)", description: "Early morning hike up Poon Hill (3,210m) for a spectacular sunrise panorama of the Annapurna and Dhaulagiri ranges. Return for breakfast, then trek across high ridges, descending through deep rhododendron forests and crossing the Bhurungdi Khola to reach Chuile. (7-8 hours total)" },
    { day: 7, title: "Trek to Sinuwa (2,360 m)", description: "Descend to the Kimrong Khola, cross a suspension bridge, and climb steeply up through terraced hillsides to Chhomrong—the largest Gurung village in the sanctuary. Descend the stone steps of Chhomrong and make a final climb to the ridge of Sinuwa. (6-7 hours)" },
    { day: 8, title: "Trek to Deurali (3,230 m)", description: "Walk through deep, moss-draped bamboo and rhododendron forests, descending to Bamboo before climbing steadily past Dovan and the sacred Hinku Cave. Follow the narrowing canyon trail alongside the Modi Khola to reach Deurali. (6-7 hours)" },
    { day: 9, title: "Trek to Annapurna Base Camp (4,130 m)", description: "The Highlight: Climb steadily past Machhapuchhre Base Camp (3,700m), entering the snow-rimmed amphitheater of the Annapurna Sanctuary. Continue a gradual, high-altitude ascent to Annapurna Base Camp for unmatched, 360-degree views of the surrounding massive mountain walls. (5-6 hours)" },
    { day: 10, title: "Trek to Bamboo (2,345 m)", description: "Wake up early for a spectacular sunrise over the high peaks. After breakfast, turn around and retrace your steps back down through the deep Modi Khola gorge, enjoying an easy, mostly downhill hike to Bamboo. (6-7 hours)" },
    { day: 11, title: "Trek to Jihinu Danda (1,780 m)", description: "Trek back up through the forest to Sinuwa, then descend the steep stone steps to cross the Chhomrong Khola. Climb back up to Chhomrong village before dropping down a steep trail to Jihinu Danda, where you can soothe your muscles in the riverside natural hot springs. (4-5 hours)" },
    { day: 12, title: "Trek to Syauli Bazaar & Drive to Pokhara (900 m)", description: "Complete the final leg of your trek, walking down terraced stone steps and rural farmlands to Syauli Bazaar. Meet your private vehicle for the drive back to Pokhara for a celebratory lakeside evening. (2-3 hours trek, 2-4 hours' drive)" },
    { day: 13, title: "Drive to Kathmandu (1,400 m)", description: "Board your tourist bus in the morning to retrace the highway route back into the Kathmandu valley. Private transfer to your hotel. (7-9 hours' drive)" },
    { day: 14, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'ABC',
  },
  'annapurna-circuit-trek-16-days': {
    title: 'Annapurna Circuit Trek',
    duration: '16 Days',
    difficulty: 'Strenuous / Challenging',
    elevation: '5,416 m / 17,769 ft',
    season: 'Feb, May - Sep, Dec',
    groupSize: '2 or more',
    activity: 'Trekking/Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/annapurna-circuit.jpg', '/assets/images/thorong-la-prayer-flags.jpg', '/assets/images/manang-valley.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Annapurna Circuit Trek', href: '#' },
    ],
    description: `The Annapurna Circuit Trek is a legendary journey through the diverse terrain of the Nepalese Himalayas. It's a long-distance route that physically circumnavigates the colossal Annapurna Mountain range, offering trekkers an experience that changes dramatically day by day.`,
    highlights: [
      'The Thorong La Pass Triumph (5,416 m)',
      'Ultimate Climate Transformation (Himalayan desert canyons to frozen glacial zones)',
      'The Sacred Sanctuary of Muktinath (3,760 m)',
      'The Deepest Gorge on Earth (between Annapurna I and Dhaulagiri)',
      'The Traditional Upper Trail Heritage',
      'The High-Altitude Oasis of Manang (3,540 m)',
      'The White-Washed Stone Villages',
      'The Spectacular Lakeside Finish in Pokhara',
    ],
    overview: [
    "The Annapurna Circuit Trek is a legendary journey through the diverse terrain of the Nepalese Himalayas. It's a long-distance route that physically circumnavigates the colossal Annapurna Mountain range, offering trekkers an experience that changes dramatically day by day.",

    "The expedition typically begins in the lower, warmer regions, where the landscape is characterized by lush, terraced hillsides, vibrant green rice paddies, and the constant flow of rivers carving their way through deep gorges. As you steadily gain elevation, the environment gradually shifts. You transition from dense, sub-tropical forests to cooler, temperate zones dominated by pine and eventually rhododendron trees.",

    "Continuing upward, the air thins, and the scenery transforms into an arid, almost desert-like plateau. Here, the influence of Tibetan Buddhism becomes more pronounced, with traditional stone villages, ancient monasteries, chortens, and prayer flags adorning the trails. The path often follows river valleys, sometimes crossing dramatic suspension bridges high above glacial meltwaters.",

    "The trek involves a steady, progressive ascent to high altitudes, which demands good physical fitness and a disciplined approach to acclimatization. The route is dotted with \"teahouses\" - local lodges that provide basic but comfortable accommodation and meals, allowing trekkers to carry lighter packs without the need for camping gear.",

    "The overall experience is one of continuous change - not just in scenery, but in climate, vegetation, and local culture. The trail itself varies from well-worn paths to rocky, uneven terrain, with sustained uphill climbs and equally challenging descents. It's a journey that connects you with the raw power of the mountains and the enduring spirit of the people who call this magnificent region home",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trek going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest up and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add on sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Drive to Dharapani (1,860 m)", description: "Long scenic drive from Kathmandu along the Trishuli and Marsyangdi rivers, passing Besisahar to reach Dharapani. (8-9 hours' drive)" },
    { day: 4, title: "Trek to Chame (2,670 m)", description: "Trek through pine forests and narrow valleys, passing steep cliffs and traditional stone villages to reach Chame, the district headquarters of Manang. (5-6 hours)" },
    { day: 5, title: "Trek to Pisang (3,200 m)", description: "Walk through deep forests and a dramatic narrow valley trail, passing the massive Paungda Danda rock face to reach Pisang village. (5-6 hours)" },
    { day: 6, title: "Trek to Manang (3,540 m)", description: "Trek via the scenic upper route through Ghyaru and Ngawal for exceptional views of Annapurna II and III, descending into the wide Manang valley. (6-7 hours)" },
    { day: 7, title: "Manang Rest Day (Acclimatization)", description: "Short morning acclimatization hike to Gangapurna Lake or Chongkor Viewpoint. Spend the afternoon resting or exploring the historic Manang village." },
    { day: 8, title: "Trek to Yak Kharka (4,050 m)", description: "Leave the Marsyangdi valley and climb steadily through alpine scrub and juniper pastures, crossing a small river to reach Yak Kharka. (4-5 hours)" },
    { day: 9, title: "Trek to Thorong Phedi (4,525 m)", description: "A steady, high-altitude climb along the riverbank before crossing a suspension bridge. Follow an undulating trail across a landslide area to reach Thorong Phedi base camp. (4-5 hours)" },
    { day: 10, title: "Cross Thorong La (5,416 m) & Trek to Muktinath (3,760 m)", description: "Early pre-dawn starts with the long, steep climb to the summit of Thorong La Pass. Descend a steep, rocky trail down to the sacred pilgrimage site of Muktinath. (8-9 hours)" },
    { day: 11, title: "Trek to Jomsom (2,720 m) via Kagbeni", description: "Trek down through the arid, wind-blown landscapes of the Kali Gandaki valley, passing the ancient village of Kagbeni to reach Jomsom. (5-6 hours)" },
    { day: 12, title: "Fly to Pokhara (822 m)", description: "Early morning mountain flight from Jomsom to Pokhara (25 mins). Private transfer to your lakeside hotel. Afternoon free to relax by Phewa Lake." },
    { day: 13, title: "Pokhara Exploration & Rest", description: "A free day in Pokhara for relaxation or optional sightseeing, such as boating on Phewa Lake or visiting Davis Falls and the Peace Pagoda." },
    { day: 14, title: "Fly to Kathmandu", description: "Morning flight from Pokhara back to Kathmandu. Private transfer to your hotel and a free afternoon for relaxation or last-minute shopping in Thamel." },
    { day: 15, title: "Kathmandu Buffer Day", description: "A free contingency day in Kathmandu for leisure, shopping, or in case of any flight delays from Jomsom or Pokhara." },
    { day: 16, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Annapurna Circuit',
  },
  'upper-mustang-trek-17-days': {
    title: 'Upper Mustang Trek (Drive & Trek)',
    duration: '17 Days',
    difficulty: 'Strenuous / challenge',
    elevation: '3,810 m / 12,500 ft',
    season: 'Spring (March to May) & Autumn (September to November)',
    groupSize: '2 or more',
    activity: 'Trekking / Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/lo-manthang-walls.jpg', '/assets/images/mustang-sky-caves.jpg', '/assets/images/muktinath-temple.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Upper Mustang Trek', href: '#' },
    ],
    description: `The Upper Mustang Trek is a fascinating journey into the ancient, rain-shadow highlands of the former Kingdom of Lo, offering a rare glimpse into a structurally intact Tibetan Buddhist civilization. The adventure typically begins with a scenic flight or drive from Pokhara to the windswept airstrip of Jomsom (2,720m), the gateway to the Lower Mustang region.`,
    highlights: [
      'The Ultimate High-Desert Synthesis',
      'The Mystical Walled Capital of Lo Manthang (3,810 m)',
      'The Fourteenth-Century Treasures of Luri Gumba (3,880 m)',
      'The Sacred Cliffs of Chungsi Cave',
      'The Centuries-Old Wonders of Ghar Gompa',
      'The Great Sky Caves and Clay Canyons',
      'The Long Wilderness Traverse to Tangye and Tetang',
      'The Sacred Crossroads of Muktinath (3,760 m)',
    ],
    overview: [
    "The Upper Mustang Trek is a fascinating journey into the ancient, rain-shadow highlands of the former Kingdom of Lo, offering a rare glimpse into a structurally intact Tibetan Buddhist civilization. The adventure typically begins with a scenic flight or drive from Pokhara to the windswept airstrip of Jomsom (2,720m), the gateway to the Lower Mustang region. A standard 17-day itinerary utilizes a strategic \"Drive & Trek\" hybrid model, blending targeted off-road jeep transfers across the newly carved Kali Gandaki tracks with classic foot trekking. This approach safely accelerates transit through dusty, exposed sections while preserving ample time to explore the walled capital of Lo Manthang (3,840m) without the risk of rapid altitude sickness.",

    "Success on this moderate high-altitude loop requires dependable cardiovascular endurance and leg strength, though the physical demands are less intense than those of Nepal's technical pass crossings. The terrain is a stark, striking alpine desert, characterized by undulating trails across exposed ridges, deep canyons, and colossal, wind-carved red clay cliffs. While the maximum sleeping elevation rarely exceeds 3,900 meters, trekkers must contend with dry, dust-laden afternoon gales and intense solar radiation, requiring specialized wrap-around eyewear, a high-SPF sun barrier, a windproof shell, and durable, broken-in trekking boots.",

    "Logistically, Upper Mustang is a strictly regulated border zone bordering Tibet, where solo or independent trekking is legally prohibited. Trekkers must travel in a minimum group of two people accompanied by a licensed government guide, and secure a mandatory Special Restricted Area Permit (RAP) priced at a premium rate ($500 USD for the first 10 days)—alongside the Annapurna Conservation Area Project (ACAP) permit. Due to its position in the Himalayan rain shadow, Upper Mustang is one of Nepal's rare monsoon-season treks (June-September), offering clear, dry skies when the rest of the country is blanketed in heavy rains, though the post-monsoon autumn (October-November) and spring (March-May) remain highly popular. Standard teahouse infrastructure is widespread and comfortable, though specialized travel insurance covering emergency medical evacuation remains a baseline requirement.",

    "The absolute climax of the 17-day itinerary is the arrival at the medieval, white-washed walled city of Lo Manthang, founded in the 14th century. Trekkers spend multiple days exploring centuries-old active monasteries like Thubchen and Jampa Gompa, which house priceless Tibetan Buddhist wall murals, and touring the multi-storied Royal Palace. The hybrid itinerary frequently incorporates a jeep excursion to the fascinating Chhoser Cave complex, a network of ancient, multitietered cliff dwellings carved directly into vertical rock faces. The return loop follows an alternative path through isolated settlements like Yara and Tangbe, past cascading red chortens and long mani walls, before concluding in Jomsom for the return journey to Pokhara and Kathmandu.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and private transfer to your hotel. Rest and enjoy free time to explore the vibrant streets of Thamel." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Drive to Pokhara (900 m)", description: "Depart Kathmandu early on a comfortable tourist bus, enjoying a scenic journey following the Trishuli and Marsyangdi rivers to the lakeside city of Pokhara. (7-9 hours' drive)" },
    { day: 4, title: "Fly to Jomsom & Drive to Kagbeni (2,810 m)", description: "Take an early morning flight from Pokhara to Jomsom (30 mins), offering spectacular views of Dhaulagiri and Annapurna. Upon arrival, meet your trekking crew and take a short drive across the windy Kali Gandaki riverbed to Kagbeni, the historic gateway to Upper Mustang. (35-45 mins drive)" },
    { day: 5, title: "Drive to Samar, Hike to Chungsi Cave & Drive to Ghami (3,520 m)", description: "Enter the restricted region of Upper Mustang. Drive to Samar, then cross a rugged trail to hike up to the hidden Chungsi Cave monastery, a sacred site tied to Guru Rinpoche. Hike up to Syangboche before boarding your vehicle to cross high alpine passes and descend into the village of Ghami. (4-6 hours' drive, 2-3 hours trek)" },
    { day: 6, title: "Trek to Ghar Gompa & Tsarang / Charang (3,560 m)", description: "Trek through Upper Mustang's red-cliff terrain to reach the ancient, 8th-century Ghar Gompa (Lo Gekar) for lunch and exploration. After discovering its historic murals, continue your trek across the landscape to the prominent fortress village of Tsarang. (5-6 hours)" },
    { day: 7, title: "Drive to Lo Manthang (3,810 m)", description: "Take a short, scenic morning drive across the windy Lo Pass (3,850m), where the walled capital first comes into view. Descend into the medieval city of Lo Manthang and check into your lodge. (2-3 hours' drive)" },
    { day: 8, title: "Lo Manthang Exploration Day", description: "A dedicated day to explore the historic walled city. Visit the ancient King's Palace, the monumental Thupchen Gompa, Chode Gompa (Dragkar Thegchen Ling), and the grand, three-story Jampa Lhakhang monastery to immerse yourself in traditional Tibetan Buddhist culture." },
    { day: 9, title: "Trek to Yara (3,650 m)", description: "Leave the walled city and head east into the remote, canyon-carved landscape of Upper Mustang. Cross the Kali Gandaki River and navigate striking wind-sculpted fluted cliffs to reach the isolated village of Yara. (6-7 hours)" },
    { day: 10, title: "Excursion to Luri Gumba & Return to Yara", description: "Trek up through a dramatic, desert-like canyon to visit the remarkable Luri Gumba. Carved directly into a sandstone cliff, this ancient cave monastery features rare, beautifully preserved 14th-century frescoes. Return to Yara for the night. (6-7 hours round trip)" },
    { day: 11, title: "Trek to Tangge (3,340 m)", description: "Embark on a challenging and remote trek across high, arid plateaus. Enjoy sweeping views of the Dhaulagiri and Nilgiri ranges before dropping down into the traditional, tightly clustered village of Tangge, famous for its massive row of chortens. (6-7 hours)" },
    { day: 12, title: "Trek to Tetang (3,040 m)", description: "A long, demanding day crossing the high, wind-swept wilderness of the Paa Pass (4,210 m). Follow a scenic ridge trail with immense views of the surrounding peaks before descending steeply into the fortified village of Tetang. (8-9 hours)" },
    { day: 13, title: "Trek to Muktinath (3,760 m)", description: "Complete your final day of trekking by climbing up past the Gyu La Pass (4,077 m), enjoying spectacular panoramic views of the Annapurna massif. Drop down to exit the restricted area and arrive at the sacred pilgrimage hub of Muktinath. (5-6 hours)" },
    { day: 14, title: "Drive to Jomsom & Fly to Pokhara (900 m)", description: "Take an early morning drive down through the wind-blown Kali Gandaki valley back to Jomsom. Catch your morning flight back to Pokhara and enjoy a relaxing afternoon along Phewa Lake. (1-2 hours' drive, 30 mins flight)" },
    { day: 15, title: "Weather Contingency Day (Pokhara)", description: "A built-in buffer day in Pokhara to secure your schedule in case the mountain flights out of Jomsom face weather-related delays or cancellations. Enjoy optional lakeside sightseeing or boating." },
    { day: 16, title: "Drive to Kathmandu (1,400 m)", description: "Board your tourist bus in the morning to retrace the highway route back through the foothills and into the Kathmandu valley. Private transfer to your hotel. (6-7 hours drive)" },
    { day: 17, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Upper Mustang',
  },
  'everest-base-camp-trek': {
    title: 'Everest Base Camp Trek',
    duration: '16 Days',
    difficulty: 'Strenuous / Challenging',
    elevation: '5,545 m / 18,192 ft',
    season: 'Spring (March to May) & Autumn (Late September to November)',
    groupSize: '2 or more',
    activity: 'Trekking/Hiking',
    accommodation: 'Tea House & Hotel',
    heroImages: ['/assets/images/everest-base-camp-khumbu.jpg', '/assets/images/kala-patthar.jpg', '/assets/images/namche-bazaar.jpg'],
    breadcrumb: [
      { label: 'Nepal', href: '/Nepal' },
      { label: 'Treks', href: '/Nepal#trekking' },
      { label: 'Everest Base Camp Trek', href: '#' },
    ],
    description: `The Everest Base Camp (EBC) Trek is a world-renowned high-altitude journey that demands strong cardiovascular fitness and mental resilience. The expedition begins with a flight to the mountain airstrip of Lukla (2,846m) and follows the historic Khumbu trail toward the ultimate objective: Everest Base Camp at 5,364m.`,
    highlights: [
      'The Kala Patthar Sunrise Milestone (5,550 m)',
      'The World\'s Highest Luxury Views',
      'The Vibrant Sherpa Capital',
      'Spiritual Wonders of Tengboche Monastery (3,867 m)',
      'The Yeti Scalp of Khumjung',
      'The Memorial Ridge at Thukla Pass',
      'Four 8,000-Meter Peaks (Everest, Lhotse, Makalu, and Cho Oyu)',
    ],
    overview: [
    "The Everest Base Camp (EBC) Trek is a world-renowned high-altitude journey that demands strong cardiovascular fitness and mental resilience. The expedition begins with a flight to the mountain airstrip of Lukla (2,846m) and follows the historic Khumbu trail toward the ultimate objective: Everest Base Camp at 5,364m. A standard 12-to-14-day itinerary is essential to ensure safe acclimatization, with mandatory rest days in Namche Bazaar and Dingboche to allow your body to adapt to the significantly thinning air of the high Himalaya.",

    "Success on this iconic route depends on consistent physical preparation, focusing on leg strength and aerobic endurance at least 3 months before arrival. The terrain is rugged and steep, requiring high-quality, broken-in trekking boots and a versatile layering system to manage temperatures that range from mild valley sun to sub-zero alpine nights. Logistically, this trek requires the Sagarmatha National Park permit and the Khumbu Pasang Lhamu local permit. The ideal windows for trekking are the stable post-monsoon months (October-November) and the clear pre-monsoon season (March-May), and comprehensive insurance covering helicopter evacuation is an absolute necessity.",

    "The EBC trek offers an unparalleled immersion into Sherpa culture and the golden age of Himalayan exploration. Starting in the vibrant hub of Namche Bazaar, the trail winds through ancient rhododendron forests and high-altitude monasteries, most notably at Tengboche. This itinerary is designed to showcase the spiritual and natural beauty of the Khumbu, keeping the world's highest peaks—including Lhotse, Nuptse, and the towering summit of Mt. Everest (8,848m)—as your constant companions.",

    "The journey reaches its dramatic climax at Everest Base Camp and the nearby viewpoint of Kala Patthar (5,545m), which offers the most famous panoramic view of the Everest Massif. This experience is more than a high-altitude feat; it is a profound journey through a landscape of giants, connecting the bustling tea houses of the lower valley to the stark, frozen world of the Khumbu Icefall. The final leg follows a reflective descent back to Lukla, concluding a world-class odyssey that balances immense physical achievement with a deep connection to the highest place on Earth.",

    "NOTE: We strive to stick to our planned itinerary, but sometimes things happen that are beyond our control. This could include flight issues, bad weather, natural disasters, new government rules, political unrest, or even a trekker's health. When these situations arise, we'll do our best to find the best possible solutions to keep your trip going. We really appreciate your understanding and flexibility if we need to make changes.",

    "We highly recommend arriving a day or two before your trip officially begins. This gives you time to rest and get any last-minute gear or clothing you might need for the trek. It's also a good idea to book your international flights with a few extra days in Nepal, both before and after your trek. That way, you're covered if there are any flight delays or cancellations. Plus, you have the option to personalize your trip! You can add sightseeing tours in Kathmandu or Pokhara, try other adventure sports, or enjoy day trips around the country before or after your trek."
  ],

  itinerary: [
    { day: 1, title: "Arrival in Kathmandu (1,400 m)", description: "Airport pick-up and transfer to your hotel. Rest and free time to explore the Thamel area." },
    { day: 2, title: "Kathmandu Sightseeing & Preparation", description: "Morning guided tour of city landmarks. Afternoon trek briefing, gear check, and a welcome dinner at a traditional Nepali restaurant." },
    { day: 3, title: "Fly to Lukla & Trek to Phakding (2,610 m)", description: "Early morning flight to Lukla (35 mins). Begin trekking downhill and flat trail along the river to Phakding. (3-4 hours)" },
    { day: 4, title: "Trek to Namche Bazaar (3,450 m)", description: "Trek through pine forests and cross several suspension bridges. Complete a final steep uphill climb to reach the Sherpa capital of Namche. (6-7 hours)" },
    { day: 5, title: "Namche Rest Day (Acclimatization)", description: "Short morning hike to the Everest View Hotel for mountain panoramas. Spend the afternoon visiting the local museum or exploring the Namche market." },
    { day: 6, title: "Trek to Phortse (3,810 m)", description: "Trek along a scenic hillside trail with views of Ama Dablam. Descend to the river and climb back up to the traditional village of Phortse. (5-6 hours)" },
    { day: 7, title: "Trek to Dingboche (4,350 m)", description: "Walk through rhododendron forests and the village of Pangboche. Continue a steady climb into the wide Imja Valley to reach Dingboche. (5-6 hours)" },
    { day: 8, title: "Dingboche Rest Day (Acclimatization)", description: "Acclimatization hike to the top of Nangkartshang Peak (5,083 m). Return to the village for lunch and a restful afternoon." },
    { day: 9, title: "Trek to Lobuche (4,910 m)", description: "Trek toward Thukla and climb the steep memorial pass. Follow the glacial moraine trail until you reach the small settlement of Lobuche. (5-6 hours)" },
    { day: 10, title: "Trek to Gorakshep & Everest Base Camp (5,364 m)", description: "Trek to Gorakshep for lunch. Continue a rocky path to reach Everest Base Camp, explore the site, and return to Gorakshep for the night. (7-8 hours)" },
    { day: 11, title: "Hike Kala Patthar & Trek to Pheriche (4,240 m)", description: "Pre-dawn hike to the summit of Kala Patthar (5,545 m) for sunrise views. Descend to Gorakshep for breakfast, then continue down to Pheriche. (7-8 hours)" },
    { day: 12, title: "Trek to Namche (3,450 m)", description: "Descend through the valley, passing through the village of Pangboche and the Tengboche Monastery. Continue the hike back to Namche Bazaar. (6-7 hours)" },
    { day: 13, title: "Trek to Phakding (2,610 m)", description: "A long descent down the \"Namche Hill,\" crossing suspension bridges and following the Dudh Koshi River back to Phakding. (4-5 hours)" },
    { day: 14, title: "Trek to Lukla (2,840 m)", description: "Complete the final leg of the trek with a mix of uphill and flat trails leading back into Lukla for a farewell celebration. (3-4 hours)" },
    { day: 15, title: "Fly to Kathmandu", description: "Morning flight from Lukla back to Kathmandu. Private transfer to your hotel and a free afternoon for relaxation or shopping." },
    { day: 16, title: "Departure", description: "Final breakfast at the hotel and private transfer to Tribhuvan International Airport for your flight home." }
  ],
    included: [],
    excluded: [],
    notes: [
      'For every two participants, we assign one porter. Each porter carries a maximum of 25kg / 55 lbs. in total.',
      'Your duffel bag, which should weigh no more than 12.5 kg / 27.56 lbs. per client, will be carried by the porter throughout the trek.',
      'To carry your daily necessities (cash, papers, water bottle, camera, toiletries, sunscreen, clothing, etc.), you must have your own daypack with a waterproof cover.',
      'You can store your luggage (non-trekking items) at the hotel in Kathmandu.',
      'A high-quality down jacket with a hood, essential for warmth at altitudes above 4,000m, is included. A charge of USD 150 will apply in case of loss or significant damage to the jacket.',
      'A 4-season sleeping bag, crucial for comfortable rest throughout your trek, is also included. A charge of USD 150 will apply in case of loss or significant damage.',
    ],
    ctaText: 'Everest',
  },
};